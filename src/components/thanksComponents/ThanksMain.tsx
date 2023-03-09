import { HorizontalPadding, VerticalPadding } from "../../styles/GlobalStyle"
import { MainThanks } from "../../styles/thanksStyles/MainThanks"

export default function ThanksMain(){
    return(
        <MainThanks>
            <section>
                <VerticalPadding>
                    <HorizontalPadding>
                        <div className="contentsMain">
                            <h1>Muito obrigado!</h1>
                            <p>Lhe responderei quanto antes.</p>
                            <a href="/">Voltar</a>
                        </div>
                    </HorizontalPadding>
                </VerticalPadding>
            </section>
        </MainThanks>
    )
}