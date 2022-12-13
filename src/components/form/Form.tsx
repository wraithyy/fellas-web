import { Input } from "./Input";

export const Form = () => {
  return (
    <div className="w-full h-full">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full">
        <div className="flex flex-col items-left justify-between">
          <h2 className="text-xl font-semibold leading-6 mb-4 text-left">
            Mám zájem o Úvodní kurz do Funkčního Fitness
          </h2>
          <Input label="Tvoje jméno (*)" type="text" />
          <Input label="Tvoje tel. číslo (*)" type="tel" />
          <Input label="Tvůj email (*)" type="email" />
          <div className="flex">
            <button
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Odeslat
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
