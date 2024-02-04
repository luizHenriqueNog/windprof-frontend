import IconSunTwentyFour from "./icons/IconSunTwentyFour";

export const ChatPlaceholder = () => {
    return (
        <div className="m-5">
            
            <h3 className="text-4xl font-bold text-center my-8 text-blue-100 dark:text-white">WindProf</h3>
            <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">
            <div className="w-full">
                <div className="flex justify-center items-center text-lg mb-3 text-blue-100 dark:text-white">
                        <IconSunTwentyFour width={24} height={24} className="mr-3" />
                        Exemplo de uso
                    </div>
                    <div className="bg-grey-100 dark:bg-white/5 rounded text-sm text-blue-100 dark:text-white mb-3 p-3">
                        <p>
                            Traduza para Tailwind: {`.btn {
                                background-color: #DADADA;
                                border: 1px;
                                border-radius: 14px;
                                color: #000;
                            }`}
                        </p>
                    </div>
                    <div className="bg-grey-100 dark:bg-white/5 rounded text-sm text-blue-100 dark:text-white mb-3 p-3">
                        <p>
                            Como aplicar um background preto apenas para usuários com modo dark ativo?
                        </p>
                    </div>
                    <div className="bg-grey-100 dark:bg-white/5 rounded text-sm text-blue-100 dark:text-white mb-3 p-3">
                        <p>
                            Como adicionar cores personalizadas ao Tailwind?
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}