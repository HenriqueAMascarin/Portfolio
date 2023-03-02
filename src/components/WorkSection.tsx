import { HorizontalPadding, VerticalPadding } from "../styles/GlobalStyle"
import { WorkStyle } from "../styles/WorkStyle.style"

export default function ContactSection() {
    return (
        <WorkStyle id="contact">
            <VerticalPadding>
                <HorizontalPadding>
                    <h2>Vamos trabalhar juntos!</h2>

                    <form action="https://formsubmit.co/henriqueamascarin@gmail.com" method="POST" name="contactForm">
                        <input type="text" placeholder="Seu nome" name="name" autoComplete="off" required={true} />
                        <input type="email" placeholder="Seu email" name="email" autoComplete="off" required={true} />
                        <input type="text" placeholder="Assunto" name="subject" autoComplete="off" required={true} />
                        <textarea name="msg" cols={30} rows={10} placeholder="Mensagem" autoComplete="off" required={true}></textarea>

                        <input type="hidden" name="_captcha" value="false"></input>
                        {/* ARRUMAR DEPOIS <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input> */}
                        <button type="submit">Mandar</button>
                    </form>
                </HorizontalPadding>
            </VerticalPadding>
        </WorkStyle>
    )
}