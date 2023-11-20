import Link from "next/link";
import Title from "../components/Title/Title";
import Image from "next/image";
import "./style.scss";
export default function Contacts() {
  return (
    <section className="contacts container">
      <Title>Контакты</Title>
      <div className="contacts__content">
        <ul>
          <li>
            <Link href="mailto:pavedom@mail.ru">
              {" "}
              <svg
                width="43"
                height="30"
                viewBox="0 0 43 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M42.525 26.25V3.75C42.525 1.675 40.85 0 38.775 0H3.75C1.675 0 0 1.675 0 3.75V26.25C0 28.325 1.675 30 3.75 30H38.775C40.85 30 42.525 28.325 42.525 26.25ZM39.25 3.475C40.075 4.3 39.625 5.15 39.175 5.575L29.025 14.875L38.775 25.025C39.075 25.375 39.275 25.925 38.925 26.3C38.6 26.7 37.85 26.675 37.525 26.425L26.6 17.1L21.25 21.975L15.925 17.1L5 26.425C4.675 26.675 3.925 26.7 3.6 26.3C3.25 25.925 3.45 25.375 3.75 25.025L13.5 14.875L3.35 5.575C2.9 5.15 2.45 4.3 3.275 3.475C4.1 2.65 4.95 3.05 5.65 3.65L21.25 16.25L36.875 3.65C37.575 3.05 38.425 2.65 39.25 3.475V3.475Z" />
              </svg>
              Email
            </Link>
          </li>
          {/* <li>
            <Link href="tel:+79273058778">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.5812 25.378L27.0812 28.878C13.5407 27.1856 11.6 13.542 11.6 13.542L15.1 10.042C15.5685 9.57327 15.8893 8.97757 16.0229 8.32913C16.1562 7.67971 16.0961 7.00589 15.85 6.39065L14.1452 2.12796C13.894 1.50003 13.4601 0.960964 12.8998 0.582057C12.3393 0.203151 11.6782 2.61746e-05 11.0016 2.61746e-05H3.38739C3.14325 -0.000950388 2.90033 0.0254168 2.66302 0.076198C2.43695 0.125026 2.21576 0.197292 2.00335 0.292018C1.56781 0.486354 1.17816 0.770534 0.860286 1.126C0.542415 1.48147 0.303158 1.90042 0.15887 2.35452C0.0143391 2.80862 -0.0322917 3.28909 0.0219075 3.76272C1.14227 13.4532 7.17645 38.7598 37.0546 40.6192C37.2529 40.6299 37.4511 40.6231 37.6472 40.5987C37.9062 40.5674 38.1613 40.5059 38.4074 40.4151C38.8398 40.2559 39.235 40.0098 39.569 39.6934C39.6974 39.5713 39.8156 39.4395 39.9228 39.2998C40.0949 39.0762 40.2387 38.8311 40.3503 38.5703C40.5317 38.1465 40.6244 37.6905 40.6235 37.2295V29.4785C40.6235 28.8018 40.4208 28.1407 40.0414 27.5801C39.662 27.0196 39.1235 26.586 38.4953 26.334L34.2328 24.628C33.6176 24.3819 32.9435 24.3223 32.2946 24.4551C31.6454 24.5889 31.0497 24.9092 30.5812 25.378Z"
                />
              </svg>
              +7(927)305-87-78{" "}
            </Link>
          </li> */}
          <li>
            <Link href="https://tenchat.ru/olga_evdokimova">
              <svg
                width="63"
                height="59"
                viewBox="0 0 63 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5393 2.71498C24.1414 -0.904992 38.4561 -0.904992 52.0582 2.71498C56.6243 3.92988 60.1115 7.66063 61.018 12.2999C62.6241 20.5214 62.6241 28.9774 61.018 37.199C60.1118 41.8382 56.6244 45.569 52.0582 46.7851C51.7133 46.8769 51.3677 46.9665 51.0216 47.0537C50.3369 47.2258 49.8533 47.8468 49.8533 48.5539V58.3815C49.8533 58.6219 49.7132 58.8411 49.4953 58.9424C49.2774 59.0437 49.0194 59.0095 48.8359 58.8541L38.8185 50.3909C37.9742 49.678 36.8881 49.3139 35.7849 49.3752C27.2858 49.8489 18.7654 48.9745 10.5393 46.7851C5.97306 45.569 2.48571 41.8382 1.57948 37.199C-0.0264947 28.9774 -0.0264947 20.5214 1.57948 12.2999C2.48595 7.66063 5.97329 3.92988 10.5393 2.71498ZM36.8653 37.1247C37.2046 37.1247 37.4838 36.8455 37.4838 36.5061V24.7494H49.2348C49.5741 24.7494 49.8533 24.4702 49.8533 24.1308V12.9928C49.8533 12.6535 49.5741 12.3741 49.2348 12.3741H13.3633C13.024 12.3741 12.7448 12.6535 12.7448 12.9928V24.1308C12.7448 24.4702 13.024 24.7494 13.3633 24.7494H25.1144V36.5061C25.1144 36.8455 25.3935 37.1247 25.7327 37.1247H36.8653Z"
                  fill="#FC3234"
                />
                <path
                  d="M50.6205 5.63867H12.1016V44.0471H50.6205V5.63867Z"
                  fill="#FC3234"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M45.5916 12.3222C45.5916 11.4 44.8418 10.6523 43.9168 10.6523H18.7958C17.8709 10.6523 17.1211 11.4 17.1211 12.3222V18.1671C17.1211 19.0893 17.8709 19.837 18.7958 19.837H24.6621C25.587 19.837 26.3369 20.5846 26.3369 21.5069V37.363C26.3369 38.2853 27.0866 39.033 28.0115 39.033H34.7105C35.6354 39.033 36.3852 38.2853 36.3852 37.363V21.5069C36.3852 20.5846 37.135 19.837 38.06 19.837H43.9168C44.8418 19.837 45.5916 19.0893 45.5916 18.1671V12.3222Z"
                  fill="white"
                />
                <path
                  d="M10.3634 2.66798C23.7299 -0.889327 37.7969 -0.889327 51.1635 2.66798C55.6506 3.86186 59.0776 7.52803 59.9683 12.0871C61.5466 20.1662 61.5466 28.4759 59.9683 36.5551C59.0777 41.1141 55.6507 44.7802 51.1635 45.9752C50.8246 46.0655 50.485 46.1535 50.1449 46.2393C49.4721 46.4083 48.9969 47.0185 48.9969 47.7134V57.3709C48.9969 57.6071 48.8591 57.8225 48.645 57.9221C48.4309 58.0217 48.1773 57.9881 47.9971 57.8353L38.153 49.5187C37.3234 48.818 36.2561 48.4603 35.1719 48.5205C26.8201 48.986 18.447 48.1268 10.3634 45.9752C5.87615 44.7802 2.44918 41.1141 1.55864 36.5551C-0.0195467 28.4759 -0.0195467 20.1662 1.55864 12.0871C2.44941 7.52803 5.87639 3.86186 10.3634 2.66798ZM36.2336 36.4821C36.5671 36.4821 36.8415 36.2077 36.8415 35.8742V24.321H48.3891C48.7224 24.321 48.9969 24.0466 48.9969 23.7131V12.7678C48.9969 12.4344 48.7224 12.1599 48.3891 12.1599H13.1384C12.805 12.1599 12.5307 12.4344 12.5307 12.7678V23.7131C12.5307 24.0466 12.805 24.321 13.1384 24.321H24.6861V35.8742C24.6861 36.2077 24.9604 36.4821 25.2938 36.4821H36.2336Z"
                  fill="#FC3234"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M45.5916 12.3183C45.5916 11.3961 44.8418 10.6484 43.9168 10.6484H18.7958C17.8709 10.6484 17.1211 11.3961 17.1211 12.3183V18.1632C17.1211 19.0854 17.8709 19.8331 18.7958 19.8331H43.9168C44.8418 19.8331 45.5916 19.0854 45.5916 18.1632V12.3183ZM34.7105 39.0385C35.6354 39.0385 36.3852 38.2908 36.3852 37.3685V21.5041C36.3852 20.5819 35.6354 19.8343 34.7105 19.8343H28.0115C27.0866 19.8343 26.3369 20.5819 26.3369 21.5041V37.3685C26.3369 38.2908 27.0866 39.0385 28.0115 39.0385H34.7105Z"
                  fill="white"
                />
              </svg>
              Tenchat
            </Link>
          </li>
          <li>
            <Link href="https://github.com/olga-evdokimova">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 0C8.95 0 0 9.17638 0 20.5059C0 29.5797 5.725 37.2438 13.675 39.9608C14.675 40.1403 15.05 39.5251 15.05 38.9868C15.05 38.4998 15.025 36.8849 15.025 35.1676C10 36.116 8.7 33.9116 8.3 32.7581C8.075 32.1686 7.1 30.3487 6.25 29.8617C5.55 29.4772 4.55 28.5288 6.225 28.5032C7.8 28.4775 8.925 29.9898 9.3 30.605C11.1 33.7065 13.975 32.835 15.125 32.2968C15.3 30.9639 15.825 30.0667 16.4 29.5541C11.95 29.0414 7.3 27.2728 7.3 19.4293C7.3 17.1993 8.075 15.3538 9.35 13.9184C9.15 13.4057 8.45 11.3039 9.55 8.48431C9.55 8.48431 11.225 7.94603 15.05 10.5862C16.65 10.1248 18.35 9.89408 20.05 9.89408C21.75 9.89408 23.45 10.1248 25.05 10.5862C28.875 7.92039 30.55 8.48431 30.55 8.48431C31.65 11.3039 30.95 13.4057 30.75 13.9184C32.025 15.3538 32.8 17.1737 32.8 19.4293C32.8 27.2984 28.125 29.0414 23.675 29.5541C24.4 30.1949 25.025 31.4253 25.025 33.3477C25.025 36.0903 25 38.2947 25 38.9868C25 39.5251 25.375 40.1659 26.375 39.9608C30.3453 38.5865 33.7953 35.9702 36.2394 32.4802C38.6836 28.9903 39.9988 24.8023 40 20.5059C40 9.17638 31.05 0 20 0Z"
                />
              </svg>
              Github
            </Link>
          </li>
          <li>
            <Link href="https://t.me/olga_evdokimova13">
              <svg
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.375 0C18.7461 0 12.3828 2.63555 7.69922 7.32227C3.01079 12.0108 0.376299 18.3695 0.375 25C0.375 31.6277 3.01172 37.991 7.69922 42.6777C12.3828 47.3645 18.7461 50 25.375 50C32.0039 50 38.3672 47.3645 43.0508 42.6777C47.7383 37.991 50.375 31.6277 50.375 25C50.375 18.3723 47.7383 12.009 43.0508 7.32227C38.3672 2.63555 32.0039 0 25.375 0Z"
                  fill="url(#paint0_linear_2903_21917)"
                />
                <path
                  d="M11.6903 24.7351C18.9793 21.5601 23.8387 19.4668 26.2684 18.4554C33.2137 15.5675 34.6551 15.066 35.5965 15.049C35.8036 15.0457 36.2645 15.0968 36.5653 15.34C36.8153 15.5451 36.8856 15.8224 36.9207 16.0171C36.952 16.2117 36.995 16.655 36.9598 17.0011C36.5848 20.9543 34.9559 30.5472 34.1278 34.975C33.7801 36.8484 33.0887 37.4765 32.4208 37.5378C30.9676 37.6714 29.8661 36.5785 28.4598 35.657C26.2606 34.2144 25.0184 33.3168 22.8817 31.9093C20.4129 30.2828 22.0145 29.3886 23.4208 27.9277C23.7879 27.5453 30.1864 21.7269 30.3075 21.1992C30.3231 21.1332 30.3387 20.8871 30.1903 20.7574C30.0458 20.6273 29.8309 20.6718 29.6747 20.707C29.452 20.757 25.9403 23.0804 19.1278 27.6769C18.1317 28.3621 17.2293 28.696 16.4168 28.6785C15.5262 28.6593 13.8075 28.1738 12.5301 27.7589C10.9676 27.25 9.72153 26.9808 9.83091 26.1164C9.8856 25.6664 10.5067 25.2058 11.6903 24.7351Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2903_21917"
                    x1="2500.38"
                    y1="0"
                    x2="2500.38"
                    y2="5000"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2AABEE" />
                    <stop offset="1" stop-color="#229ED9" />
                  </linearGradient>
                </defs>
              </svg>
              Telegram
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
