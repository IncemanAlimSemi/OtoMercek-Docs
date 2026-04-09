"use strict";

(function initPrivacyPage(window, document) {
  const resources = {
    tr: {
      lang: "tr",
      pageTitle: "OtoMercek Gizlilik Politikası",
      eyebrow: "Privacy Policy",
      title: "OtoMercek Gizlilik Politikası",
      intro: "Bu politika, OtoMercek Chrome eklentisinin hangi verileri işlediğini, bu verileri hangi amaçlarla kullandığını, hangi durumlarda üçüncü taraf hizmetlerle etkileşime geçtiğini ve kullanıcı kontrolünü açıklar.",
      metaVersion: "Sürüm: 2026-04-10",
      metaProduct: "Ürün: OtoMercek",
      metaScope: "Kapsam: Chrome Extension",
      navTitle: "İçindekiler",
      sections: [
        {
          id: "scope",
          title: "1. Kapsam",
          paragraphs: [
            "OtoMercek, başlıca sahibinden.com üzerindeki araç ilanlarını analiz etmek, filtrelemek, seçmek, karşılaştırmak ve raporlamak için çalışır.",
            "Eklenti ayrıca kullanıcı isterse karşılaştırma metnini chatgpt.com üzerindeki mesaj alanına taşımaya yardımcı olur.",
          ],
          callout: "OtoMercek, kullanıcı hesabı oluşturmaz, kendi sunucusuna giriş istemez ve kullanıcı adına arka planda otomatik sohbet gönderimi yapmaz.",
        },
        {
          id: "collected",
          title: "2. İşlenen Veriler",
          paragraphs: [
            "Eklenti, işlevlerini yerine getirmek için araç ilan sayfalarında görünen kaporta, açıklama, araç özeti, fiyat, iletişim ve görsel bilgilerini işleyebilir.",
            "Ayrıca kullanıcının seçtiği filtre tercihleri, arayüz ayarları, seçili ilanlar, karşılaştırma akışı için hazırlanan metin içeriği ve reklam yapılandırmasına ait slot, görsel ve hedef URL verileri işlenebilir.",
            "Bu veriler sayfa içeriğinden okunur veya kullanıcının eklenti içindeki tercihleriyle oluşur. OtoMercek, kullanıcıdan isim, telefon, e-posta veya şifre girişi istemez.",
          ],
        },
        {
          id: "purposes",
          title: "3. Kullanım Amaçları",
          list: [
            "İlanları kaporta ve özet verilerine göre analiz etmek",
            "Filtreleri uygulamak ve arayüz işaretlemelerini göstermek",
            "Seçili ilanları Excel çıktısına dönüştürmek",
            "Seçili ilanlar için karşılaştırma prompt'u hazırlamak",
            "Reklam alanlarında uygun banner veya iletişim kartını göstermek",
            "Kullanıcı deneyimini hızlandırmak için önbellek ve tercihleri yerel olarak saklamak",
          ],
        },
        {
          id: "storage",
          title: "4. Yerel Saklama",
          paragraphs: [
            "OtoMercek, bazı verileri chrome.storage.local içinde saklar. Bunlara örnek olarak filtreler, seçili ilanlar, dil tercihi, liste modu, panel durumu, önbelleğe alınmış ilan verileri ve geçici compare prompt'u verilebilir.",
            "Bu veriler esas olarak kullanıcının kendi tarayıcısında tutulur ve eklentinin ayarlarını, performansını ve akış sürekliliğini sağlar.",
          ],
        },
        {
          id: "third-parties",
          title: "5. Üçüncü Taraflar ve Ağ İstekleri",
          paragraphs: [
            "OtoMercek aşağıdaki dış hizmetlerle sınırlı şekilde etkileşime geçebilir:",
          ],
          list: [
            "sahibinden.com: ilan içeriğinin okunması ve analiz edilmesi",
            "chatgpt.com: yalnız kullanıcı compare akışını başlattığında hazırlanan metnin mesaj alanına taşınması",
            "raw.githubusercontent.com: reklam config ve banner görsellerinin yüklenmesi",
          ],
          extraParagraphs: [
            "Compare akışında oluşturulan metin, kullanıcı tarafından tetiklenen işlem sonucunda ChatGPT penceresine taşınır. Bu akış, kullanıcı seçimleri olmadan kendiliğinden başlamaz.",
          ],
        },
        {
          id: "ads",
          title: "6. Reklam Sistemi",
          paragraphs: [
            "OtoMercek, sabit reklam alanları için uzaktan yapılandırılan bir banner sistemi kullanır. Reklam config'i sabit bir JSON kaynağından çekilir.",
          ],
          list: [
            "Desteklenen reklam alanları sabittir ve uygulama içinde tanımlıdır",
            "Reklam görselleri yalnız belirli GitHub banners/ dizininden kabul edilir",
            "Reklam hedef bağlantıları yalnız geçerli https URL ise kullanılır",
            "Uzaktan JavaScript veya yürütülebilir kod çalıştırılmaz",
          ],
        },
        {
          id: "choices",
          title: "7. Kullanıcı Kontrolü",
          list: [
            "Kullanıcı filtrelerini, seçili ilanları ve bazı tercihlerini temizleyebilir veya değiştirebilir",
            "Kullanıcı eklentiyi devre dışı bırakabilir veya kaldırabilir",
            "ChatGPT compare akışı kullanıcı tarafından başlatılır; otomatik gönderim yapılmaz",
          ],
        },
        {
          id: "retention",
          title: "8. Saklama Süresi",
          paragraphs: [
            "Yerel olarak saklanan veriler, kullanıcı temizleyene, eklentiyi kaldırana veya ilgili önbellek ve ayar akışları tarafından güncellenene kadar tutulabilir.",
            "Geçici compare prompt verisi, ChatGPT köprüsü tarafından kullanıldıktan sonra temizlenmek üzere tasarlanmıştır.",
          ],
        },
        {
          id: "security",
          title: "9. Güvenlik",
          paragraphs: [
            "OtoMercek, veri işleme kapsamını işleve uygun sınırda tutmayı hedefler. Reklam config'i ve görselleri için format ve kaynak kontrolleri uygulanır.",
            "Bununla birlikte hiçbir tarayıcı eklentisi mutlak güvenlik garantisi vermez; kullanıcılar tarayıcı ve cihaz güvenliğini de korumalıdır.",
          ],
        },
        {
          id: "changes",
          title: "10. Değişiklikler",
          paragraphs: [
            "Bu politika zaman zaman güncellenebilir. Güncel sürüm bilgisi bu sayfada yayınlanır.",
            "Politika üzerinde önemli değişiklikler yapılması halinde Chrome Web Store kaydı, ürün dokümantasyonu veya ilgili sayfalar güncellenebilir.",
          ],
        },
      ],
    },
    en: {
      lang: "en",
      pageTitle: "OtoMercek Privacy Policy",
      eyebrow: "Privacy Policy",
      title: "OtoMercek Privacy Policy",
      intro: "This policy explains what data the OtoMercek Chrome extension processes, how that data is used, when third-party services may be involved, and what control the user has.",
      metaVersion: "Version: 2026-04-10",
      metaProduct: "Product: OtoMercek",
      metaScope: "Scope: Chrome Extension",
      navTitle: "Contents",
      sections: [
        {
          id: "scope",
          title: "1. Scope",
          paragraphs: [
            "OtoMercek primarily operates to analyze, filter, select, compare, and report vehicle listings on sahibinden.com.",
            "If the user chooses, the extension can also help move the prepared comparison text into the message composer on chatgpt.com.",
          ],
          callout: "OtoMercek does not create user accounts, does not ask for sign-in to its own servers, and does not send background chat messages on behalf of the user.",
        },
        {
          id: "collected",
          title: "2. Data Processed",
          paragraphs: [
            "To provide its features, the extension may process body-condition, description, vehicle summary, price, contact, and image information visible on listing pages.",
            "It may also process the user's selected filters, interface preferences, selected listings, text prepared for the comparison flow, and ad configuration data such as slot, image, and target URLs.",
            "This data is read from page content or generated from the user's preferences inside the extension. OtoMercek does not ask the user to enter name, phone number, email address, or password.",
          ],
        },
        {
          id: "purposes",
          title: "3. Purposes of Use",
          list: [
            "Analyze listings based on body-condition and summary data",
            "Apply filters and display interface markings",
            "Convert selected listings into Excel output",
            "Prepare a comparison prompt for selected listings",
            "Show an appropriate banner or contact card in ad slots",
            "Store cache and preferences locally to improve user experience",
          ],
        },
        {
          id: "storage",
          title: "4. Local Storage",
          paragraphs: [
            "OtoMercek stores some data in chrome.storage.local. Examples include filters, selected listings, language preference, list mode, panel state, cached listing data, and the temporary comparison prompt.",
            "This data is primarily kept in the user's own browser and is used to support extension settings, performance, and continuity of the workflow.",
          ],
        },
        {
          id: "third-parties",
          title: "5. Third Parties and Network Requests",
          paragraphs: [
            "OtoMercek may interact with the following external services in a limited way:",
          ],
          list: [
            "sahibinden.com: reading and analyzing listing content",
            "chatgpt.com: moving the prepared text into the message area only when the user starts the comparison flow",
            "raw.githubusercontent.com: loading ad config and banner images",
          ],
          extraParagraphs: [
            "Text prepared in the comparison flow is moved to a ChatGPT window only as a result of a user-triggered action. This flow does not start automatically on its own.",
          ],
        },
        {
          id: "ads",
          title: "6. Ad System",
          paragraphs: [
            "OtoMercek uses a remotely configured banner system for fixed ad slots. The ad config is fetched from a fixed JSON source.",
          ],
          list: [
            "Supported ad slots are fixed and defined inside the application",
            "Ad images are accepted only from a specific GitHub banners/ directory",
            "Ad target links are used only when they are valid https URLs",
            "No remote JavaScript or executable code is run",
          ],
        },
        {
          id: "choices",
          title: "7. User Control",
          list: [
            "The user can clear or change filters, selected listings, and certain preferences",
            "The user can disable or remove the extension",
            "The ChatGPT comparison flow is user-initiated; no automatic send action is performed",
          ],
        },
        {
          id: "retention",
          title: "8. Retention",
          paragraphs: [
            "Locally stored data may remain until the user clears it, removes the extension, or the relevant cache and preference flows update it.",
            "Temporary comparison prompt data is designed to be cleared after it is consumed by the ChatGPT bridge.",
          ],
        },
        {
          id: "security",
          title: "9. Security",
          paragraphs: [
            "OtoMercek aims to keep data processing limited to what is necessary for its features. Format and source checks are applied for ad config and banner assets.",
            "However, no browser extension can provide an absolute security guarantee; users should also protect the security of their browser and device.",
          ],
        },
        {
          id: "changes",
          title: "10. Changes",
          paragraphs: [
            "This policy may be updated from time to time. The current version information is published on this page.",
            "If material changes are made, the Chrome Web Store listing, product documentation, or related pages may also be updated.",
          ],
        },
      ],
    },
  };

  function resolveLocale(value) {
    return String(value || "tr").toLowerCase().startsWith("en") ? "en" : "tr";
  }

  function readInitialLocale() {
    try {
      const params = new URLSearchParams(window.location.search);
      const locale = params.get("locale");
      if (locale) return resolveLocale(locale);
    } catch {}
    return "tr";
  }

  async function persistLocale(locale) {
    try {
      window.localStorage?.setItem("skf.locale", locale);
    } catch {}
    try {
      if (window.chrome?.storage?.local?.set) {
        await window.chrome.storage.local.set({ locale });
      }
    } catch {}
  }

  function buildSection(section = {}) {
    const node = document.createElement("section");
    node.className = "section";
    node.id = section.id || "";

    const title = document.createElement("h2");
    title.textContent = section.title || "";
    node.appendChild(title);

    (section.paragraphs || []).forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      node.appendChild(paragraph);
    });

    if (section.callout) {
      const callout = document.createElement("div");
      callout.className = "callout";
      callout.textContent = section.callout;
      node.appendChild(callout);
    }

    if (Array.isArray(section.list) && section.list.length > 0) {
      const list = document.createElement("ul");
      section.list.forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        list.appendChild(item);
      });
      node.appendChild(list);
    }

    (section.extraParagraphs || []).forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      node.appendChild(paragraph);
    });

    return node;
  }

  function render(locale) {
    const content = resources[resolveLocale(locale)] || resources.tr;
    document.documentElement.lang = content.lang;
    document.title = content.pageTitle;

    document.getElementById("privacy-eyebrow").textContent = content.eyebrow;
    document.getElementById("privacy-title").textContent = content.title;
    document.getElementById("privacy-intro").textContent = content.intro;
    document.getElementById("privacy-meta-version").textContent = content.metaVersion;
    document.getElementById("privacy-meta-product").textContent = content.metaProduct;
    document.getElementById("privacy-meta-scope").textContent = content.metaScope;
    document.getElementById("privacy-nav-title").textContent = content.navTitle;

    const navList = document.getElementById("privacy-nav-list");
    navList.innerHTML = "";
    content.sections.forEach((section) => {
      const navItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${section.id}`;
      link.textContent = section.title;
      navItem.appendChild(link);
      navList.appendChild(navItem);
    });

    const contentRoot = document.getElementById("privacy-content");
    contentRoot.innerHTML = "";
    content.sections.forEach((section) => {
      contentRoot.appendChild(buildSection(section));
    });

    document.querySelectorAll(".locale-btn").forEach((button) => {
      button.classList.toggle("active", button.dataset.locale === content.lang);
    });
  }

  async function applyLocale(locale) {
    const resolvedLocale = resolveLocale(locale);
    render(resolvedLocale);
    await persistLocale(resolvedLocale);
  }

  async function bootstrap() {
    const initialLocale = readInitialLocale();
    render(initialLocale);

    document.querySelectorAll(".locale-btn").forEach((button) => {
      button.addEventListener("click", () => {
        void applyLocale(button.dataset.locale || "tr");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => void bootstrap(), { once: true });
    return;
  }

  void bootstrap();
})(window, document);
