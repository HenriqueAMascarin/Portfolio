import { FooterStyled } from "../../styles/mainStyles/FooterStyled.style";
import { HorizontalPadding, MaxWidthCapsule } from "../../styles/GlobalStyle";

export default function Footer() {
  return (
    <FooterStyled>
      <HorizontalPadding>
        <MaxWidthCapsule>
          <div className="flexFooter">
            <div className="socialLinks">
              <a href="https://www.linkedin.com/in/henriqueamasc/" target="_blank">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>LinkedIn logo</title>
                  <path
                    d="M46.4286 0H3.56027C1.59598 0 0 1.6183 0 3.60491V46.3951C0 48.3817 1.59598 50 3.56027 50H46.4286C48.3929 50 50 48.3817 50 46.3951V3.60491C50 1.6183 48.3929 0 46.4286 0ZM15.1116 42.8571H7.70089V18.9955H15.1228V42.8571H15.1116ZM11.4062 15.7366C9.02902 15.7366 7.10938 13.8058 7.10938 11.4397C7.10938 9.07366 9.02902 7.14286 11.4062 7.14286C13.7723 7.14286 15.7031 9.07366 15.7031 11.4397C15.7031 13.817 13.7835 15.7366 11.4062 15.7366ZM42.8906 42.8571H35.4799V31.25C35.4799 28.4821 35.4241 24.9219 31.6295 24.9219C27.7679 24.9219 27.1763 27.9353 27.1763 31.0491V42.8571H19.7656V18.9955H26.875V22.2545H26.9754C27.9688 20.3795 30.3906 18.404 33.9955 18.404C41.4955 18.404 42.8906 23.3482 42.8906 29.7768V42.8571Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </a>

              <a href="https://github.com/HenriqueAMascarin" target="_blank">
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Github logo</title>
                  <path d="M13.67 32.0861C13.67 32.2509 13.4805 32.3828 13.2415 32.3828C12.9696 32.4075 12.7801 32.2757 12.7801 32.0861C12.7801 31.9213 12.9696 31.7895 13.2085 31.7895C13.4557 31.7648 13.67 31.8966 13.67 32.0861ZM11.1074 31.7153C11.0497 31.8801 11.2145 32.0697 11.4617 32.1191C11.6759 32.2015 11.9231 32.1191 11.9726 31.9543C12.022 31.7895 11.8654 31.6 11.6182 31.5258C11.404 31.4681 11.1651 31.5505 11.1074 31.7153ZM14.7494 31.5753C14.5104 31.6329 14.3456 31.7895 14.3704 31.979C14.3951 32.1438 14.6093 32.2509 14.8565 32.1933C15.0955 32.1356 15.2603 31.979 15.2356 31.8142C15.2108 31.6577 14.9884 31.5505 14.7494 31.5753ZM20.1713 0C8.74252 0 0 8.67661 0 20.1053C0 29.2434 5.75144 37.063 13.9666 39.8152C15.0213 40.0047 15.3921 39.3537 15.3921 38.8181C15.3921 38.3073 15.3674 35.4892 15.3674 33.7588C15.3674 33.7588 9.59947 34.9948 8.38821 31.3033C8.38821 31.3033 7.44886 28.9055 6.09752 28.2875C6.09752 28.2875 4.21058 26.9939 6.22936 27.0186C6.22936 27.0186 8.28109 27.1834 9.40996 29.1445C11.2145 32.3251 14.2385 31.4105 15.4168 30.8666C15.6064 29.5482 16.1419 28.6336 16.7352 28.0898C12.1291 27.5789 7.48182 26.9115 7.48182 18.9847C7.48182 16.7187 8.10805 15.5816 9.42644 14.1314C9.2122 13.5958 8.51181 11.3875 9.64067 8.53653C11.3628 8.00093 15.3262 10.7613 15.3262 10.7613C16.9742 10.2999 18.7458 10.0609 20.5008 10.0609C22.2559 10.0609 24.0275 10.2999 25.6755 10.7613C25.6755 10.7613 29.6389 7.99269 31.361 8.53653C32.4899 11.3958 31.7895 13.5958 31.5753 14.1314C32.8936 15.5899 33.7012 16.727 33.7012 18.9847C33.7012 26.9362 28.8479 27.5707 24.2418 28.0898C24.9998 28.7407 25.6425 29.9767 25.6425 31.9131C25.6425 34.6899 25.6178 38.126 25.6178 38.8016C25.6178 39.3372 25.9969 39.9882 27.0433 39.7987C35.2832 37.063 40.8699 29.2434 40.8699 20.1053C40.8699 8.67661 31.6 0 20.1713 0ZM8.00917 28.4194C7.90205 28.5018 7.92677 28.6913 8.06685 28.8479C8.19869 28.9797 8.38821 29.0374 8.49533 28.9303C8.60245 28.8479 8.57773 28.6583 8.43765 28.5018C8.30581 28.3699 8.11629 28.3123 8.00917 28.4194ZM7.11927 27.752C7.06159 27.8591 7.14398 27.9909 7.30878 28.0733C7.44062 28.1557 7.60542 28.131 7.6631 28.0156C7.72078 27.9085 7.63838 27.7767 7.47358 27.6943C7.30878 27.6448 7.17694 27.6696 7.11927 27.752ZM9.78899 30.6854C9.65715 30.7925 9.70659 31.0397 9.89611 31.1962C10.0856 31.3857 10.3246 31.4105 10.4317 31.2786C10.5388 31.1715 10.4894 30.9243 10.3246 30.7678C10.1433 30.5782 9.89611 30.5535 9.78899 30.6854ZM8.84964 29.4741C8.7178 29.5565 8.7178 29.7707 8.84964 29.9602C8.98148 30.1498 9.20396 30.2322 9.31108 30.1498C9.44291 30.0426 9.44291 29.8284 9.31108 29.6389C9.19572 29.4494 8.98148 29.367 8.84964 29.4741Z" fill="#F2F2F2" />
                </svg>
              </a>
            </div>

            <div className="lineFooter"></div>


            <a href="https://www.linkedin.com/in/henriqueamasc/" target="_blank" className="createBy">
              Feito por Henrique de Albuquerque Mascarin
            </a>

          </div>
        </MaxWidthCapsule>
      </HorizontalPadding>
    </FooterStyled>
  );
}
