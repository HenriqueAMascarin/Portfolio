import CleanHeader from "../others/CleanHeader";
import Footer from "../mainComponent/Footer";
import { HorizontalPadding, MaxWidthCapsule, VerticalPadding } from "../../styles/GlobalStyle";
import { PolicyStyleMediaTimer } from "../../styles/policy/PolicyStyleMediaTimer";

export default function PolicyMediaTimer() {

    return (
        <>

            <CleanHeader />

            <VerticalPadding>
                <HorizontalPadding>
                    <MaxWidthCapsule>
                        <PolicyStyleMediaTimer>
                            <div className="policyCard">
                                <div className="policyTitleDiv">
                                    <img src="/images/mediaTimerIcon.svg" alt="Logo Media Timer" />

                                    <div>
                                        <h3>Política de Privacidade</h3>

                                        <a href="/#projetos/MediaTimer">Media Timer</a>
                                    </div>
                                </div>

                                <div className="policyWelcome">
                                    <p>Bem vindo ao Media Timer, aplicativo para android!</p>

                                    <p>Esse é um aplicativo temporizador desenvolvido por Henrique de Albuquerque Mascarin e visa resolver um problema pessoal.</p>
                                </div>

                                <div className="policyData">
                                    <h4>Dados coletados pelo aplicativo</h4>

                                    <p>Nenhum dado é coletado. Tudo fornecido como dados de arquivos, histórico de áudios e configurações de tema são todos mantidos no aplicativo.</p>

                                    <p>A lista de permissões listadas a baixo são encontradas aqui no <a href="https://github.com/HenriqueAMascarin/MediaTimer/blob/main/android/app/src/main/AndroidManifest.xml#L2-L7" target="_blank">AndroidManifest.xml</a>.</p>
                                </div>

                                <div className="policyTable">
                                    <div className="policyTableHeader">
                                        <div><p>Permissão</p></div>

                                        <div><p>Porque é necessária</p></div>
                                    </div>

                                    <div className="policyTableBody">
                                        <div>
                                            <div>
                                                <p>android.permission.INTERNET</p>
                                                <p>com.google.android.gms.permission.AD_ID</p>
                                            </div>

                                            <div><p>Utilizados para mostrar o anúncio de baixo na tela principal.</p></div>
                                        </div>

                                        <div>
                                            <div>
                                                <p>android.permission.READ_EXTERNAL_STORAGE</p>
                                                <p>android.permission.WRITE_EXTERNAL_STORAGE</p>
                                                <p>android.permission.READ_MEDIA_AUDIO</p>
                                            </div>

                                            <div><p>Utilizados para ler áudios que a pessoa seleciona do seu dispositivo ou que estão salvos no histórico.</p></div>

                                        </div>


                                        <div>
                                            <div><p>android.permission.SYSTEM_ALERT_WINDOW</p></div>

                                            <div><p>Utilizado para mostrar as notificações do aplicativo, quando está executando o temporizador.</p></div>
                                        </div>

                                        <div>
                                            <div><p>android.permission.DOWNLOAD_WITHOUT_NOTIFICATION</p></div>

                                            <div><p>Utilizado para encontrar o local do arquivo selecionado na aba de histórico.</p></div>
                                        </div>

                                        <div>
                                            <div><p>android.permission.MODIFY_AUDIO_SETTINGS</p></div>

                                            <div><p>Utilizado com a tecnologia EXPO AV, para configurar os áudios usados no aplicativo.</p></div>
                                        </div>
                                    </div>


                                </div>
                                <p className="policyContact">Caso tenha visto alguma permissão que não esteja listada aqui ou sobre qualquer dúvida de segurança, se sinta livre em mandar uma mensagem ao e-mail: <a href="mailto:henriqueamascarin@gmail.com">henriqueamascarin@gmail.com</a></p>
                            </div>

                            <a href="/" className="goBack">Voltar</a>
                        </PolicyStyleMediaTimer>
                    </MaxWidthCapsule>
                </HorizontalPadding>
            </VerticalPadding>

            <Footer />

        </>
    )
}