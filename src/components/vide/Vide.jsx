 
import styles from "./Vide.module.css";
import { useRef, useState } from "react";
import nka from "../../components/vide/bmw.jpg"
import das from "../../components/vide/bmw888.png"
import { BsPerson } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import nkat from "../../components/vide/bmw999.webp"
import nkal from "../../components/vide/bmwkarmir.webp"
import nkal1 from "../../components/vide/bmwtetev.webp"
import nkal2 from "../../components/vide/bmwspitak.webp"
import nkal3 from "../../components/vide/bmw5.webp"
import nkal6 from "../../components/vide/bmw6.webp"
import { GoArrowUpRight } from "react-icons/go";
import pot from "../../components/vide/bmwener.webp"

const Vide = () => {
const [grel, setGrel] = useState(false)
const [grec, setGrec] = useState(false);
const [grek, setGrek] = useState(false);
const [grex, setGrex] = useState(0);

  return (
    <div>
      <div className={styles.glxavor}>
        <div className={styles.bmw1}>
          <div className={styles.bmw2}>
            <img className={styles.nkarbmw} src={das} alt="" />
            <a
              href="https://www.bmw.ru/ru/all-models.html"
              className={styles.butik11}
            >
              Aвтомобили
              <div className={styles.hoverdiv}></div>
            </a>
            <button
              onClick={() => {
                setGrel(!grel);
              }}
              className={styles.butik}
            >
              Электромобили
              <div className={styles.hoverdiv}></div>
            </button>
            <button
              onClick={() => {
                setGrec(!grec);
              }}
              className={styles.butik}
            >
              Владельцам
              <div className={styles.hoverdiv}></div>
            </button>
            <button
              onClick={() => {
                setGrek(!grek);
              }}
              className={styles.butik}
            >
              Покупка онлайн
              <div className={styles.hoverdiv}></div>
            </button>

            <button className={styles.butik}>
              Больше о BMW
              <div className={styles.hoverdiv}></div>
            </button>
          </div>
          <div className={styles.bmw3}>
            <div className={styles.brto}>
              <div>
                <button className={styles.bet}>
                  <BsPerson />
                </button>
              </div>
              <div>
                <a
                  className={styles.hrefeik}
                  href="https://www.bmw.ru/ru/fastlane/dealer-locator.html"
                >
                  <BsGeoAlt />
                </a>
              </div>
              <div>
                <a
                  className={styles.hrefeik}
                  href="https://www.bmw.ru/ru/publicPools/search-results/search-results.html"
                >
                  <IoSearchOutline />
                </a>
              </div>
            </div>
          </div>
        </div>

        <img className={styles.nkar11} src={nka} alt="" />
        <div className={styles.takigic}></div>
        <div className={styles.takigic22}>
          <div className={styles.meji1}>
            <div className={styles.ruyl}>С удовольствием за рулем</div>
            <div className={styles.ruyl2}>
              <h1 className={styles.hash1}>Всегда в своей стихии</h1>
            </div>
          </div>
          <div className={styles.meji2}>
            Коллекция оригинальных зимних колёс BMW
          </div>
          <div className={styles.meji3}>
            <a
              className={styles.bmwhref}
              href="https://www.bmw.ru/ru/topics/offers-and-services/original-bmw-accessories/wheels_winter.html"
            >
              Узнать больше
            </a>
          </div>
        </div>
        {grel ? (
          <div className={styles.mobile}>
            <div>
              <div className={styles.bmw22}>
                <div className={styles.bmw222}>
                  <img className={styles.nkarbmw} src={das} alt="" />
                  <a
                    href="https://www.bmw.ru/ru/all-models.html"
                    className={styles.butik1111}
                  >
                    Aвтомобили
                    <div className={styles.hoverdiv}></div>
                  </a>
                  <button
                    onClick={() => {
                      setGrel(!grel);
                    }}
                    className={styles.butik111}
                  >
                    Электромобили
                    <div className={styles.hoverdiv}></div>
                  </button>
                  <button className={styles.butik111}>
                    Владельцам
                    <div className={styles.hoverdiv}></div>
                  </button>
                  <button className={styles.butik111}>
                    Покупка онлайн
                    <div className={styles.hoverdiv}></div>
                  </button>
                  <button className={styles.butik111}>
                    Больше о BMW
                    <div className={styles.hoverdiv}></div>
                  </button>
                </div>
                <div className={styles.bmw333}>
                  <div className={styles.brto111}>
                    <div>
                      <button className={styles.bet111}>
                        <BsPerson />
                      </button>
                    </div>
                    <div>
                      <a
                        className={styles.hrefeik111}
                        href="https://www.bmw.ru/ru/fastlane/dealer-locator.html"
                      >
                        <BsGeoAlt />
                      </a>
                    </div>
                    <div>
                      <a
                        className={styles.hrefeik111}
                        href="https://www.bmw.ru/ru/publicPools/search-results/search-results.html"
                      >
                        <IoSearchOutline />
                      </a>
                    </div>
                  </div>
                  <div className={styles.takigic2222}></div>
                </div>
                <div className={styles.takimej}>
                  <div className={styles.takimej22}>
                    <div className={styles.avtoner}>
                      <div className={styles.vernagir}>
                        <span>Полностью электрический</span>
                      </div>
                      <div className={styles.elektroavto}>
                        <a
                          href="https://www.bmw.ru/ru/all-models/m-series/bmw-ix-m60/2021/bmw-ix-m60-highlights.html"
                          className={styles.avto01}
                        >
                          <div className={styles.elektrik1}>
                            <p>S U V</p>
                            <div className={styles.ixo}>
                              <p className={styles.ixmec}>iX</p>
                              <p className={styles.paragraf}>Новинка</p>
                            </div>
                            <p>M 60</p>
                          </div>
                          <div className={styles.elektrik2}>
                            <img
                              className={styles.nkarbmw1}
                              src={nkat}
                              alt=""
                            />
                            <div className={styles.padrobni}>
                              <p className={styles.cena}>
                                Цена от 12 930 000 ₽
                              </p>
                              <a
                                className={styles.hrefpadrobni}
                                href="https://www.bmw.ru/ru/all-models/m-series/bmw-ix-m60/2021/bmw-ix-m60-highlights.html"
                              >
                                Подробнее
                              </a>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.bmw.ru/ru/all-models/bmw-i/bmw-ix-new/2021/bmw-ix.html"
                          className={styles.avto01}
                        >
                          <div className={styles.elektrik1}>
                            <p>S U V</p>
                            <div className={styles.ixo}>
                              <p className={styles.ixmec}>iX</p>
                              <p className={styles.paragraf}>Новинка</p>
                            </div>
                          </div>
                          <div className={styles.elektrik2}>
                            <img
                              className={styles.nkarbmw1}
                              src={nkal}
                              alt=""
                            />
                            <div className={styles.padrobni}>
                              <p className={styles.cena2}>
                                Цена от 12 930 000 ₽
                              </p>
                              <a
                                className={styles.hrefpadrobni}
                                href=""
                              >
                                Подробнее
                              </a>
                            </div>
                          </div>
                        </a>
                        <a
                          href=""
                          className={styles.avto01}
                        >
                          <div className={styles.elektrik1}>
                            <p>SEDAN</p>
                            <div className={styles.ixo}>
                              <p className={styles.ixmec}>i7</p>
                              <p className={styles.paragraf}>Новинка</p>
                            </div>
                          </div>
                          <div className={styles.elektrik2}>
                            <img
                              className={styles.nkarbmw1}
                              src={nkal1}
                              alt=""
                            />
                            <div className={styles.padrobni}>
                              <p className={styles.cena2}>
                                Цена от 12 930 000 ₽
                              </p>
                              <a
                                className={styles.hrefpadrobni}
                                href=""
                              >
                                Подробнее
                              </a>
                            </div>
                          </div>
                        </a>
                        <a
                          href=""
                          className={styles.avto01}
                        >
                          <div className={styles.elektrik1}>
                            <p>SEDAN</p>
                            <div className={styles.ixo}>
                              <p className={styles.ixmec}>i5</p>
                              <p className={styles.paragraf}>Новинка</p>
                            </div>
                          </div>
                          <div className={styles.elektrik2}>
                            <img
                              className={styles.nkarbmw1}
                              src={nkal2}
                              alt=""
                            />
                            <div className={styles.padrobni}>
                              <p className={styles.cena2}>
                                Цена от 12 930 000 ₽
                              </p>
                              <a
                                className={styles.hrefpadrobni}
                                href=""
                              >
                                Подробнее
                              </a>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={styles.elektroavto2}>
                        <a
                          href=""
                          className={styles.avto01}
                        >
                          <div className={styles.elektrik1}>
                            <p>SAC</p>
                            <div className={styles.ixo}>
                              <p className={styles.ixmec}>iX2</p>
                              <p className={styles.paragraf}>Новинка</p>
                            </div>
                          </div>
                          <div className={styles.elektrik2}>
                            <img
                              className={styles.nkarbmw1}
                              src={nkal3}
                              alt=""
                            />
                            <div className={styles.padrobni}>
                              <p className={styles.cena2}>
                                Цена от 12 930 000 ₽
                              </p>
                              <a
                                className={styles.hrefpadrobni}
                                href="https://www.bmw.ru/ru/all-models/m-series/bmw-ix-m60/2021/bmw-ix-m60-highlights.html"
                              >
                                Подробнее
                              </a>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.bmw.ru/ru/all-models/m-series/i4-m50/2021/bmw-i4-m50-highlights.html"
                          className={styles.avto01}
                        >
                          <div className={styles.elektrik1}>
                            <p>GRAN COUPE</p>
                            <div className={styles.ixo}>
                              <p className={styles.ixmec}>iX</p>
                              <p className={styles.paragraf}>Новинка</p>
                            </div>
                            <p>M 60</p>
                          </div>
                          <div className={styles.elektrik2}>
                            <img
                              className={styles.nkarbmw1}
                              src={nkal6}
                              alt=""
                            />
                            <div className={styles.padrobni}>
                              <p className={styles.cena2}>
                                Цена от 12 930 000 ₽
                              </p>
                              <a
                                className={styles.hrefpadrobni}
                                href="https://www.bmw.ru/ru/all-models/m-series/bmw-ix-m60/2021/bmw-ix-m60-highlights.html"
                              >
                                Подробнее
                              </a>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={styles.mejtexipahox}></div>
                      <div className={styles.elektroavtogic}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {grec ? (
          <div className={styles.mobile1}>
            <div className={styles.bmw221}>
              <div className={styles.bmw2221}>
                <img className={styles.nkarbmw} src={das} alt="" />
                <a
                  href="https://www.bmw.ru/ru/all-models.html"
                  className={styles.butik1111}
                >
                  Aвтомобили
                  <div className={styles.hoverdiv}></div>
                </a>
                <button
                  onClick={() => {
                    setGrel(grel);
                  }}
                  className={styles.butik111}
                >
                  Электромобили
                  <div className={styles.hoverdiv}></div>
                </button>
                <button
                  onClick={() => {
                    setGrec(!grec);
                  }}
                  className={styles.butik111}
                >
                  Владельцам
                  <div className={styles.hoverdiv}></div>
                </button>
                <button className={styles.butik111}>
                  Покупка онлайн
                  <div className={styles.hoverdiv}></div>
                </button>
                <button className={styles.butik111}>
                  Больше о BMW
                  <div className={styles.hoverdiv}></div>
                </button>
              </div>
              <div className={styles.bmw333}>
                <div className={styles.brto111}>
                  <div>
                    <button className={styles.bet111}>
                      <BsPerson />
                    </button>
                  </div>
                  <div>
                    <a
                      className={styles.hrefeik111}
                      href="https://www.bmw.ru/ru/fastlane/dealer-locator.html"
                    >
                      <BsGeoAlt />
                    </a>
                  </div>
                  <div>
                    <a
                      className={styles.hrefeik111}
                      href="https://www.bmw.ru/ru/publicPools/search-results/search-results.html"
                    >
                      <IoSearchOutline />
                    </a>
                  </div>
                </div>
                <div className={styles.takigic2222}></div>
              </div>
              <div className={styles.takimej11}>
                <div className={styles.takimej2211}>
                  <div className={styles.avtoner11}>
                    <div className={styles.ahrefner}>
                      <div className={styles.arajin1}>
                        <span className={styles.servispan}>
                          СЕРВИС И ЗАПАСНЫЕ ЧАСТИ
                        </span>
                        <a
                          className={styles.hrefhover}
                          href="https://www.bmw.ru/ru/ssl/forms/service_sign.html"
                        >
                          Запись на сервис
                        </a>
                        <a
                          className={styles.hrefhover}
                          href="https://www.bmw.ru/ru/topics/offers-and-services/vehicle-service-parts/original-bmw-parts.html"
                        >
                          Оригинальные запасные части
                        </a>
                        <a
                          className={styles.hrefhover}
                          href="https://www.bmw.ru/ru/topics/offers-and-services/vehicle-service-parts/original-bmw-oil.html"
                        >
                          Оригинальные моторные масла
                        </a>
                      </div>
                      <div className={styles.arajin}>
                        <a
                          className={styles.hrefhover}
                          href="https://shop.bmw.ru/"
                        >
                          Магазин аксессуаров BMW
                          <GoArrowUpRight />
                        </a>
                      </div>
                    </div>
                    <div className={styles.ahrefner22}>
                      <div className={styles.pahox}></div>
                      <span className={styles.servispan}>
                        КОЛЕСА И АКСЕССУАРЫ
                      </span>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/original-bmw-accessories/bmw-accessories-configurator.html"
                      >
                        Аксессуарный конфигуратор
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/original-bmw-accessories/original-summer-wheels.html"
                      >
                        Оригинальные летние колеса
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/original-bmw-accessories/wheels_winter.html"
                      >
                        Оригинальные зимние колеса
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/original-bmw-accessories/bmw-lifestyle.html"
                      >
                        BMW Lifestyle
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://shop.bmw.ru/"
                      >
                        Магазин аксессуаров BMW
                        <GoArrowUpRight />
                      </a>
                    </div>
                    <div className={styles.ahrefner22}>
                      <div className={styles.pahox}></div>
                      <span className={styles.servispan}>
                        ЦИФРОВЫЕ СЕРВИСЫ И ПРИЛОЖЕНИЯ
                      </span>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/bmw-digital-services-and-connectivity/connected-drive-overview.html"
                      >
                        Обзор
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/bmw-digital-services-and-connectivity/connected-drive-overview.html"
                      >
                        Приложение My BMW
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/fascination-bmw/bmw-digital-key-iphone-as-secure-bmw-car-key.html"
                      >
                        BMW Digital Key
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/bmw-digital-services-and-connectivity/connected-drive-overview.html#before-journey"
                      >
                        BMW iDrive
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/bmw-digital-services-and-connectivity/bmw-maps.html"
                      >
                        BMW Maps
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/bmw-digital-services-and-connectivity/intelligent-personal-assistant.html"
                      >
                        BMW Intelligent Personal Assistant
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/bmw-digital-services-and-connectivity/apple-car-play.html"
                      >
                        Apple CarPlay
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/bmw-digital-services-and-connectivity/android-auto.html"
                      >
                        Android Auto
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://faq.bmw.ru/s/?language=ru"
                      >
                        Часто задаваемые вопросы
                        <GoArrowUpRight />
                      </a>
                    </div>
                    <div className={styles.ahrefner22}>
                      <div className={styles.pahox}></div>
                      <span className={styles.servispan}>
                        ГАРАНТИЯ И ПРОГРАММЫ BMW
                      </span>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/personal-services/warranties.html"
                      >
                        Условия гарантии
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/current_offers/service-inclusive.html"
                      >
                        Программа BMW Service Inclusive
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/current_offers/service-inclusive/bmw-service-inclusive-plus.html"
                      >
                        Программа BMW Service Inclusive Plus
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/personal-services/bmw-rsa.html"
                      >
                        Программа помощи на дорогах
                      </a>
                      <a
                        className={styles.hrefhover}
                        href="https://www.bmw.ru/ru/topics/offers-and-services/personal-services/3rd_year_plus.html"
                      >
                        Программа "Третий год плюс"
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {grek ? (
          <div className={styles.mobile1989}>
            <div className={styles.bmw221}>
              <div className={styles.bmw2221}>
                <img className={styles.nkarbmw} src={das} alt="" />
                <a
                  href="https://www.bmw.ru/ru/all-models.html"
                  className={styles.butik1111}
                >
                  Aвтомобили
                  <div className={styles.hoverdiv}></div>
                </a>
                <button
                  onClick={() => {
                    setGrel(grel);
                  }}
                  className={styles.butik111}
                >
                  Электромобили
                  <div className={styles.hoverdiv}></div>
                </button>
                <button
                  onClick={() => {
                    setGrec(grec);
                  }}
                  className={styles.butik111}
                >
                  Владельцам
                  <div className={styles.hoverdiv}></div>
                </button>
                <button
                  onClick={() => {
                    setGrek(!grek);
                  }}
                  className={styles.butik111}
                >
                  Покупка онлайн
                  <div className={styles.hoverdiv}></div>
                </button>
                <button className={styles.butik111}>
                  Больше о BMW
                  <div className={styles.hoverdiv}></div>
                </button>
              </div>
              <div className={styles.bmw333}>
                <div className={styles.brto111}>
                  <div>
                    <button className={styles.bet111}>
                      <BsPerson />
                    </button>
                  </div>
                  <div>
                    <a
                      className={styles.hrefeik111}
                      href="https://www.bmw.ru/ru/fastlane/dealer-locator.html"
                    >
                      <BsGeoAlt />
                    </a>
                  </div>
                  <div>
                    <a
                      className={styles.hrefeik111}
                      href="https://www.bmw.ru/ru/publicPools/search-results/search-results.html"
                    >
                      <IoSearchOutline />
                    </a>
                  </div>
                </div>
                <div className={styles.takigic2222}></div>
              </div>
              <div className={styles.naxaverj}>
                <div className={styles.pakonline1}>
                  <span className={styles.valo}>ПОКУПКА ОНЛАЙН</span>
                  <a className={styles.mejtexhref} href="">
                    Автомобили с пробегом <GoArrowUpRight />
                  </a>
                  <a className={styles.mejtexhref} href="">
                    Магазин аксессуаров BMW <GoArrowUpRight />
                  </a>
                </div>
                <div className={styles.pakonline}>
                  <img className={styles.pot} src={pot} alt="" />
                  <span className={styles.spanwid}>
                    Cведения, представленные на сайте, носят информационный
                    характер и не являются публичной офертой
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Vide;
