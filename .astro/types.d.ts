declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"lessons": {
"deti.mdx": {
  id: "deti.mdx",
  slug: "deti",
  body: string,
  collection: "lessons",
  data: any
},
"funkcniFitness.mdx": {
  id: "funkcniFitness.mdx",
  slug: "funkcnifitness",
  body: string,
  collection: "lessons",
  data: any
},
"funkcniFitness2.mdx": {
  id: "funkcniFitness2.mdx",
  slug: "funkcnifitness2",
  body: string,
  collection: "lessons",
  data: any
},
"joga.mdx": {
  id: "joga.mdx",
  slug: "joga",
  body: string,
  collection: "lessons",
  data: any
},
"kondicka.mdx": {
  id: "kondicka.mdx",
  slug: "kondicka",
  body: string,
  collection: "lessons",
  data: any
},
"silovka.mdx": {
  id: "silovka.mdx",
  slug: "silovka",
  body: string,
  collection: "lessons",
  data: any
},
"vzpirani.mdx": {
  id: "vzpirani.mdx",
  slug: "vzpirani",
  body: string,
  collection: "lessons",
  data: any
},
"zacatecnici.mdx": {
  id: "zacatecnici.mdx",
  slug: "zacatecnici",
  body: string,
  collection: "lessons",
  data: any
},
},

	};

	type ContentConfig = never;
}
