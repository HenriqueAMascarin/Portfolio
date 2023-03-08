import reactLogo from '../../assets/images/techIcons/react.svg';
import typeScript from '../../assets/images/techIcons/typescript.svg';
import sass from '../../assets/images/techIcons/sass.svg';
import styledComponents from '../../assets/images/techIcons/styled-components.svg';
import jest from '../../assets/images/techIcons/jest.svg';
import figma from '../../assets/images/techIcons/figma.svg';
import photoshop from '../../assets/images/techIcons/photoshop.svg';

import { TechSection } from '../../styles/mainStyles/TechSection.styles';
import { HorizontalPadding, VerticalPadding } from '../../styles/GlobalStyle';

export default function Tecnologies() {

    const arrayTech = [
        { img: reactLogo, alt: "React logo" },
        { img: typeScript, alt: "TypeScript logo" },
        { img: sass, alt: "Sass logo" },
        { img: styledComponents, alt: "StyledComponents logo" },
        { img: jest, alt: "Jest logo" },
        { img: figma, alt: "Figma logo" },
        { img: photoshop, alt: "Photoshop logo" }
    ]

    return (
        <TechSection id="technologies">
            <VerticalPadding>
                <HorizontalPadding>
                    <h2>Tecnologias</h2>

                    <div className='techIcons'>
                        {arrayTech.map((el, key) => {
                            return (
                                <img src={el.img} alt={el.alt} title={el.alt} key={key} />
                            )
                        })}
                    </div>
                </HorizontalPadding>
            </VerticalPadding>
        </TechSection>

    )
}