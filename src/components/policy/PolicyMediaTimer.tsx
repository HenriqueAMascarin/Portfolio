import CleanHeader from "../others/CleanHeader";
import Footer from "../mainComponent/Footer";
import { HorizontalPadding, MaxWidthCapsule, VerticalPadding } from "../../styles/GlobalStyle";
import { PolicyStyleMediaTimer } from "../../styles/policy/PolicyStyleMediaTimer";
import translateI18n from "../../utils/translateI18n";

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
                                        <h3>{translateI18n("policyMediaTimer.title")}</h3>

                                        <a href="/#projects/MediaTimer">Media Timer</a>
                                    </div>
                                </div>

                                <div className="policyWelcome">
                                    <p>{translateI18n("policyMediaTimer.welcome.title")}</p>

                                    <p>{translateI18n("policyMediaTimer.welcome.subtitle")}</p>
                                </div>

                                <div className="policyData">
                                    <h4>{translateI18n("policyMediaTimer.dataCollected.title")}</h4>

                                    <p>{translateI18n("policyMediaTimer.dataCollected.declaration")}</p>

                                    <p>{translateI18n("policyMediaTimer.dataCollected.permissionsParagraph")} <a href="https://github.com/HenriqueAMascarin/MediaTimer/blob/main/android/app/src/main/AndroidManifest.xml#L2-L7" target="_blank">AndroidManifest.xml</a>.</p>
                                </div>

                                <div className="policyTable">
                                    <div className="policyTableHeader">
                                        <div><p>{translateI18n("policyMediaTimer.permissionsList.permission")}</p></div>

                                        <div><p>{translateI18n("policyMediaTimer.permissionsList.necessary")}</p></div>
                                    </div>

                                    <div className="policyTableBody">
                                        <div>
                                            <div>
                                                <p>android.permission.INTERNET</p>
                                                <p>com.google.android.gms.permission.AD_ID</p>
                                            </div>

                                            <div><p>{translateI18n("policyMediaTimer.permissionsList.reasons.adReason")}</p></div>
                                        </div>

                                        <div>
                                            <div>
                                                <p>android.permission.READ_EXTERNAL_STORAGE</p>
                                                <p>android.permission.WRITE_EXTERNAL_STORAGE</p>
                                                <p>android.permission.READ_MEDIA_AUDIO</p>
                                            </div>

                                            <div><p>{translateI18n("policyMediaTimer.permissionsList.reasons.storageReason")}</p></div>

                                        </div>


                                        <div>
                                            <div><p>android.permission.SYSTEM_ALERT_WINDOW</p></div>

                                            <div><p>{translateI18n("policyMediaTimer.permissionsList.reasons.notificationsReason")}</p></div>
                                        </div>

                                        <div>
                                            <div><p>android.permission.DOWNLOAD_WITHOUT_NOTIFICATION</p></div>

                                            <div><p>{translateI18n("policyMediaTimer.permissionsList.reasons.historyArchiveReason")}</p></div>
                                        </div>

                                        <div>
                                            <div><p>android.permission.MODIFY_AUDIO_SETTINGS</p></div>

                                            <div><p>{translateI18n("policyMediaTimer.permissionsList.reasons.configureAudioReason")}</p></div>
                                        </div>
                                    </div>


                                </div>
                                <p className="policyContact">{translateI18n("policyMediaTimer.permissionsList.contact")} <a href="mailto:henriqueamascarin@gmail.com">henriqueamascarin@gmail.com</a></p>
                            </div>

                            <a href="/" className="goBack">{translateI18n("general.goBack")}</a>
                        </PolicyStyleMediaTimer>
                    </MaxWidthCapsule>
                </HorizontalPadding>
            </VerticalPadding>

            <Footer />

        </>
    )
}