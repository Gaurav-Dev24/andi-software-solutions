import React from "react";
import "./Model.css";
import Button from "../Button/Button";

const Model = () => {
  // define objects for inline css
  const spanStyle = {
    whiteSpace: "no-wrap",
  };
  const imgStyle = {
    width: "37px",
    height: "14px",
    paddingRight: "3px",
  };

  return (
    <div className="header-topbar">
      <div className="container">
        <div className="container-left">
          <i className="fa fa-whatsapp"></i>
          <span>+91-7015574125, +91-8810385787</span>
        </div>
        <div className="container-right">
          <div className="container-buttons">
            <Button>Toll Free Panel</Button>
            <Button>Missed Call Panel</Button>
            <Button>SMS Panel</Button>
            <Button>Whatsapp Panel</Button>
            <Button>Payment</Button>
          </div>
          <div className="container-select">
            <div id=":0.targetLanguage">
              <select
                class="goog-te-combo"
                aria-label="Language Translate Widget"
              >
                <option value="">Select Language</option>
                <option value="af">Afrikaans</option>
                <option value="sq">Albanian</option>
                <option value="am">Amharic</option>
                <option value="ar">Arabic</option>
                <option value="hy">Armenian</option>
                <option value="as">Assamese</option>
                <option value="ay">Aymara</option>
                <option value="az">Azerbaijani</option>
                <option value="bm">Bambara</option>
                <option value="eu">Basque</option>
                <option value="be">Belarusian</option>
                <option value="bn">Bengali</option>
                <option value="bho">Bhojpuri</option>
                <option value="bs">Bosnian</option>
                <option value="bg">Bulgarian</option>
                <option value="ca">Catalan</option>
                <option value="ceb">Cebuano</option>
                <option value="ny">Chichewa</option>
                <option value="zh-CN">Chinese (Simplified)</option>
                <option value="zh-TW">Chinese (Traditional)</option>
                <option value="co">Corsican</option>
                <option value="hr">Croatian</option>
                <option value="cs">Czech</option>
                <option value="da">Danish</option>
                <option value="dv">Dhivehi</option>
                <option value="doi">Dogri</option>
                <option value="nl">Dutch</option>
                <option value="eo">Esperanto</option>
                <option value="et">Estonian</option>
                <option value="ee">Ewe</option>
                <option value="tl">Filipino</option>
                <option value="fi">Finnish</option>
                <option value="fr">French</option>
                <option value="fy">Frisian</option>
                <option value="gl">Galician</option>
                <option value="ka">Georgian</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="gn">Guarani</option>
                <option value="gu">Gujarati</option>
                <option value="ht">Haitian Creole</option>
                <option value="ha">Hausa</option>
                <option value="haw">Hawaiian</option>
                <option value="iw">Hebrew</option>
                <option value="hi">Hindi</option>
                <option value="hmn">Hmong</option>
                <option value="hu">Hungarian</option>
                <option value="is">Icelandic</option>
                <option value="ig">Igbo</option>
                <option value="ilo">Ilocano</option>
                <option value="id">Indonesian</option>
                <option value="ga">Irish</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="jw">Javanese</option>
                <option value="kn">Kannada</option>
                <option value="kk">Kazakh</option>
                <option value="km">Khmer</option>
                <option value="rw">Kinyarwanda</option>
                <option value="gom">Konkani</option>
                <option value="ko">Korean</option>
                <option value="kri">Krio</option>
                <option value="ku">Kurdish (Kurmanji)</option>
                <option value="ckb">Kurdish (Sorani)</option>
                <option value="ky">Kyrgyz</option>
                <option value="lo">Lao</option>
                <option value="la">Latin</option>
                <option value="lv">Latvian</option>
                <option value="ln">Lingala</option>
                <option value="lt">Lithuanian</option>
                <option value="lg">Luganda</option>
                <option value="lb">Luxembourgish</option>
                <option value="mk">Macedonian</option>
                <option value="mai">Maithili</option>
                <option value="mg">Malagasy</option>
                <option value="ms">Malay</option>
                <option value="ml">Malayalam</option>
                <option value="mt">Maltese</option>
                <option value="mi">Maori</option>
                <option value="mr">Marathi</option>
                <option value="mni-Mtei">Meiteilon (Manipuri)</option>
                <option value="lus">Mizo</option>
                <option value="mn">Mongolian</option>
                <option value="my">Myanmar (Burmese)</option>
                <option value="ne">Nepali</option>
                <option value="no">Norwegian</option>
                <option value="or">Odia (Oriya)</option>
                <option value="om">Oromo</option>
                <option value="ps">Pashto</option>
                <option value="fa">Persian</option>
                <option value="pl">Polish</option>
                <option value="pt">Portuguese</option>
                <option value="pa">Punjabi</option>
                <option value="qu">Quechua</option>
                <option value="ro">Romanian</option>
                <option value="ru">Russian</option>
                <option value="sm">Samoan</option>
                <option value="sa">Sanskrit</option>
                <option value="gd">Scots Gaelic</option>
                <option value="nso">Sepedi</option>
                <option value="sr">Serbian</option>
                <option value="st">Sesotho</option>
                <option value="sn">Shona</option>
                <option value="sd">Sindhi</option>
                <option value="si">Sinhala</option>
                <option value="sk">Slovak</option>
                <option value="sl">Slovenian</option>
                <option value="so">Somali</option>
                <option value="es">Spanish</option>
                <option value="su">Sundanese</option>
                <option value="sw">Swahili</option>
                <option value="sv">Swedish</option>
                <option value="tg">Tajik</option>
                <option value="ta">Tamil</option>
                <option value="tt">Tatar</option>
                <option value="te">Telugu</option>
                <option value="th">Thai</option>
                <option value="ti">Tigrinya</option>
                <option value="ts">Tsonga</option>
                <option value="tr">Turkish</option>
                <option value="tk">Turkmen</option>
                <option value="ak">Twi</option>
                <option value="uk">Ukrainian</option>
                <option value="ur">Urdu</option>
                <option value="ug">Uyghur</option>
                <option value="uz">Uzbek</option>
                <option value="vi">Vietnamese</option>
                <option value="cy">Welsh</option>
                <option value="xh">Xhosa</option>
                <option value="yi">Yiddish</option>
                <option value="yo">Yoruba</option>
                <option value="zu">Zulu</option>
              </select>
            </div>
            "Powered by"
            <span style={spanStyle}>
              <a
                className="VIpgJd-ZVi9od-l4eHX-hSRGPd"
                href="https://translate.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png"
                  style={imgStyle}
                  alt="Google Translate"
                />
                Translate
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
