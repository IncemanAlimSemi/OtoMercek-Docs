"use strict";

(function initTermsPage(window, document) {
  const resources = {
    tr: {
      lang: "tr",
      pageTitle: "OtoMercek Kullanıcı Sözleşmesi",
      eyebrow: "Kullanıcı Sözleşmesi",
      title: "OtoMercek Kullanım, Sorumluluk ve Risk Bildirimi",
      intro: "Bu metin, OtoMercek eklentisinin kullanım koşullarını, sorumluluk sınırlarını ve kullanıcı yükümlülüklerini düzenler. Eklentiyi kullanmadan önce bu metni dikkatle incelemeniz gerekir.",
      metaVersion: "Sürüm: 2026-04-02",
      metaScope: "Geçerlilik: Eklenti kullanımı",
      navTitle: "Bölümler",
      sections: [
        {
          id: "amac",
          title: "1. Amaç ve Kapsam",
          paragraphs: [
            "OtoMercek, üçüncü taraf ilan sitelerinde yer alan içerikleri; kaporta bilgisi, açıklama eşleşmeleri, kritik ifade işaretleri, filtre kuralları ve benzeri veri kümeleri üzerinden değerlendiren yardımcı bir tarayıcı eklentisidir.",
            "Eklenti, kullanıcının deneyimini ve karar sürecini geliştirmek amacıyla tasarlanmıştır. Bununla birlikte eklentinin sunduğu hiçbir çıktı; ekspertiz, hukuki inceleme, mali danışmanlık, teknik garanti veya kesin doğrulama hizmeti niteliğinde değildir."
          ]
        },
        {
          id: "bilgilendirme",
          title: "2. Bilgilendirme Niteliği",
          paragraphs: [
            "Eklenti tarafından gösterilen tüm sonuçlar yalnızca bilgilendirme amaçlıdır. İlan içeriği, satıcı beyanı, görseller, hasar ifadeleri, tramer kayıtlarına ilişkin metinler ve diğer tüm veriler üçüncü taraf kaynaklardan türetilmektedir.",
            "Bu nedenle söz konusu veriler eksik, yanlış, güncel olmayan, yanıltıcı, bağlamından kopuk veya satıcı tarafından hatalı girilmiş olabilir. OtoMercek geliştiricisi bu içeriklerin doğruluğu, bütünlüğü, güncelliği veya belirli bir amaca uygunluğu konusunda herhangi bir garanti vermez."
          ]
        },
        {
          id: "sorumluluk",
          title: "3. Kullanıcı Sorumluluğu",
          paragraphs: [
            "Eklentiyi kullanarak vereceğiniz her türlü satın alma, satış, ekspertiz yaptırma, iletişime geçme, ilanı değerlendirme, eleme veya finansal kararın tüm sorumluluğu size aittir.",
            "Bir ilanın uygun ya da uygunsuz değerlendirilmesi, filtreye takılması, kritik ifade içermesi veya temiz görünmesi; o ilanın hukuken, teknik olarak veya ticari açıdan güvenli olduğu anlamına gelmez.",
            "Kullanıcı, eklentiyi kullanırken eriştiği üçüncü taraf platformların kullanım koşullarına, topluluk kurallarına, veri kullanım politikalarına ve yürürlükteki mevzuata uymakla yükümlüdür.",
            "Eklentinin üçüncü taraf platformlarla etkileşimi nedeniyle doğabilecek sözleşme ihlali, erişim kısıtlaması, hesap yaptırımı, veri kullanımı ihtilafı veya benzeri sonuçlardan geliştirici sorumlu değildir."
          ],
          highlight: "Kullanıcı, eklentiyi kullanarak yaptığı tüm işlemlerin ve bunlardan doğabilecek maddi, manevi, ticari veya hukuki sonuçların münhasıran kendi sorumluluğunda olduğunu açıkça kabul eder."
        },
        {
          id: "guvenlik",
          title: "4. Güvenlik ve Teknik Riskler",
          paragraphs: [
            "Kullanıcı, tarayıcı eklentisi yüklemenin ve üçüncü taraf sistemlerle etkileşime girmenin doğası gereği çeşitli teknik ve güvenlik riskleri taşıyabileceğini kabul eder.",
            "Eklentinin kurulması, kullanılması, güncellenmesi, kaldırılması veya üçüncü taraf içeriklerle birlikte çalışması sırasında ortaya çıkabilecek hata, veri kaybı, hesap sorunu, erişim problemi, güvenlik açığı, kötü niyetli üçüncü taraf müdahalesi, tarayıcı problemi veya benzeri herhangi bir teknik sonuç bakımından nihai sorumluluk kullanıcıya aittir.",
            "Kullanıcı, eklentiyi kendi iradesiyle indirip kullandığını; cihazı, tarayıcısı, hesabı ve verileri üzerindeki güvenlik önlemlerini kendisinin almakla yükümlü olduğunu kabul eder.",
            "Kullanıcı, üçüncü taraf platformlarda yer alan ilan verilerini, açıklamaları, görselleri, kaporta bilgilerini ve diğer içerikleri bu eklenti aracılığıyla görüntüleme, işleme, filtreleme, sınıflandırma, dışa aktarma veya başka şekilde kullanma kararının tamamen kendi iradesiyle alındığını kabul eder.",
            "Kullanıcı; üçüncü taraf platformların kullanım koşulları, veri kullanım politikaları ve ilgili tüm yükümlülükler bakımından sorumluluğun münhasıran kendisine ait olduğunu, OtoMercek geliştiricisinin bu kullanım nedeniyle hiçbir hukuki, idari, ticari veya teknik sorumluluk üstlenmediğini kabul eder.",
            "Eklenti, kullanıma bağlı olarak otomatik veri çekme, analiz etme, sıralama, önbellekleme veya işleme davranışları içerebilir. Kullanıcı, bu tür otomasyon davranışlarının eklentinin işleyişinin bir parçası olduğunu bilerek eklentiyi kullanmayı kabul eder.",
            "Eklenti yalnızca istemci tarafında çalışır; analiz edilen veriler, kullanıcı ayarları ve önbellek kayıtları kullanıcının kendi tarayıcısında veya tarayıcı tarafından sağlanan yerel depolama alanlarında saklanır. Geliştirici, kullanıcı adına merkezi bir veri havuzu işletmeyi taahhüt etmez.",
            "Kullanıcı; onay, filtre veya kullanım sınırlamalarını yerel olarak devre dışı bırakması, değiştirmesi, atlatması veya başka bir teknik yöntemle bypass etmesi halinde de sorumluluk dağılımının değişmeyeceğini ve tüm sonuçların kendisine ait olmaya devam edeceğini kabul eder."
          ]
        },
        {
          id: "kullanim-sinirlari",
          title: "5. Kullanım Sınırları ve Yasaklar",
          paragraphs: [
            "Kullanıcı, eklentiyi kötüye kullanmamayı; üçüncü taraf sistemlere aşırı istek göndermemeyi, hizmetleri zorlayıcı yoğunlukta kullanmamayı, erişim veya kullanım kısıtlarını aşmaya çalışmamayı kabul eder.",
            "Eklenti üzerinden elde edilen veri, çıktı veya türetilmiş içerikler; geliştiricinin açık yazılı izni olmadıkça ticari amaçla kullanılamaz, toplu şekilde yeniden dağıtılamaz, üçüncü taraflara sunulamaz, satılamaz veya ayrı bir veri hizmetine dönüştürülemez.",
            "Kullanıcı, eklentiyi mevzuata, platform kurallarına veya üçüncü taraf haklarına aykırı biçimde kullanmamayı kabul eder."
          ]
        },
        {
          id: "sorumluluk-red",
          title: "6. Sorumluluğun Reddi ve Garanti Reddi",
          paragraphs: [
            "OtoMercek geliştiricisi; eklentinin kullanımından, yanlış yorumlanmasından, eksik veri üretmesinden, üçüncü taraf içeriklerin hatalı olmasından, teknik sorunlardan, performans kayıplarından, güvenlik olaylarından veya eklentiyle bağlantılı herhangi bir doğrudan ya da dolaylı zarardan sorumlu tutulamaz.",
            "Bu sorumsuzluk; maddi zarar, kazanç kaybı, fırsat kaybı, yanlış satın alma kararı, veri kaybı, sistem sorunu, hesap erişim problemi, itibar kaybı, hukuki ihtilaf ve benzeri tüm olası sonuçları kapsar.",
            "Eklenti 'olduğu gibi' ve 'mevcut olduğu ölçüde' sunulur. Geliştirici; erişilebilirlik, kesintisizlik, hatasız çalışma, belirli bir amaca uygunluk, doğruluk, performans veya güvenlik bakımından açık ya da zımni herhangi bir garanti vermez."
          ],
          highlight: "Kullanıcı, eklentiyi kullanmaya devam ederek geliştiriciye herhangi bir garanti, taahhüt veya sonuç sorumluluğu yüklenemeyeceğini kabul eder."
        },
        {
          id: "degisiklikler",
          title: "7. Hizmette Değişiklik ve Erişim",
          paragraphs: [
            "Geliştirici, eklentinin özelliklerini, çalışma şeklini, desteklenen platformlarını, erişim kapsamını veya teknik davranışlarını herhangi bir zamanda önceden bildirimde bulunmaksızın değiştirme, askıya alma, durdurma veya sınırlandırma hakkını saklı tutar.",
            "Belirli bir özelliğin kaldırılması, çalışmaması, uyumsuz hale gelmesi veya erişimin kısıtlanması nedeniyle geliştiriciye karşı herhangi bir talepte bulunulamaz."
          ]
        },
        {
          id: "kabul",
          title: "8. Kabul Beyanı",
          paragraphs: [
            "Eklenti içinde yer alan “Kabul Ediyorum” butonuna basmanız; bu sözleşmeyi okuduğunuzu, içeriğini anladığınızı ve tüm hükümlerini kabul ettiğinizi beyan ettiğiniz anlamına gelir.",
            "Filtre, inceleme, analiz, seçim, dışa aktarma veya eklenti kapsamındaki diğer işlevlerden herhangi birinin kullanılması da kullanıcı sözleşmesinin okunmuş ve kabul edilmiş sayıldığına ayrıca karine teşkil eder.",
            "Bu sayfayı görüntülemeniz tek başına kabul anlamına gelmez. Bununla birlikte kullanıcı, onay akışını teknik yollarla değiştirse veya aşsa dahi eklentiyi kullanmaya devam etmesinin kabul sonucunu ortadan kaldırmadığını kabul eder."
          ]
        }
      ]
    },
    en: {
      lang: "en",
      pageTitle: "OtoMercek User Agreement",
      eyebrow: "User Agreement",
      title: "OtoMercek Usage, Responsibility, and Risk Notice",
      intro: "This document regulates the terms of use, limits of liability, and user obligations for the OtoMercek extension. You should review it carefully before using the extension.",
      metaVersion: "Version: 2026-04-02",
      metaScope: "Scope: Extension usage",
      navTitle: "Sections",
      sections: [
        {
          id: "purpose",
          title: "1. Purpose and Scope",
          paragraphs: [
            "OtoMercek is a helper browser extension that evaluates content on third-party listing platforms through body-condition data, description matches, critical phrase flags, filter rules, and similar data sets.",
            "The extension is designed to improve the user experience and support the user's decision-making process. However, none of the outputs provided by the extension constitute expert inspection, legal review, financial advice, technical warranty, or definitive verification."
          ]
        },
        {
          id: "information",
          title: "2. Informational Nature",
          paragraphs: [
            "All results shown by the extension are for informational purposes only. Listing content, seller statements, images, damage-related phrases, text related to tramer records, and all other data are derived from third-party sources.",
            "Accordingly, such data may be incomplete, inaccurate, outdated, misleading, taken out of context, or entered incorrectly by the seller. The OtoMercek developer provides no warranty regarding the accuracy, completeness, timeliness, or fitness of such content for any particular purpose."
          ]
        },
        {
          id: "responsibility",
          title: "3. User Responsibility",
          paragraphs: [
            "All responsibility for any purchase, sale, inspection request, contact attempt, listing evaluation, elimination, or financial decision you make using the extension rests solely with you.",
            "A listing being marked suitable or unsuitable, caught by a filter, containing a critical phrase, or appearing clean does not mean that the listing is legally, technically, or commercially safe.",
            "The user is responsible for complying with the terms of use, community rules, data usage policies, and applicable laws of any third-party platform accessed while using the extension.",
            "The developer is not responsible for any breach, restriction, account sanction, data-use dispute, or similar consequence arising from the user's interactions with third-party platforms."
          ],
          highlight: "The user expressly acknowledges that all actions taken through the extension and any financial, moral, commercial, or legal consequences arising from them remain exclusively under the user's responsibility."
        },
        {
          id: "security",
          title: "4. Security and Technical Risks",
          paragraphs: [
            "The user acknowledges that installing a browser extension and interacting with third-party systems inherently involves various technical and security risks.",
            "The user bears ultimate responsibility for any technical consequence arising during installation, use, update, removal, or operation alongside third-party content, including errors, data loss, account issues, access problems, security vulnerabilities, malicious third-party interference, browser issues, or similar outcomes.",
            "The user acknowledges that they download and use the extension voluntarily and are responsible for taking appropriate security precautions for their device, browser, account, and data.",
            "The user acknowledges that the decision to view, process, filter, classify, export, or otherwise use listing data, descriptions, images, body-condition data, and other content available on third-party platforms through this extension is made entirely by the user of their own free will.",
            "The user accepts that responsibility for compliance with third-party platform terms of use, data usage policies, and all related obligations remains exclusively with the user, and that the OtoMercek developer assumes no legal, administrative, commercial, or technical liability arising from such use.",
            "The extension may include automated fetching, analysis, queuing, caching, or processing behaviors depending on its configuration and features. By using the extension, the user knowingly accepts the presence of such automation behaviors.",
            "The extension operates only on the client side; analyzed data, user preferences, and cache records are stored in the user's own browser or browser-provided local storage. The developer does not undertake to operate a centralized data repository on behalf of the user.",
            "The user also accepts that disabling, modifying, bypassing, or otherwise circumventing approval, filtering, or usage limitations locally does not alter the allocation of responsibility and all consequences remain the user's responsibility."
          ]
        },
        {
          id: "restrictions",
          title: "5. Usage Restrictions and Prohibited Conduct",
          paragraphs: [
            "The user agrees not to misuse the extension, including by sending excessive requests to third-party systems, using it in a system-straining manner, or attempting to bypass access or usage limitations.",
            "Unless expressly permitted in writing by the developer, data, outputs, or derived content obtained through the extension may not be used commercially, redistributed in bulk, provided to third parties, sold, or converted into a separate data service.",
            "The user agrees not to use the extension in any manner contrary to law, platform rules, or third-party rights."
          ]
        },
        {
          id: "disclaimer",
          title: "6. Disclaimer of Liability and Warranty",
          paragraphs: [
            "The OtoMercek developer cannot be held responsible for the use of the extension, misinterpretation of results, incomplete data generation, inaccurate third-party content, technical issues, performance losses, security incidents, or any direct or indirect damage connected with the extension.",
            "This disclaimer covers all possible outcomes including financial damage, loss of profit, loss of opportunity, incorrect purchase decisions, data loss, system issues, account access problems, reputational damage, legal disputes, and similar consequences.",
            "The extension is provided 'as is' and 'as available'. The developer makes no express or implied warranty regarding availability, uninterrupted operation, error-free performance, fitness for a particular purpose, accuracy, performance, or security."
          ],
          highlight: "By continuing to use the extension, the user acknowledges that no warranty, commitment, or outcome-based responsibility can be imposed on the developer."
        },
        {
          id: "changes",
          title: "7. Service Changes and Access",
          paragraphs: [
            "The developer reserves the right to change, suspend, discontinue, or restrict the extension's features, behavior, supported platforms, or access scope at any time without prior notice.",
            "No claim may be made against the developer solely because a feature is removed, becomes unavailable, ceases to function, or becomes incompatible."
          ]
        },
        {
          id: "acceptance",
          title: "8. Acceptance Statement",
          paragraphs: [
            "Clicking the “I Accept” button inside the extension means that you declare that you have read, understood, and accepted all terms of this agreement.",
            "Use of any feature covered by the extension, including filtering, inspection, analysis, selection, export, or similar flows, also constitutes additional evidence that the user agreement has been read and accepted.",
            "Viewing this page alone does not constitute acceptance. However, the user also acknowledges that continuing to use the extension after technically modifying or bypassing the approval flow does not eliminate the legal effect of acceptance."
          ]
        }
      ]
    }
  };

  function resolveLocale(value) {
    return String(value || "tr").toLowerCase().startsWith("en") ? "en" : "tr";
  }

  async function readStoredLocale() {
    try {
      if (window.chrome?.storage?.local?.get) {
        const data = await window.chrome.storage.local.get(["locale"]);
        if (data?.locale) return resolveLocale(data.locale);
      }
    } catch {}
    try {
      const localValue = window.localStorage?.getItem("skf.locale");
      if (localValue) return resolveLocale(localValue);
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

  function render(locale) {
    const content = resources[resolveLocale(locale)] || resources.tr;
    document.documentElement.lang = content.lang;
    document.title = content.pageTitle;
    document.getElementById("terms-eyebrow").textContent = content.eyebrow;
    document.getElementById("terms-title").textContent = content.title;
    document.getElementById("terms-intro").textContent = content.intro;
    document.getElementById("terms-meta-version").textContent = content.metaVersion;
    document.getElementById("terms-meta-scope").textContent = content.metaScope;
    document.getElementById("terms-nav-title").textContent = content.navTitle;

    document.querySelectorAll(".locale-btn").forEach((button) => {
      const isActive = button.dataset.locale === content.lang;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    const navList = document.getElementById("terms-nav-list");
    navList.innerHTML = content.sections.map((section) =>
      `<li><a href="#${section.id}">${section.title}</a></li>`
    ).join("");

    const contentRoot = document.getElementById("terms-content");
    contentRoot.innerHTML = content.sections.map((section) => `
      <section class="section" id="${section.id}">
        <h2>${section.title}</h2>
        ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        ${section.highlight ? `<div class="highlight">${section.highlight}</div>` : ""}
      </section>
    `).join("");
  }

  async function bootstrap() {
    const queryLocale = new URLSearchParams(window.location.search).get("locale");
    const locale = resolveLocale(queryLocale || await readStoredLocale());
    render(locale);

    document.querySelectorAll(".locale-btn").forEach((button) => {
      button.addEventListener("click", async () => {
        const nextLocale = resolveLocale(button.dataset.locale);
        await persistLocale(nextLocale);
        const url = new URL(window.location.href);
        url.searchParams.set("locale", nextLocale);
        window.history.replaceState({}, "", url.toString());
        render(nextLocale);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap, { once: true });
  } else {
    bootstrap();
  }
})(window, document);
