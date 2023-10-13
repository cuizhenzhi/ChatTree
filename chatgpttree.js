// ==UserScript==
// @name         🌳ChatGPTTree🌳
// @name:zh-CN   🌳ChatGPTTree🌳
// @namespace    https://czz9.top
// @version      2023.10.13.01
// @description  A intuitive, flexible, and user-friendly tool for real-time updates and customizing conversation trees, with support for dragging, zooming, searching, and managing, making interactions with ChatGPT more convenient and personalized.
// @description:ar   أداة بديهية ومرنة وودية للمستخدم، تحديث في الوقت الحقيقي وتخصيص شجرة الدردشة، تدعم السحب والإسقاط، التكبير/التصغير، البحث والإدارة، مما يجعل التفاعل مع ChatGPT أسهل وأكثر تخصصًا.
// @description:bg   Интуитивен, гъвкав и потребителски приятелски инструмент, реално време обновяване и персонализиране на диалоговото дърво, поддържа плъзгане и пускане, мащабиране, търсене и управление, което прави взаимодействието с ChatGPT по-лесно и персонализирано.
// @description:cs   Intuitivní, flexibilní a uživatelsky přívětivý nástroj, aktualizace v reálném čase a přizpůsobení stromu dialogu, podpora táhnutí a přetažení, zoom, vyhledávání a správa, činí interakci s ChatGPT snadnější a personalizovanější.
// @description:da   En intuitiv, fleksibel og brugervenlig værktøj, realtidsopdatering og tilpasning af dialogtræ, understøtter træk og slip, zoom, søgning og styring, gør interaktion med ChatGPT lettere og mere personlig.
// @description:de   Ein intuitives, flexibles und benutzerfreundliches Werkzeug, Echtzeit-Aktualisierung und Anpassung des Dialogbaums, unterstützt Drag & Drop, Zoom, Suche und Verwaltung, macht die Interaktion mit ChatGPT einfacher und individueller.
// @description:el   Ένα εύχρηστο, ευέλικτο και φιλικό προς τον χρήστη εργαλείο, ενημέρωση σε πραγματικό χρόνο και προσαρμογή του δέντρου διαλόγου, υποστηρίζει τη μεταφορά και απόθεση, το ζουμ, την αναζήτηση και τη διαχείριση, καθιστώντας την αλληλεπίδραση με το ChatGPT πιο εύκολη και προσαρμοσμένη.
// @description:en   An intuitive, flexible, and user-friendly tool, real-time updating and customization of the dialog tree, supports drag-and-drop, zoom, search, and management, making interaction with ChatGPT more convenient and personalized.
// @description:eo   Intuitiva, fleksebla kaj uzantamika ilo, ĝisdatigas kaj proprigas la dialogan arbon reale, subtenas ŝovmeti, zoomi, serĉi kaj administri, igante la interagon kun ChatGPT pli oportuna kaj personeca.
// @description:es   Una herramienta intuitiva, flexible y amigable para el usuario, actualización en tiempo real y personalización del árbol de diálogo, soporta arrastrar y soltar, zoom, búsqueda y gestión, haciendo que la interacción con ChatGPT sea más conveniente y personalizada.
// @description:fi   Intuitiivinen, joustava ja käyttäjäystävällinen työkalu, dialogipuun reaaliaikainen päivitys ja mukauttaminen, tukee vetämistä ja pudottamista, zoomausta, hakua ja hallintaa, tekee vuorovaikutuksesta ChatGPT: n kanssa kätevämmän ja henkilökohtaisemman.
// @description:fr   Un outil intuitif, flexible et convivial, mise à jour en temps réel et personnalisation de l'arbre de dialogue, prend en charge le glisser-déposer, le zoom, la recherche et la gestion, rendant l'interaction avec ChatGPT plus pratique et personnalisée.
// @description:fr-CA   Un outil intuitif, flexible et convivial, mise à jour en temps réel et personnalisation de l'arbre de dialogue, prend en charge le glisser-déposer, le zoom, la recherche et la gestion, rendant l'interaction avec ChatGPT plus pratique et personnalisée.
// @description:he   כלי אינטואיטיבי, גמיש וידידותי למשתמש, עדכון בזמן אמת והתאמה אישית של עץ הדיאלוג, תומך בגרירה ושחרור, זום, חיפוש וניהול, והופך את האינטראקציה עם ChatGPT לנוחה ומותאמת אישית יותר.
// @description:hu   Egy intuitív, rugalmas és felhasználóbarát eszköz, valós idejű frissítés és a párbeszéd fa testreszabása, támogatja a húzást és az ejtést, a nagyítást, a keresést és a kezelést, megkönnyítve az interakciót a ChatGPT-vel és személyre szabottabbá téve azt.
// @description:id   Alat intuitif, fleksibel, dan ramah pengguna, pembaruan real-time dan penyesuaian pohon dialog, mendukung seret dan lepas, zoom, pencarian, dan manajemen, membuat interaksi dengan ChatGPT lebih nyaman dan personal.
// @description:it   Uno strumento intuitivo, flessibile e user-friendly, aggiornamento in tempo reale e personalizzazione dell'albero dei dialoghi, supporta il drag-and-drop, lo zoom, la ricerca e la gestione, rendendo l'interazione con ChatGPT più conveniente e personalizzata.
// @description:ja   直感的で柔軟でユーザーフレンドリーなツール、ダイアログツリーのリアルタイム更新とカスタマイズ、ドラッグアンドドロップ、ズーム、検索、管理をサポートし、ChatGPTとのインタラクションをより便利でパーソナライズされたものにします。
// @description:ka   ინტუიციური, გადაწყვეტი და მომხმარებლებთან მეგობრიანი ხელსაწყო, დიალოგების ხეების განახლება რეალურ დროში და პერსონალიზაცია, რეჟიმების ჩამოყალიბების, გადიდების, ძიებისა და მართვის მხარდაჭერა, რაც გახდის ChatGPT-თან ინტერაქციას უფრო კომფორტულ და პერსონალურ.
// @description:ko   직관적이고 유연하며 사용자 친화적인 도구, 실시간 업데이트 및 대화 트리 사용자 정의, 드래그 앤 드롭, 줌, 검색 및 관리 지원, ChatGPT와의 상호 작용을 더 편리하고 개인화된 경험으로 만듭니다.
// @description:nb   Et intuitivt, fleksibelt og brukervennlig verktøy, sanntidsoppdatering og tilpasning av dialogtreet, støtter dra og slipp, zoom, søk og styring, noe som gjør interaksjon med ChatGPT mer praktisk og personlig.
// @description:nl   Een intuïtief, flexibel en gebruiksvriendelijk hulpmiddel, real-time bijwerken en aanpassen van de dialoogboom, ondersteunt slepen en neerzetten, zoomen, zoeken en beheren, waardoor interactie met ChatGPT handiger en gepersonaliseerd wordt.
// @description:pl   Intuicyjne, elastyczne i przyjazne użytkownikowi narzędzie, aktualizacja w czasie rzeczywistym i dostosowywanie drzewa dialogowego, obsługuje przeciąganie i upuszczanie, powiększanie, wyszukiwanie i zarządzanie, co sprawia, że interakcja z ChatGPT jest bardziej wygodna i spersonalizowana.
// @description:pt-PT Uma ferramenta intuitiva, flexível e amigável para o usuário, com atualização em tempo real e personalização da árvore de diálogo, suporta arrastar e soltar, zoom, pesquisa e gestão, tornando a interação com o ChatGPT mais conveniente e personalizada.
// @description:pt-BR Uma ferramenta intuitiva, flexível e amigável ao usuário, atualização em tempo real e personalização da árvore de diálogo, suporta arrastar e soltar, zoom, pesquisa e gerenciamento, tornando a interação com o ChatGPT mais conveniente e personalizada.
// @description:ro   Un instrument intuitiv, flexibil și prietenos pentru utilizator, actualizare în timp real și personalizarea arborelui de dialog, suportă drag-and-drop, zoom, căutare și management, făcând interacțiunea cu ChatGPT mai convenabilă și personalizată.
// @description:ru   Интуитивный, гибкий и удобный инструмент, обновление в реальном времени и настройка дерева диалога, поддерживает перетаскивание, масштабирование, поиск и управление, делая взаимодействие с ChatGPT более удобным и персонализированным.
// @description:sk   Intuitívny, flexibilný a užívateľsky príjemný nástroj, aktualizácia v reálnom čase a prispôsobenie stromu dialógov, podporuje pretiahnutie a pustenie, priblíženie, vyhľadávanie a správu, čo uľahčuje interakciu s ChatGPT a personalizuje ju.
// @description:sr   Интуитиван, флексибилан и кориснички пријатан алат, ажурирање у реалном времену и прилагођавање дијалога, подржава превлачење, зумирање, претрагу и управљање, олакшавајући интеракцију са ChatGPT и персонализујући је.
// @description:sv   Ett intuitivt, flexibelt och användarvänligt verktyg, uppdatering i realtid och anpassning av dialogträdet, stöder dra och släpp, zoomning, sökning och hantering, vilket gör interaktionen med ChatGPT mer bekväm och personlig.
// @description:th   เครื่องมือที่ใช้งานง่าย ยืดหยุ่น และเป็นมิตรกับผู้ใช้ การอัปเดตแบบเรียลไทม์และการปรับแต่งต้นไม้ของการสนทนา รองรับการลากและวาง การซูม การค้นหาและการจัดการ ทำให้การโต้ตอบกับ ChatGPT สะดวกและส่วนบุคคลขึ้น
// @description:tr   Kullanıcı dostu, esnek ve kullanıcı dostu bir araç, dialog ağacının gerçek zamanlı güncellemesi ve özelleştirmesi, sürükle ve bırak, yakınlaştırma, arama ve yönetimi destekler, ChatGPT ile etkileşimi daha uygun ve kişiselleştirilmiş hale getirir.
// @description:uk   Інтуїтивний, гнучкий та зручний для користувача інструмент, оновлення в реальному часі та налаштування діалогового дерева, підтримує перетягування, масштабування, пошук та керування, спрощуючи взаємодію з ChatGPT та роблячи її більш індивідуалізованою.
// @description:ug   ئىنتۇئىتىۋ، يۇمشاق ۋە ئىشلىتكۈچى دوستىي قورال، سۆھبەت تارىخچىسىنى ۋاقتى ۋاقتىلا يېڭىلاش ۋە ئۆزگەرتىش، تارتىپلاش، چوڭايتىش، ئىزدەش ۋە باشقۇرۇشنى قوللايدۇ، ChatGPT بىلەن ئاراملىشىشنى يەنە قولاي ۋە شەخسىيلاشتۇرىدۇ.
// @description:vi   Một công cụ trực quan, linh hoạt và thân thiện với người dùng, cập nhật theo thời gian thực và tùy chỉnh cây hội thoại, hỗ trợ kéo và thả, zoom, tìm kiếm và quản lý, làm cho tương tác với ChatGPT thuận tiện và cá nhân hóa hơn.
// @description:zh-CN   一款直观、灵活和用户友好的工具，实时更新和自定义对话树，支持拖拽、缩放、搜索和管理，让与ChatGPT的互动更加便捷和个性化。
// @description:zh-TW   一款直觀、靈活和使用者友善的工具，即時更新和自定義對話樹，支援拖放、縮放、搜尋和管理，讓與ChatGPT的互動更加便利和個人化。
// @author   cuizhenzhi
// @match    *://chat.openai.com/*
// @grant    GM_addStyle
// @grant    GM_getResourceText
// @require  https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js
// @require  https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js
// @require  https://cdnjs.cloudflare.com/ajax/libs/interact.js/1.10.11/interact.min.js
// @require  https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @require      https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js
// @run-at document-end
// @supportURL   https://docs.google.com/forms/d/e/1FAIpQLSetbHqiS1GBM6bG0QaaKy9cN31jKXK76BcYCW8_wkRNH7I5kQ/viewform
// @license GPL-2.0-only
// @icon data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" stroke-width="8" fill="none" stroke="white" viewBox="0 0 100 100"><rect width="100%" height="100%" fill="rgb(25, 195, 125)"/><path d="M40 61 V89 Q40 90 41 90 H59 Q60 90 60 89 V61 Q60 60 61 61 Q66 65 69 61 70 60 71 61 75 65 79 61 80 60 81 61 85 65 89 61 90 60 89 59 75 55 61 41 60 40 60.5 40.5 Q66 45 69 41 70 40 71 41 75 45 79 41 80 40 79 39 70 35 61 26 60 25 61 26 Q65 30 69 26 70 25 69 24 60 20 51 11 50 10 49 11 40 20 31 24 30 25 31 26 Q35 30 39 26 40 25 39 26 30 35 21 39 20 40 21 41 Q25 45 29 41 30 40 31 41 35 45 39 41 40 40 39 41 25 55 11 59 10 60 11 61 Q15 65 19 61 20 60 21 61 25 65 29 61 30 60 31 61 35 65 39 61 40 60 40 61"></path></svg>
// ==/UserScript==

(function () {
  "use strict";

  // 创建新的 link 元素
  //var thelink = document.createElement('link');

// 设置 link 元素的属性
  //thelink.rel = 'stylesheet';
  //thelink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';

// 将 link 元素添加到 head 中
  //document.head.appendChild(thelink);
  // $.get('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css', function(data) {
  //   $('<style></style>').appendTo('head').html(data);
  // });
  const isDevelopmentMode = false;

  function log(...messages) {
    if (isDevelopmentMode) {
      console.log(...messages);
    }
  }

  function error(...messages) {
    console.error(...messages);
  }

  GM_addStyle(`
  
          #searchTopicContainer {
            margin-bottom: 20px;
        }

        .conversation {/*#conversationContainer */
            border: 1px solid #ccc;
            margin-bottom: 10px;
            padding: 10px;
            margin-top: 20px;
            margin-left: 20px;
            margin-right: 20px;
        }

        .category {
            background-color: #f3f3f3;
            display: inline-block;
            padding: 2px 8px;
            margin-right: 2px;
            margin-bottom: 2px;

        }

        .chatTreeTag {
            background-color: #e0e0e0;
            display: inline-block;
            padding: 2px 8px;
            margin-right: 5px;
            margin-bottom: 2px;

        }

        .delete-icon,
        .add-icon {
            cursor: pointer;
            margin-left: 5px;
        }

        .delete-icon:hover,
        .add-icon:hover {
            background: #adb5bd;
        }

        .conversation h3 {
            display: inline-block;
            margin: 0; /* 移除默认边距 */
        }

        .conversation-actions {
            margin-left: auto; /* 推到右侧 */
        }

        .conversation {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        
        .topicContainer{
          width: 35%; 
          overflow: hidden;
        }
        
        .optionsContainer{
          width: 12%; 
          display: flex;
          justify-content: center; 
        }

        .tagContainers {
            width: 26%;
            display: flex; 
            justify-content: center; 
            align-items: center; 
            flex-wrap: wrap;
        }

        .categoriesContainer {
            width: 26%;
            display: flex; 
            justify-content: center; 
            align-items: center; 
            flex-wrap: wrap;
        }

        #managePanel {
            color: black;
            overflow: hidden;
            background: rgb(255,253,249);
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 999;  /* 根据需要设置，以确保该元素位于其他元素之上 */
            
        }

        #panelToggleButton {
            position: fixed;
            left: 0;
            top: 40%;
            z-index: 1000;
            padding: 10px 20px;
            border: none;
            background: rgb(171, 104, 255);
            color: white;
            cursor: pointer;
        }
        .card-header{
            height: 40px;
            display: flex;
            border: 1px solid #adb5bd;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 1.25rem;  /* Optional: for adding some space inside the card-header */

        }
        .card-body{
            height: 40px;
            display: flex;
            border: 1px solid #adb5bd;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 1.25rem;  /* Optional: for adding some space inside the card-header */
            overflow: hidden;  /* Add this line to hide the overflow content */
        }
        .card-header h5 {
            margin: 0;  /* Optional: to remove the default margin of the h5 element */
        }
        .btn.btn-link:hover {
            cursor: pointer !important;
            text-decoration: underline !important;
            border: 1px solid #80bdff !important;
            border-radius: 5px !important;
            color: #005cbf !important;
            margin-right: auto;  /* It pushes the link to the extreme right */
        }
        .btn.btn-sm.btn-primary{
            background: #007bff;
            color: white;
            border-radius: 5px !important;
            border: 1px solid #80bdff !important;
            height: 30px;
            cursor: pointer;
        }
        .btn.btn-sm.btn-danger{
            background: #dc3545;
            color: white;
            border-radius: 5px !important;
            border: 1px solid red !important;
            height: 30px;
            cursor: pointer;
        }
        .btn.btn-sm.btn-success{
            background: #28a745;
            color: white;
            border-radius: 5px !important;
            border: 1px solid green !important;
            height: 30px;
            cursor: pointer;
        }

        .collapse {
            height: 0;
            transition: height 0.5s ease-in-out;
            overflow: hidden;
        }




    @keyframes textBlink {
    0%, 100% {
        color: black;
    }
    50% {
        color: white;
    }
}

.blinkText {
    animation: textBlink 1s ease-in-out infinite;
}

    @keyframes highlight {
    0% {
        background-color: initial;
    }
    50% {
        background-color: #ffffff;
    }
    100% {
        background-color: initial;
    }
}
.highlight {
    animation: highlight 2s ease-in-out infinite;
}

  @keyframes highlightt {
    0% {
        background-color: initial;
    }
    50% {
        background-color: #000000;

    }
    100% {
        background-color: initial;
    }
}
.highlightt {
    animation: highlightt 2s ease-in-out infinite;
}

    .close-button {
    margin-left: 5px;
    color: red;
    cursor: pointer;
}

    .suggestions-container {
    position: absolute;

    left: 40px;
    width: 270px;
    top: 100%; /* Place it below the search box */
     max-height: 150px; /* Adjust as per your preference */
    overflow-y: auto; /* Add scrollbar if content is too much */
    border: 1px solid #ccc;
    background-color: white;
    z-index: 99; /* Make it appear on top of other elements */
}

.suggestion-item {
    padding: 10px;
    cursor: pointer;
}

.suggestion-item:hover {
    background-color: #eee;
}



        .node-menu {
            display: none;
            position: absolute;
            border: 1px solid black;
            background-color: white;
        }

        #contentDiv {
            box-sizing: border-box;
        }

        /* Cursor styles */
        .node {
            cursor: pointer;
        }
       .node circle {
            fill: #e5e5e5;
        }

        .node circle.chatgpt {
        }

        .node circle.用户 {
            fill: #1E90FF;
        }


        .node.descendant-dragging circle {
            fill: #b0e0e6 !important;
        }

        .node.selectedNode circle {
            fill: red !important;
        }

        .link.highlighted {
            /*stroke: yellow;*/
            stroke: #808080;
            stroke-width: 4px;
        }

        .link.descendant-highlighted {
            stroke: #d3d3d3; /* 选择你想要的颜色 */
            stroke-width: 4px;
        }


        .content-text {
            white-space: pre-line;
        }

        /* Menu styles */
        .menu {
            opacity: 0;
            transition: opacity 300ms, transform 300ms;
            transform: translateX(100%); /* Start from the right */
            border: none; /* Remove border */
        }

        .menu.show {
            opacity: 1;
            transform: translateX(0); /* Move to its original position */
        }

        #commentForm {
            width: 300px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        #commentForm label, #commentForm textarea, #commentForm button {
            display: block;
            width: 100%;
            margin-bottom: 10px;
        }

        #commentForm textarea {
            resize: none; /* 禁止调整大小 */
        }

        .commentHoverEffect {
    transition: all 0.3s ease-in-out;
}

.commentHoverEffect:hover {
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

        /*这是显示对话内容的注释样式*/
        .comment-text {
            color: #ff5555;
            font-style: italic;
            margin-right: 10px;
            display: block;
            font-weight: bold;
            border-bottom: 2px dashed #ff5555;
        }

        /* SVG background */
        #thumbnailSvg {
            /*background-color: rgba(128, 128, 128, 0.4); !* Gray with 0.4 opacity *!*/
            /*background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);*/
            background-image: linear-gradient(to top, rgba(250, 208, 196, 1) 0%, rgba(255, 209, 255, 0.9) 100%);
           /*background-image: linear-gradient(to top, rgba(220,220,220, 1) 0%, rgba(220,220,220, 1) 100%);*/


        }
         #mainSvg {
            /*background-color: rgba(128, 128, 128, 0.4); !* Gray with 0.4 opacity *!*/
            /*background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);*/
            /*background-image: linear-gradient(to top, rgba(220,220,220, 0.2) 0%, rgba(220,220,220, 0.2) 100%);*/
          background-image: linear-gradient(to top, rgba(250, 208, 196, 0.2) 0%, rgba(255, 209, 255, 0.2) 100%);

        }

        #search-container {
            top: 20px;
            left: 20px;
            display: flex;
            align-items: center;
            position: fixed;
            width: 50px;
            height: 40px;
            color: black;
            /*overflow: hidden;*/

            background: transparent;
            /*flex-wrap: wrap;*/
            /*z-index: 10000;*/

        }

        #search-icon {
            width: 40px;
            height: 40px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px; /* adjust as needed */
            background: transparent;
            /*background-color: #f1f1f1;*/
        }

        #search-box {

            margin-top: 10px;
            width: 300px;
            height: 40px;
            /*background-color: #f1f1f1;*/
            border: none;
            padding: 0 10px;
            outline: none;
            background: transparent;
            opacity: 0;
            pointer-events: none;
            border-radius: 6px;
        }

        #search-btn {
            padding: 5px 15px;
            margin-left: 10px;
            display: none;
        }

        #search-history {
            position: absolute;
            top: 50px;
            left: 0;
            /*display: none;*/
            opacity: 0; /* 设置为 0 使其默认隐藏 */
            /*display: ;*/
            display: flex;
            flex-direction: row; /* 横向排列 */
            flex-wrap: wrap; /* 当空间不足时换行 */
            width: 0px;
            min-height: 0px; /* instead of height: 0px; */
            align-content: flex-start;
            height: 20px;
            max-height: 200px;
            /*align-items: center;  !* 确保每行的内容垂直居中对齐 *!*/
            overflow-y: scroll;
            overflow-x: hidden;
            padding: 10px; /* 为了避免内容紧贴边缘，给予一些内边距 */
            /*z-index: 10001;*/
            /*border-radius: 6px;*/
        }

        #search-results-count {
            box-sizing: border-box;
            line-height: 26px; /* 重置行高 */
            margin: 0;
            padding: 3px 6px;
            display: flex;
            justify-content: center; /* 水平居中 */
            align-items: center; /* 垂直居中 */
        }

        .history-item {
            display: flex;
            align-items: center;
            width: auto; /* 根据内容自动调整宽度 */
            max-width: 150px; /* 设置最大宽度 */
            max-height: 30px;
            overflow: hidden;
            background-color: #f5f5f5;
            border-radius: 15px;
            padding: 5px 10px;
            margin-top: 10px;
            margin-right: 10px; /* 每个 history-item 之间的间距 */
            /*gap: 10px;*/

        }

        .history-text {
            /*max-width: 100px;  !* 设置最大宽度 *!*/
            flex-shrink: 1;
            min-width: 0;
            white-space: nowrap; /* 防止文本换行 */
            overflow: hidden;
            text-overflow: ellipsis; /* 使用省略号 (...) 表示被裁切的文本 */
            /*padding: 5px 10px;*/

        }

        .history-delete {
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            transition: background-color 0.3s;
            margin-left: auto; /* 这会将按钮推到其父元素的右边 */
        }

        .history-delete:hover {
            background-color: rgba(200, 0, 0, 0.1);
        }


        #settingsDiv, .actionDiv {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            z-index: 1000;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 50%; /* 让div成为圆形 */
            /*box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);*/
            box-shadow: none;
            transition: background-color 0.3s; /* 平滑过渡效果 */
            user-select: none;

        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        #settingsDiv {
            animation: spin 4s linear infinite;
        }

        #settingsDiv {
            right: 10px;
            bottom: 10px;
            color: rebeccapurple; /* 或你想要的任何颜色 */
            cursor: pointer;
            display: flex;
            justify-content: center; /* 水平居中 */
            align-items: center; /* 垂直居中 */
        }

        .actionDiv {
            display: none; /* 默认隐藏 */
            right: 10px; /* 你可以根据需要调整这些值来确定div的位置 */
            cursor: pointer;
            color: deepskyblue; /* 或你想要的任何颜色 */
            font-size: 1.5em;
        }

        #plusDiv {
            bottom: 110px;
        }

        #minusDiv {
            bottom: 60px;
        }

        #thumbNailDiv {
            bottom: 160px;
        }

        #refreshTree {
            bottom: 210px;
        }

        #undoDiv {
            bottom: 260px;
        }

        #redoDiv {
            bottom: 310px;
        }

        #deleteDiv {
            bottom: 360px;
        }

        #feedbackDiv {
            bottom: 410px;
        }


        #settingsDiv:hover, .actionDiv:hover {
            background-color: rgba(200, 200, 255, 0.9); /* 悬停时的背景色 */
        }
    `);

  const getLang = function () {
    let lang =
      `{
   "ar": {
        "chatTreeRunning": "🥳🌳ChatTree🌳في التشغيل!🎉",
        "updateCurrentConversationTree": "🌈 تحديث شجرة المحادثة الحالية 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 تعديل لون الخلفية والشفافية 🎨",
        "toggleConversationTree": "🌳 عرض/إخفاء شجرة المحادثة 🌳",
        "noDatabaseAndCreationFailed": "لا يوجد قاعدة بيانات، ولم يتم الإنشاء بنجاح! الخروج من البرنامج النصي!",
        "mismatchedLink": "الرابط غير متطابق، يرجى تحديث الصفحة!",
        "startUpdatingConversationTree": "بدء تحديث شجرة المحادثة",
        "selectedItem": "لقد اخترت {item}",
        "successSavingChanges": "تم حفظ التغييرات بنجاح!",
        "codeCopiedToClipboard": "تم نسخ الكود إلى الحافظة!",
        "contentCopied": "تم نسخ المحتوى!",
        "emptyCommentPrompt": "التعليق فارغ. هل تريد ضبط التعليق على \\"فارغ\\"؟",
        "confirmDeleteLinkData": "تم التحقق من الرابط كـ {item}! هل تريد حذف بيانات هذا الرابط؟ سيتم حذف جميع محتوى المحادثة والتعليقات!",
        "confirmCurrentURL": "تم التحقق من الرابط كـ {item}! هل أنت متأكد؟",
        "commentSetToEmpty": "تم تعيين التعليق على \\"فارغ\\"",
        "enterCommentFirst": "الرجاء إدخال التعليق أولا",
        "commentSaved": "تم حفظ التعليق",
        "conversationDataDeleted": "تم حذف بيانات المحادثة بنجاح",
        "executeSearchWithQuery": "تنفيذ البحث: {item}",
        "searchPlaceholder": "أدخل كلمات البحث...",
        "searchButton": "بحث",
        "searchInContent": "في محتوى المحادثة",
        "searchInComments": "في التعليقات",
        "searchInBoth": "في المحتوى والتعليقات",
        "goToPrevious": "الانتقال إلى السابق",
        "goToNext": "الانتقال إلى التالي",
        "numberOfMatches": "{matches} نتائج",
        "nodeDetails": "تفاصيل",
        "enterComment": "الرجاء إدخال تعليق",
        "userCommentSave": "حفظ",
        "userCommentCancel": "إلغاء",
        "userCommentClear": "مسح",
        "openAdminPanel": "لوحة الإدارة",
        "allCategoriesFilter": "جميع الفئات",
        "conversationTitle": "عنوان",
        "actionOptions": "الإجراءات",
        "conversationCategory": "الفئة",
        "conversationTags": "العلامات"
    },
    "bg": {
        "chatTreeRunning": "🥳🌳ChatTree🌳работи!🎉",
        "updateCurrentConversationTree": "🌈 Актуализация на текущото дърво на разговори 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Регулиране на цвета на фона и прозрачността 🎨",
        "toggleConversationTree": "🌳 Показване/скриване на дървото на разговори 🌳",
        "noDatabaseAndCreationFailed": "Няма база данни и създаването не бе успешно! Скриптът излиза!",
        "mismatchedLink": "Линкът не съответства, моля, опреснете страницата!",
        "startUpdatingConversationTree": "Започнете актуализация на дървото на разговори",
        "selectedItem": "Избрахте {item}",
        "successSavingChanges": "Промените са запазени успешно!",
        "codeCopiedToClipboard": "Кодът е копиран в клипборда!",
        "contentCopied": "Съдържанието е копирано!",
        "emptyCommentPrompt": "Коментарът е празен. Искате ли да зададете коментар като \\"празен\\"?",
        "confirmDeleteLinkData": "Линкът е проверен като {item}! Сигурни ли сте, че искате да изтриете информацията за този линк? Всички съдържания на разговори и коментари ще бъдат изтрити!",
        "confirmCurrentURL": "Линкът е проверен като {item}! Сигурни ли сте?",
        "commentSetToEmpty": "Коментарът е зададен като \\"празен\\"",
        "enterCommentFirst": "Моля, първо въведете коментар",
        "commentSaved": "Коментарът е запазен",
        "conversationDataDeleted": "Данните за разговора са изтрити успешно",
        "executeSearchWithQuery": "Изпълнение на търсене: {item}",
        "searchPlaceholder": "Въведете ключови думи за търсене...",
        "searchButton": "Търсене",
        "searchInContent": "В съдържанието на разговора",
        "searchInComments": "В коментарите",
        "searchInBoth": "В съдържание и коментари",
        "goToPrevious": "Към предишния",
        "goToNext": "Към следващия",
        "numberOfMatches": "{matches} съвпадения",
        "nodeDetails": "Подробности",
        "enterComment": "Моля, въведете коментар",
        "userCommentSave": "Запази",
        "userCommentCancel": "Отказ",
        "userCommentClear": "Изчисти",
        "openAdminPanel": "Админ панел",
        "allCategoriesFilter": "Всички категории",
        "conversationTitle": "Заглавие",
        "actionOptions": "Действия",
        "conversationCategory": "Категория",
        "conversationTags": "Етикети"
    },
    "cs": {
        "chatTreeRunning": "🥳🌳ChatTree🌳běží!🎉",
        "updateCurrentConversationTree": "🌈 Aktualizovat aktuální strom konverzace 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Upravit barvu pozadí a průhlednost 🎨",
        "toggleConversationTree": "🌳 Zobrazit/skrýt strom konverzace 🌳",
        "noDatabaseAndCreationFailed": "Není databáze a vytvoření se nezdařilo! Skript se ukončuje!",
        "mismatchedLink": "Odkaz nesouzní, obnovte stránku!",
        "startUpdatingConversationTree": "Začít aktualizovat strom konverzace",
        "selectedItem": "Vybrali jste {item}",
        "successSavingChanges": "Změny byly úspěšně uloženy!",
        "codeCopiedToClipboard": "Kód byl zkopírován do schránky!",
        "contentCopied": "Obsah byl zkopírován!",
        "emptyCommentPrompt": "Komentář je prázdný. Chcete nastavit komentář na \\"prázdný\\"?",
        "confirmDeleteLinkData": "Odkaz byl ověřen jako {item}! Opravdu chcete smazat informace tohoto odkazu? Veškerý obsah konverzace a komentáře budou smazány!",
        "confirmCurrentURL": "Odkaz byl ověřen jako {item}! Potvrzujete?",
        "commentSetToEmpty": "Komentář byl nastaven na \\"prázdný\\"",
        "enterCommentFirst": "Nejprve zadejte komentář",
        "commentSaved": "Komentář byl uložen",
        "conversationDataDeleted": "Data konverzace byla úspěšně smazána",
        "executeSearchWithQuery": "Spustit vyhledávání: {item}",
        "searchPlaceholder": "Zadejte klíčová slova pro vyhledávání...",
        "searchButton": "Hledat",
        "searchInContent": "Ve obsahu konverzace",
        "searchInComments": "V komentářích",
        "searchInBoth": "V obsahu i komentářích",
        "goToPrevious": "Jít na předchozí",
        "goToNext": "Jít na další",
        "numberOfMatches": "{matches} shod",
        "nodeDetails": "Detaily",
        "enterComment": "Zadejte komentář",
        "userCommentSave": "Uložit",
        "userCommentCancel": "Zrušit",
        "userCommentClear": "Vymazat",
        "openAdminPanel": "Administrační panel",
        "allCategoriesFilter": "Všechny kategorie",
        "conversationTitle": "Název",
        "actionOptions": "Akce",
        "conversationCategory": "Kategorie",
        "conversationTags": "Tagy"
    },
    "da": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 kører!🎉",
        "updateCurrentConversationTree": "🌈 Opdater nuværende samtaletræ 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Juster baggrundsfarve og gennemsigtighed 🎨",
        "toggleConversationTree": "🌳 Vis/skjul samtaletræ 🌳",
        "noDatabaseAndCreationFailed": "Ingen database, og oprettelsen mislykkedes! Scriptet afslutter!",
        "mismatchedLink": "Link matcher ikke, opdater siden!",
        "startUpdatingConversationTree": "Begynder at opdatere samtaletræ",
        "selectedItem": "Du valgte {item}",
        "successSavingChanges": "Ændringer gemt succesfuldt!",
        "codeCopiedToClipboard": "Kode kopieret til udklipsholder!",
        "contentCopied": "Indhold kopieret!",
        "emptyCommentPrompt": "Kommentaren er tom. Vil du sætte kommentaren til \\"tom\\"?",
        "confirmDeleteLinkData": "Linket er {item}! Er du sikker på, at du vil slette disse linkdata? Alle samtaler og kommentarer vil blive slettet!",
        "confirmCurrentURL": "Linket er {item}! Er du sikker?",
        "commentSetToEmpty": "Kommentar sat til \\"tom\\"",
        "enterCommentFirst": "Indtast kommentar først",
        "commentSaved": "Kommentar gemt",
        "conversationDataDeleted": "Samtaledata slettet succesfuldt",
        "executeSearchWithQuery": "Udfør søgning: {item}",
        "searchPlaceholder": "Indtast søgeord...",
        "searchButton": "Søg",
        "searchInContent": "I samtaleindholdet",
        "searchInComments": "I kommentarer",
        "searchInBoth": "Både i indhold og kommentarer",
        "goToPrevious": "Gå til den forrige",
        "goToNext": "Gå til den næste",
        "numberOfMatches": "{matches} match",
        "nodeDetails": "Detaljer",
        "enterComment": "Indtast kommentar",
        "userCommentSave": "Gem",
        "userCommentCancel": "Annuller",
        "userCommentClear": "Ryd",
        "openAdminPanel": "Admin panel",
        "allCategoriesFilter": "Alle kategorier",
        "conversationTitle": "Titel",
        "actionOptions": "Handlinger",
        "conversationCategory": "Kategori",
        "conversationTags": "Tags"
    },
    "de": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 läuft!🎉",
        "updateCurrentConversationTree": "🌈 Aktualisiere aktuellen Konversationsbaum 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Hintergrundfarbe und Transparenz anpassen 🎨",
        "toggleConversationTree": "🌳 Konversationsbaum anzeigen/verbergen 🌳",
        "noDatabaseAndCreationFailed": "Keine Datenbank und Erstellung fehlgeschlagen! Skript beendet!",
        "mismatchedLink": "Link stimmt nicht überein, bitte aktualisieren Sie die Seite!",
        "startUpdatingConversationTree": "Beginne mit der Aktualisierung des Konversationsbaums",
        "selectedItem": "Sie haben {item} ausgewählt",
        "successSavingChanges": "Änderungen erfolgreich gespeichert!",
        "codeCopiedToClipboard": "Code wurde in die Zwischenablage kopiert!",
        "contentCopied": "Inhalt kopiert!",
        "emptyCommentPrompt": "Der Kommentar ist leer. Möchten Sie den Kommentar auf \\"leer\\" setzen?",
        "confirmDeleteLinkData": "Der erkannte Link ist {item}! Möchten Sie wirklich die Informationen zu diesem Link löschen? Alle Gesprächsinhalte und Kommentare werden gelöscht!",
        "confirmCurrentURL": "Der erkannte Link ist {item}! Sicher?",
        "commentSetToEmpty": "Kommentar auf \\"leer\\" gesetzt",
        "enterCommentFirst": "Bitte geben Sie zuerst einen Kommentar ein",
        "commentSaved": "Kommentar gespeichert",
        "conversationDataDeleted": "Konversationsdaten erfolgreich gelöscht",
        "executeSearchWithQuery": "Suche ausführen: {item}",
        "searchPlaceholder": "Suchbegriffe eingeben...",
        "searchButton": "Suchen",
        "searchInContent": "Im Gesprächsinhalt",
        "searchInComments": "In den Kommentaren",
        "searchInBoth": "In Inhalt und Kommentaren",
        "goToPrevious": "Zum vorherigen gehen",
        "goToNext": "Zum nächsten gehen",
        "numberOfMatches": "{matches} Übereinstimmungen",
        "nodeDetails": "Details",
        "enterComment": "Bitte Kommentar eingeben",
        "userCommentSave": "Speichern",
        "userCommentCancel": "Abbrechen",
        "userCommentClear": "Löschen",
        "openAdminPanel": "Admin-Panel",
        "allCategoriesFilter": "Alle Kategorien",
        "conversationTitle": "Titel",
        "actionOptions": "Optionen",
        "conversationCategory": "Kategorie",
        "conversationTags": "Tags"
    },
    "el": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 Είναι σε λειτουργία!🎉",
        "updateCurrentConversationTree": "🌈 Ενημέρωση του τρέχοντος δέντρου συνομιλίας 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Ρύθμιση του χρώματος φόντου και της διαφάνειας 🎨",
        "toggleConversationTree": "🌳 Εμφάνιση/Απόκρυψη δέντρου συνομιλίας 🌳",
        "noDatabaseAndCreationFailed": "Δεν υπάρχει βάση δεδομένων και η δημιουργία απέτυχε! Το σενάριο τερματίζεται!",
        "mismatchedLink": "Ο σύνδεσμος δεν ταιριάζει, παρακαλώ ανανεώστε τη σελίδα!",
        "startUpdatingConversationTree": "Ξεκινώντας την ενημέρωση του δέντρου συνομιλίας",
        "selectedItem": "Επιλέξατε {item}",
        "successSavingChanges": "Οι αλλαγές αποθηκεύτηκαν επιτυχώς!",
        "codeCopiedToClipboard": "Ο κώδικας αντιγράφηκε στο πρόχειρο!",
        "contentCopied": "Το περιεχόμενο αντιγράφηκε!",
        "emptyCommentPrompt": "Το σχόλιο είναι κενό. Θέλετε να ορίσετε το σχόλιο ως \\"κενό\\";",
        "confirmDeleteLinkData": "Ο σύνδεσμος που εντοπίστηκε είναι {item}! Είστε σίγουροι ότι θέλετε να διαγράψετε αυτά τα δεδομένα συνδέσμου; Όλο το περιεχόμενο της συζήτησης και τα σχόλια θα διαγραφούν!",
        "confirmCurrentURL": "Ο σύνδεσμος που εντοπίστηκε είναι {item}! Είστε σίγουροι;",
        "commentSetToEmpty": "Το σχόλιο ορίστηκε ως \\"κενό\\"",
        "enterCommentFirst": "Παρακαλώ εισάγετε πρώτα ένα σχόλιο",
        "commentSaved": "Το σχόλιο αποθηκεύτηκε",
        "conversationDataDeleted": "Τα δεδομένα συνομιλίας διαγράφηκαν επιτυχώς",
        "executeSearchWithQuery": "Εκτέλεση αναζήτησης: {item}",
        "searchPlaceholder": "Εισάγετε λέξεις κλειδιά αναζήτησης...",
        "searchButton": "Αναζήτηση",
        "searchInContent": "Στο περιεχόμενο της συνομιλίας",
        "searchInComments": "Στα σχόλια",
        "searchInBoth": "Τόσο στο περιεχόμενο όσο και στα σχόλια",
        "goToPrevious": "Πήγαινε στο προηγούμενο",
        "goToNext": "Πήγαινε στο επόμενο",
        "numberOfMatches": "{matches} αντιστοιχίες",
        "nodeDetails": "Λεπτομέρειες",
        "enterComment": "Πληκτρολογήστε σχόλιο",
        "userCommentSave": "Αποθήκευση",
        "userCommentCancel": "Ακύρωση",
        "userCommentClear": "Καθαρισμός",
        "openAdminPanel": "Πίνακας Διαχείρισης",
        "allCategoriesFilter": "Όλες οι Κατηγορίες",
        "conversationTitle": "Τίτλος",
        "actionOptions": "Ενέργειες",
        "conversationCategory": "Κατηγορία",
        "conversationTags": "Ετικέτες"
    },
    "en": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 is Running!🎉",
        "updateCurrentConversationTree": "🌈 Update Current Conversation Tree 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Adjust Background Color and Opacity 🎨",
        "toggleConversationTree": "🌳 Show/Hide Conversation Tree 🌳",
        "noDatabaseAndCreationFailed": "No database, and creation failed! The script is terminating.",
        "mismatchedLink": "Link does not match, please refresh the page!",
        "startUpdatingConversationTree": "Starting to update the conversation tree",
        "selectedItem": "You selected {item}",
        "successSavingChanges": "Changes Saved Successfully!",
        "codeCopiedToClipboard": "Code Copied to Clipboard!",
        "contentCopied": "Content Copied!",
        "emptyCommentPrompt": "The comment is empty. Do you want to set the comment to \\"empty\\"?",
        "confirmDeleteLinkData": "Detected link is {item}! Are you sure you want to delete this link's information? All conversation content and comments will be deleted!",
        "confirmCurrentURL": "Detected link is {item}! Are you sure?",
        "commentSetToEmpty": "Comment set to \\"empty\\"",
        "enterCommentFirst": "Please enter a comment first",
        "commentSaved": "Comment Saved",
        "conversationDataDeleted": "Conversation Data Successfully Deleted",
        "executeSearchWithQuery": "Executing Search: {item}",
        "searchPlaceholder": "Enter search keywords...",
        "searchButton": "Search",
        "searchInContent": "Conversation Content",
        "searchInComments": "User Comments",
        "searchInBoth": "Content & Comments",
        "goToPrevious": "Go to Previous",
        "goToNext": "Go to Next",
        "numberOfMatches": "{matches} matches found",
        "nodeDetails": "Details",
        "enterComment": "Please Enter Comment",
        "userCommentSave": "Save",
        "userCommentCancel": "Cancel",
        "userCommentClear": "Clear",
        "openAdminPanel": "Admin Panel",
        "allCategoriesFilter": "All Categories",
        "conversationTitle": "Title",
        "actionOptions": "Actions",
        "conversationCategory": "Category",
        "conversationTags": "Tags"
    },
    "eo": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 funkcias!🎉",
        "updateCurrentConversationTree": "🌈 Ĝisdatigi la aktivan konversacian arbon 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Agordi fondon koloron kaj opakecon 🎨",
        "toggleConversationTree": "🌳 Montri/Kaŝi konversacian arbon 🌳",
        "noDatabaseAndCreationFailed": "Neniu datumbazo, kaj ne sukcesis krei! Skripto eliras!",
        "mismatchedLink": "Ligilo ne kongruas, bonvolu refreŝigi la paĝon!",
        "startUpdatingConversationTree": "Komenci ĝisdatigi la konversacian arbon",
        "selectedItem": "Vi selektis {item}",
        "successSavingChanges": "Ŝanĝoj sukcese konservitaj!",
        "codeCopiedToClipboard": "Kodo estis kopii al tondejo!",
        "contentCopied": "Enhavo estis kopii!",
        "emptyCommentPrompt": "Komento estas malplena. Ĉu vi volas agordi komenton al \\"malplena\\"?",
        "confirmDeleteLinkData": "Detektis ligilon {item}! Ĉu vi certas, ke vi volas forigi ĉi tiun ligilon informon? Ĉiuj konversaciaj enhavoj kaj komentoj estos forigitaj!",
        "confirmCurrentURL": "Detektis ligilon {item}! Ĉu vi certas?",
        "commentSetToEmpty": "Komento estis agordita al \\"malplena\\"",
        "enterCommentFirst": "Bonvolu unue enigi komenton",
        "commentSaved": "Komento konservita",
        "conversationDataDeleted": "Konversaciaj datenoj sukcese forigitaj",
        "executeSearchWithQuery": "Efektivi serĉon: {item}",
        "searchPlaceholder": "Enmetu serĉajn ŝlosilvortojn...",
        "searchButton": "Serĉi",
        "searchInContent": "Konversacia enhavo",
        "searchInComments": "Komentoj de uzantoj",
        "searchInBoth": "Enhavo & Komentoj",
        "goToPrevious": "Iru al antaŭa",
        "goToNext": "Iru al sekvanta",
        "numberOfMatches": "{matches} kongruajn trovis",
        "nodeDetails": "Detaloj",
        "enterComment": "Bonvolu Enmeti Komenton",
        "userCommentSave": "Konservi",
        "userCommentCancel": "Nuligi",
        "userCommentClear": "Forigi",
        "openAdminPanel": "Malfermi Adminan Panelon",
        "allCategoriesFilter": "Ĉiuj Kategorioj",
        "conversationTitle": "Titolo",
        "actionOptions": "Agadoj",
        "conversationCategory": "Kategorio",
        "conversationTags": "Etikedoj"
    },
    "es": {
        "chatTreeRunning": "🥳🌳¡ChatTree🌳 en funcionamiento!🎉",
        "updateCurrentConversationTree": "🌈 Actualizar el árbol de conversación actual 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Ajustar color de fondo y opacidad 🎨",
        "toggleConversationTree": "🌳 Mostrar/Ocultar árbol de conversación 🌳",
        "noDatabaseAndCreationFailed": "¡No hay base de datos y no se pudo crear! ¡Saliendo del script!",
        "mismatchedLink": "¡El enlace no coincide, por favor actualiza la página!",
        "startUpdatingConversationTree": "Comenzar a actualizar el árbol de conversación",
        "selectedItem": "Seleccionaste {item}",
        "successSavingChanges": "¡Cambios guardados con éxito!",
        "codeCopiedToClipboard": "¡Código copiado al portapapeles!",
        "contentCopied": "¡Contenido copiado!",
        "emptyCommentPrompt": "El comentario está vacío. ¿Quieres establecer el comentario como \\"vacío\\"?",
        "confirmDeleteLinkData": "¡Se detectó el enlace {item}! ¿Estás seguro de que quieres eliminar la información de este enlace? ¡Toda la conversación y los comentarios se eliminarán!",
        "confirmCurrentURL": "¡Se detectó el enlace {item}! ¿Estás seguro?",
        "commentSetToEmpty": "Comentario establecido como \\"vacío\\"",
        "enterCommentFirst": "Por favor, ingresa un comentario primero",
        "commentSaved": "Comentario guardado",
        "conversationDataDeleted": "Datos de la conversación eliminados con éxito",
        "executeSearchWithQuery": "Ejecutar búsqueda: {item}",
        "searchPlaceholder": "Ingrese palabras clave para buscar...",
        "searchButton": "Buscar",
        "searchInContent": "Contenido de la conversación",
        "searchInComments": "Comentarios de usuarios",
        "searchInBoth": "Contenido y comentarios",
        "goToPrevious": "Ir al anterior",
        "goToNext": "Ir al siguiente",
        "numberOfMatches": "{matches} coincidencias encontradas",
        "nodeDetails": "Detalles",
        "enterComment": "Por Favor Introduce un Comentario",
        "userCommentSave": "Guardar",
        "userCommentCancel": "Cancelar",
        "userCommentClear": "Borrar",
        "openAdminPanel": "Abrir Panel de Administración",
        "allCategoriesFilter": "Todas las Categorías",
        "conversationTitle": "Título",
        "actionOptions": "Opciones",
        "conversationCategory": "Categoría",
        "conversationTags": "Etiquetas"
    },
    "fi": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 on käynnissä!🎉",
        "updateCurrentConversationTree": "🌈 Päivitä nykyinen keskustelupuu 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Säädä taustavärin ja läpinäkyvyyden 🎨",
        "toggleConversationTree": "🌳 Näytä/Piilota keskustelupuu 🌳",
        "noDatabaseAndCreationFailed": "Tietokantaa ei ole, eikä luonti onnistunut! Skripti päättyy!",
        "mismatchedLink": "Linkki ei täsmää, päivitä sivu!",
        "startUpdatingConversationTree": "Aloita keskustelupuun päivittäminen",
        "selectedItem": "Valitsit kohteen {item}",
        "successSavingChanges": "Muutosten tallennus onnistui!",
        "codeCopiedToClipboard": "Koodi kopioitu leikepöydälle!",
        "contentCopied": "Sisältö kopioitu!",
        "emptyCommentPrompt": "Kommentti on tyhjä. Haluatko asettaa kommentin \\"tyhjäksi\\"?",
        "confirmDeleteLinkData": "Linkki {item} havaittu! Haluatko varmasti poistaa tämän linkin tiedot? Kaikki keskustelut ja kommentit poistetaan!",
        "confirmCurrentURL": "Linkki {item} havaittu! Oletko varma?",
        "commentSetToEmpty": "Kommentti asetettu \\"tyhjäksi\\"",
        "enterCommentFirst": "Syötä kommentti ensin",
        "commentSaved": "Kommentti tallennettu",
        "conversationDataDeleted": "Keskustelutiedot poistettu onnistuneesti",
        "executeSearchWithQuery": "Suorita haku: {item}",
        "searchPlaceholder": "Anna hakusanat...",
        "searchButton": "Hae",
        "searchInContent": "Keskustelun sisältö",
        "searchInComments": "Käyttäjien kommentit",
        "searchInBoth": "Sisältö ja kommentit",
        "goToPrevious": "Mene edelliseen",
        "goToNext": "Mene seuraavaan",
        "numberOfMatches": "{matches} osumaa löydetty",
        "nodeDetails": "Tiedot",
        "enterComment": "Ole Hyvä ja Kirjoita Kommentti",
        "userCommentSave": "Tallenna",
        "userCommentCancel": "Peruuta",
        "userCommentClear": "Tyhjennä",
        "openAdminPanel": "Avaa Hallintapaneeli",
        "allCategoriesFilter": "Kaikki Kategoriat",
        "conversationTitle": "Otsikko",
        "actionOptions": "Toiminnot",
        "conversationCategory": "Kategoria",
        "conversationTags": "Tagit"
    },
    "fr": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 est en cours d'exécution !🎉",
        "updateCurrentConversationTree": "🌈 Mettre à jour l'arbre de conversation actuel 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Ajuster la couleur de fond et l'opacité 🎨",
        "toggleConversationTree": "🌳 Afficher/Masquer l'arbre de conversation 🌳",
        "noDatabaseAndCreationFailed": "Pas de base de données et la création a échoué ! Sortie du script !",
        "mismatchedLink": "Le lien ne correspond pas, veuillez rafraîchir la page !",
        "startUpdatingConversationTree": "Commencer à mettre à jour l'arbre de conversation",
        "selectedItem": "Vous avez sélectionné {item}",
        "successSavingChanges": "Modifications enregistrées avec succès !",
        "codeCopiedToClipboard": "Le code a été copié dans le presse-papiers !",
        "contentCopied": "Contenu copié !",
        "emptyCommentPrompt": "Le commentaire est vide. Voulez-vous définir le commentaire comme \\"vide\\" ?",
        "confirmDeleteLinkData": "Le lien {item} a été détecté ! Êtes-vous sûr de vouloir supprimer les informations de ce lien ? Toutes les conversations et les commentaires seront supprimés !",
        "confirmCurrentURL": "Le lien {item} a été détecté ! Êtes-vous sûr ?",
        "commentSetToEmpty": "Commentaire défini comme \\"vide\\"",
        "enterCommentFirst": "Veuillez d'abord entrer un commentaire",
        "commentSaved": "Commentaire enregistré",
        "conversationDataDeleted": "Données de conversation supprimées avec succès",
        "executeSearchWithQuery": "Effectuer une recherche : {item}",
        "searchPlaceholder": "Entrez des mots-clés pour rechercher...",
        "searchButton": "Rechercher",
        "searchInContent": "Contenu de la conversation",
        "searchInComments": "Commentaires des utilisateurs",
        "searchInBoth": "Contenu et commentaires",
        "goToPrevious": "Aller au précédent",
        "goToNext": "Aller au suivant",
        "numberOfMatches": "{matches} correspondances trouvées",
        "nodeDetails": "Détails",
        "enterComment": "Veuillez Entrer un Commentaire",
        "userCommentSave": "Enregistrer",
        "userCommentCancel": "Annuler",
        "userCommentClear": "Effacer",
        "openAdminPanel": "Ouvrir le Panneau d'Administration",
        "allCategoriesFilter": "Toutes les Catégories",
        "conversationTitle": "Titre",
        "actionOptions": "Options",
        "conversationCategory": "Catégorie",
        "conversationTags": "Étiquettes"
    },
    "fr-CA": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 est en marche !🎉",
        "updateCurrentConversationTree": "🌈 Mettre à jour l'arbre de conversation actuel 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Ajustez la couleur de fond et l'opacité 🎨",
        "toggleConversationTree": "🌳 Afficher/Masquer l'arbre de conversation 🌳",
        "noDatabaseAndCreationFailed": "Pas de base de données et la création a échoué ! Le script se termine !",
        "mismatchedLink": "Le lien ne correspond pas, veuillez rafraîchir la page !",
        "startUpdatingConversationTree": "Commencer la mise à jour de l'arbre de conversation",
        "selectedItem": "Vous avez sélectionné {item}",
        "successSavingChanges": "Modifications enregistrées avec succès !",
        "codeCopiedToClipboard": "Le code a été copié dans le presse-papiers !",
        "contentCopied": "Contenu copié !",
        "emptyCommentPrompt": "Le commentaire est vide. Souhaitez-vous définir le commentaire comme \\"vide\\" ?",
        "confirmDeleteLinkData": "Le lien {item} a été détecté ! Êtes-vous sûr de vouloir supprimer les données de ce lien ? Toutes les conversations et les commentaires seront supprimés !",
        "confirmCurrentURL": "Le lien {item} a été détecté ! Êtes-vous sûr ?",
        "commentSetToEmpty": "Commentaire défini comme \\"vide\\"",
        "enterCommentFirst": "Veuillez d'abord entrer un commentaire",
        "commentSaved": "Commentaire sauvegardé",
        "conversationDataDeleted": "Données de conversation supprimées avec succès",
        "executeSearchWithQuery": "Exécuter la recherche : {item}",
        "searchPlaceholder": "Entrez des mots-clés pour chercher...",
        "searchButton": "Rechercher",
        "searchInContent": "Contenu de la conversation",
        "searchInComments": "Commentaires des utilisateurs",
        "searchInBoth": "Contenu et commentaires",
        "goToPrevious": "Aller au précédent",
        "goToNext": "Aller au suivant",
        "numberOfMatches": "{matches} correspondances trouvées",
        "nodeDetails": "Détails",
        "enterComment": "Veuillez Entrer un Commentaire",
        "userCommentSave": "Enregistrer",
        "userCommentCancel": "Annuler",
        "userCommentClear": "Effacer",
        "openAdminPanel": "Ouvrir le Panneau Administratif",
        "allCategoriesFilter": "Toutes les Catégories",
        "conversationTitle": "Titre",
        "actionOptions": "Options",
        "conversationCategory": "Catégorie",
        "conversationTags": "Balises"
    },
    "he": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 פועל!🎉",
        "updateCurrentConversationTree": "🌈 עדכן את עץ השיחה הנוכחי 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 כוונן את צבע הרקע והשקיפות 🎨",
        "toggleConversationTree": "🌳 הצג/הסתר עץ שיחה 🌳",
        "noDatabaseAndCreationFailed": "אין מסד נתונים ויצירתו נכשלה! סקריפט יוצא!",
        "mismatchedLink": "הקישור אינו תואם, אנא רענן את הדף!",
        "startUpdatingConversationTree": "התחל לעדכן את עץ השיחה",
        "selectedItem": "בחרת {item}",
        "successSavingChanges": "השינויים נשמרו בהצלחה!",
        "codeCopiedToClipboard": "הקוד הועתק ללוח!",
        "contentCopied": "התוכן הועתק!",
        "emptyCommentPrompt": "ההערה ריקה. האם תרצה להגדיר את ההערה כ\\"ריקה\\"?",
        "confirmDeleteLinkData": "הקישור {item} זוהה! האם אתה בטוח שאתה רוצה למחוק את נתוני הקישור הזה? כל השיחות וההערות יימחקו!",
        "confirmCurrentURL": "הקישור {item} זוהה! האם אתה בטוח?",
        "commentSetToEmpty": "ההערה הוגדרה כ\\"ריקה\\"",
        "enterCommentFirst": "אנא הזן הערה קודם",
        "commentSaved": "ההערה נשמרה",
        "conversationDataDeleted": "נתוני השיחה נמחקו בהצלחה",
        "executeSearchWithQuery": "בצע חיפוש: {item}",
        "searchPlaceholder": "הזן מילות חיפוש...",
        "searchButton": "חפש",
        "searchInContent": "תוכן השיחה",
        "searchInComments": "הערות משתמש",
        "searchInBoth": "תוכן והערות",
        "goToPrevious": "עבור לקודם",
        "goToNext": "עבור להבא",
        "numberOfMatches": "{matches} תוצאות",
        "nodeDetails": "פרטים",
        "enterComment": "אנא הקלד תגובה",
        "userCommentSave": "שמור",
        "userCommentCancel": "בטל",
        "userCommentClear": "נקה",
        "openAdminPanel": "פתח לוח בקרה",
        "allCategoriesFilter": "כל הקטגוריות",
        "conversationTitle": "כותרת",
        "actionOptions": "אפשרויות",
        "conversationCategory": "קטגוריה",
        "conversationTags": "תגיות"
    },
    "hu": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 fut!🎉",
        "updateCurrentConversationTree": "🌈 Frissítsd az aktuális beszélgetésfát 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Állítsd be a háttérszín és az átlátszóság értékeit 🎨",
        "toggleConversationTree": "🌳 Beszélgetésfa megjelenítése/elrejtése 🌳",
        "noDatabaseAndCreationFailed": "Nincs adatbázis és a létrehozás sikertelen! A szkript kilép!",
        "mismatchedLink": "A link nem egyezik, kérjük, frissítse az oldalt!",
        "startUpdatingConversationTree": "Beszélgetésfa frissítésének kezdése",
        "selectedItem": "Kiválasztott elem: {item}",
        "successSavingChanges": "A változások mentése sikerült!",
        "codeCopiedToClipboard": "A kód vágólapra másolva!",
        "contentCopied": "A tartalom másolva!",
        "emptyCommentPrompt": "A megjegyzés üres. Beállítja \\"üres\\"-ként?",
        "confirmDeleteLinkData": "A {item} link észlelve! Biztosan törli e link adatát? Minden beszélgetés és megjegyzés törlődik!",
        "confirmCurrentURL": "A {item} link észlelve! Biztos benne?",
        "commentSetToEmpty": "A megjegyzés \\"üres\\"-re van állítva",
        "enterCommentFirst": "Kérjük, először írja be a megjegyzést",
        "commentSaved": "Megjegyzés mentve",
        "conversationDataDeleted": "A beszélgetés adatai sikeresen törölve",
        "executeSearchWithQuery": "Keresés indítása: {item}",
        "searchPlaceholder": "Írja be a keresendő kifejezéseket...",
        "searchButton": "Keresés",
        "searchInContent": "Beszélgetés tartalma",
        "searchInComments": "Felhasználói megjegyzések",
        "searchInBoth": "Tartalom és megjegyzések",
        "goToPrevious": "Ugrás az előzőre",
        "goToNext": "Ugrás a következőre",
        "numberOfMatches": "{matches} találat",
        "nodeDetails": "Részletek",
        "enterComment": "Kérjük, írja be a megjegyzést",
        "userCommentSave": "Mentés",
        "userCommentCancel": "Mégse",
        "userCommentClear": "Törlés",
        "openAdminPanel": "Admin Panel Megnyitása",
        "allCategoriesFilter": "Minden Kategória",
        "conversationTitle": "Cím",
        "actionOptions": "Műveletek",
        "conversationCategory": "Kategória",
        "conversationTags": "Címkék"
    },
    "id": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 Sedang Berjalan!🎉",
        "updateCurrentConversationTree": "🌈 Perbarui Pohon Percakapan Saat Ini 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Sesuaikan Warna Latar Belakang dan Kecerahan 🎨",
        "toggleConversationTree": "🌳 Tampilkan/Sembunyikan Pohon Percakapan 🌳",
        "noDatabaseAndCreationFailed": "Tidak ada database, dan pembuatan gagal! Script keluar!",
        "mismatchedLink": "Tautan tidak cocok, silakan segarkan halaman!",
        "startUpdatingConversationTree": "Mulai memperbarui Pohon Percakapan",
        "selectedItem": "Anda memilih {item}",
        "successSavingChanges": "Berhasil Menyimpan Perubahan!",
        "codeCopiedToClipboard": "Kode disalin ke papan klip!",
        "contentCopied": "Konten disalin!",
        "emptyCommentPrompt": "Komentar kosong. Apakah Anda ingin mengatur komentar ke \\"kosong\\"?",
        "confirmDeleteLinkData": "Tautan {item} terdeteksi! Apakah Anda yakin ingin menghapus data tautan ini? Semua konten percakapan dan komentar akan dihapus!",
        "confirmCurrentURL": "Tautan {item} terdeteksi! Apakah Anda yakin?",
        "commentSetToEmpty": "Komentar diatur ke \\"kosong\\"",
        "enterCommentFirst": "Silakan masukkan komentar terlebih dahulu",
        "commentSaved": "Komentar disimpan",
        "conversationDataDeleted": "Data Percakapan Berhasil Dihapus",
        "executeSearchWithQuery": "Melakukan pencarian: {item}",
        "searchPlaceholder": "Masukkan kata kunci pencarian...",
        "searchButton": "Cari",
        "searchInContent": "Konten Percakapan",
        "searchInComments": "Komentar Pengguna",
        "searchInBoth": "Konten dan Komentar",
        "goToPrevious": "Pergi ke Sebelumnya",
        "goToNext": "Pergi ke Berikutnya",
        "numberOfMatches": "{matches} hasil pencarian",
        "nodeDetails": "Detail",
        "enterComment": "Silakan masukkan komentar",
        "userCommentSave": "Simpan",
        "userCommentCancel": "Batal",
        "userCommentClear": "Hapus",
        "openAdminPanel": "Buka Panel Admin",
        "allCategoriesFilter": "Semua Kategori",
        "conversationTitle": "Judul",
        "actionOptions": "Opsi",
        "conversationCategory": "Kategori",
        "conversationTags": "Tag"
    },
    "it": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 in esecuzione!🎉",
        "updateCurrentConversationTree": "🌈 Aggiorna l'albero di conversazione corrente 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Ajusta il colore di sfondo e l'opacità 🎨",
        "toggleConversationTree": "🌳 Mostra/Nascondi l'albero di conversazione 🌳",
        "noDatabaseAndCreationFailed": "Nessun database e la creazione non è riuscita! Script interrotto!",
        "mismatchedLink": "Il link non corrisponde, si prega di aggiornare la pagina!",
        "startUpdatingConversationTree": "Inizia l'aggiornamento dell'albero di conversazione",
        "selectedItem": "Hai selezionato {item}",
        "successSavingChanges": "Modifiche salvate con successo!",
        "codeCopiedToClipboard": "Codice copiato negli appunti!",
        "contentCopied": "Contenuto copiato!",
        "emptyCommentPrompt": "Il commento è vuoto. Vuoi impostare il commento su 'vuoto'?",
        "confirmDeleteLinkData": "Link rilevato {item}! Sei sicuro di voler eliminare le informazioni di questo link? Tutti i contenuti della conversazione e i commenti verranno eliminati!",
        "confirmCurrentURL": "Link rilevato {item}! Confermi?",
        "commentSetToEmpty": "Il commento è stato impostato su 'vuoto'",
        "enterCommentFirst": "Per favore, inserisci prima un commento",
        "commentSaved": "Commento salvato",
        "conversationDataDeleted": "Dati della conversazione eliminati con successo",
        "executeSearchWithQuery": "Esegui ricerca: {item}",
        "searchPlaceholder": "Inserisci parole chiave per la ricerca...",
        "searchButton": "Cerca",
        "searchInContent": "Contenuto della conversazione",
        "searchInComments": "Commenti degli utenti",
        "searchInBoth": "Contenuti e commenti",
        "goToPrevious": "Vai al precedente",
        "goToNext": "Vai al successivo",
        "numberOfMatches": "{matches} corrispondenze trovate",
        "nodeDetails": "Dettagli",
        "enterComment": "Per favore, inserisci un commento",
        "userCommentSave": "Salva",
        "userCommentCancel": "Annulla",
        "userCommentClear": "Cancella",
        "openAdminPanel": "Apri Pannello di Amministrazione",
        "allCategoriesFilter": "Tutte le Categorie",
        "conversationTitle": "Titolo",
        "actionOptions": "Opzioni",
        "conversationCategory": "Categoria",
        "conversationTags": "Tag"
    },
    "ja": {
        "chatTreeRunning": "🥳🌳ChatTree🌳実行中！🎉",
        "updateCurrentConversationTree": "🌈 現在の会話ツリーを更新 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 背景色と透明度を調整 🎨",
        "toggleConversationTree": "🌳 会話ツリーを表示/非表示 🌳",
        "noDatabaseAndCreationFailed": "データベースがなく、作成に失敗しました！スクリプトを終了します！",
        "mismatchedLink": "リンクが一致しません、ページを更新してください！",
        "startUpdatingConversationTree": "会話ツリーの更新を開始",
        "selectedItem": "{item}を選択しました",
        "successSavingChanges": "変更の保存に成功しました！",
        "codeCopiedToClipboard": "コードがクリップボードにコピーされました！",
        "contentCopied": "内容がコピーされました！",
        "emptyCommentPrompt": "コメントが空です。コメントを'空'に設定しますか？",
        "confirmDeleteLinkData": "{item}のリンクが検出されました！ このリンクの情報を削除してもよろしいですか？ すべての会話内容とコメントが削除されます！",
        "confirmCurrentURL": "{item}のリンクが検出されました！よろしいですか？",
        "commentSetToEmpty": "コメントが'空'に設定されました",
        "enterCommentFirst": "先にコメントを入力してください",
        "commentSaved": "コメントが保存されました",
        "conversationDataDeleted": "会話データが正常に削除されました",
        "executeSearchWithQuery": "検索を実行：{item}",
        "searchPlaceholder": "検索キーワードを入力...",
        "searchButton": "検索",
        "searchInContent": "会話の内容",
        "searchInComments": "ユーザーコメント",
        "searchInBoth": "内容とコメント",
        "goToPrevious": "前へ",
        "goToNext": "次へ",
        "numberOfMatches": "一致する項目{matches}件",
        "nodeDetails": "詳細",
        "enterComment": "コメントを入力してください",
        "userCommentSave": "保存",
        "userCommentCancel": "キャンセル",
        "userCommentClear": "クリア",
        "openAdminPanel": "管理パネルを開く",
        "allCategoriesFilter": "すべてのカテゴリ",
        "conversationTitle": "タイトル",
        "actionOptions": "オプション",
        "conversationCategory": "カテゴリ",
        "conversationTags": "タグ"
    },
    "ka": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 გაშვებულია!🎉",
        "updateCurrentConversationTree": "🌈 განაახლეთ ამჟამინდელი სასაუბრო ხე 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 გაასწორეთ ფონის ფერი და გამჭვირვალობა 🎨",
        "toggleConversationTree": "🌳 ჩვენება/დამალვა სასაუბრო ხე 🌳",
        "noDatabaseAndCreationFailed": "არ არის მონაცემთა ბაზა და შექმნა ვერ ხერხდება! სკრიპტი გამოირიყება!",
        "mismatchedLink": "ბმული არ ემთხვევა, გთხოვთ, განაახლოთ გვერდი!",
        "startUpdatingConversationTree": "სასაუბრო ხის განახლების დაწყება",
        "selectedItem": "თქვენ აირჩიეთ {item}",
        "successSavingChanges": "ცვლილებები წარმატებით შენახულია!",
        "codeCopiedToClipboard": "კოდი კოპირებულია ბუფერში!",
        "contentCopied": "კონტენტი კოპირებულია!",
        "emptyCommentPrompt": "კომენტარი ცარიელია. გსურთ კომენტარი 'ცარიელი' განსაზღვროთ?",
        "confirmDeleteLinkData": "{item} ბმული აღმოჩენილია! დარწმუნებული ხართ, რომ გსურთ ამ ბმულის ინფორმაციის წაშლა? ყველა სასაუბრო კონტენტი და კომენტარი წაიშლება!",
        "confirmCurrentURL": "{item} ბმული აღმოჩენილია! დარწმუნებული ხართ?",
        "commentSetToEmpty": "კომენტარი 'ცარიელია' განსაზღვრულია",
        "enterCommentFirst": "გთხოვთ, ჯერ შეიყვანეთ კომენტარი",
        "commentSaved": "კომენტარი შენახულია",
        "conversationDataDeleted": "სასაუბრო მონაცემები წარმატებით წაიშალა",
        "executeSearchWithQuery": "ძიება შესრულება: {item}",
        "searchPlaceholder": "შეიყვანეთ ძიების სიტყვები...",
        "searchButton": "ძებნა",
        "searchInContent": "კონვერსიის კონტენტი",
        "searchInComments": "მომხმარებლის კომენტარები",
        "searchInBoth": "კონტენტი და კომენტარები",
        "goToPrevious": "წინაში გადასვლა",
        "goToNext": "შემდეგში გადასვლა",
        "numberOfMatches": "{matches} შესატყვისი",
        "nodeDetails": "დეტალები",
        "enterComment": "გთხოვთ შეიყვანოთ კომენტარი",
        "userCommentSave": "შენახვა",
        "userCommentCancel": "გაუქმება",
        "userCommentClear": "გასუფთავება",
        "openAdminPanel": "ადმინის პანელის გახსნა",
        "allCategoriesFilter": "ყველა კატეგორია",
        "conversationTitle": "სათაური",
        "actionOptions": "ოფციები",
        "conversationCategory": "კატეგორია",
        "conversationTags": "თეგები"
    },
    "ko": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 실행 중!🎉",
        "updateCurrentConversationTree": "🌈 현재 대화 트리 업데이트 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 배경색과 투명도 조정 🎨",
        "toggleConversationTree": "🌳 대화 트리 표시/숨기기 🌳",
        "noDatabaseAndCreationFailed": "데이터베이스가 없으며 생성에 실패했습니다! 스크립트 종료!",
        "mismatchedLink": "링크가 일치하지 않습니다. 페이지를 새로고침하세요!",
        "startUpdatingConversationTree": "대화 트리 업데이트 시작",
        "selectedItem": "{item}를 선택했습니다",
        "successSavingChanges": "변경 사항이 성공적으로 저장되었습니다!",
        "codeCopiedToClipboard": "코드가 클립보드에 복사되었습니다!",
        "contentCopied": "내용이 복사되었습니다!",
        "emptyCommentPrompt": "댓글이 비어 있습니다. 댓글을 '비움'으로 설정하시겠습니까?",
        "confirmDeleteLinkData": "{item} 링크를 감지했습니다! 이 링크의 정보를 삭제하시겠습니까? 모든 대화 내용과 댓글이 삭제됩니다!",
        "confirmCurrentURL": "{item} 링크를 감지했습니다! 확인하시겠습니까?",
        "commentSetToEmpty": "댓글이 '비움'으로 설정되었습니다",
        "enterCommentFirst": "먼저 댓글을 입력해주세요",
        "commentSaved": "댓글이 저장되었습니다",
        "conversationDataDeleted": "대화 데이터가 성공적으로 삭제되었습니다",
        "executeSearchWithQuery": "검색 실행: {item}",
        "searchPlaceholder": "검색어를 입력하세요...",
        "searchButton": "검색",
        "searchInContent": "대화 내용",
        "searchInComments": "사용자 코멘트",
        "searchInBoth": "내용과 코멘트",
        "goToPrevious": "이전으로",
        "goToNext": "다음으로",
        "numberOfMatches": "{matches}개의 일치 항목",
        "nodeDetails": "세부 정보",
        "enterComment": "댓글을 입력하세요",
        "userCommentSave": "저장",
        "userCommentCancel": "취소",
        "userCommentClear": "지우기",
        "openAdminPanel": "관리 패널",
        "allCategoriesFilter": "모든 카테고리",
        "conversationTitle": "제목",
        "actionOptions": "작업",
        "conversationCategory": "카테고리",
        "conversationTags": "태그"
    },
 "nb": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 er i gang! 🎉",
        "updateCurrentConversationTree": "🌈 Oppdater gjeldende samtale-tre 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Juster bakgrunnsfarge og opasitet 🎨",
        "toggleConversationTree": "🌳 Vis/Skjul samtale-tre 🌳",
        "noDatabaseAndCreationFailed": "Ingen database, og opprettelsen mislyktes! Skriptet avslutter!",
        "mismatchedLink": "Lenken stemmer ikke, vennligst oppfrisk siden!",
        "startUpdatingConversationTree": "Begynner å oppdatere samtale-treet",
        "selectedItem": "Du valgte {item}",
        "successSavingChanges": "Endringene ble lagret!",
        "codeCopiedToClipboard": "Koden er kopiert til utklippstavlen!",
        "contentCopied": "Innholdet er kopiert!",
        "emptyCommentPrompt": "Kommentaren er tom. Vil du sette kommentaren til \\"tom\\"?",
        "confirmDeleteLinkData": "Linken er {item}! Er du sikker på at du vil slette denne linkens informasjon? All samtale og kommentarinnhold vil bli slettet!",
        "confirmCurrentURL": "Linken er {item}! Er du sikker?",
        "commentSetToEmpty": "Kommentaren er satt til \\"tom\\"",
        "enterCommentFirst": "Vennligst skriv en kommentar først",
        "commentSaved": "Kommentaren er lagret",
        "conversationDataDeleted": "Samtaledata er slettet",
        "executeSearchWithQuery": "Utfør søk: {item}",
        "searchPlaceholder": "Skriv inn søkeord...",
        "searchButton": "Søk",
        "searchInContent": "Samtaleinnhold",
        "searchInComments": "Brukerkommentarer",
        "searchInBoth": "Innhold og kommentarer",
        "goToPrevious": "Gå til forrige",
        "goToNext": "Gå til neste",
        "numberOfMatches": "{matches} treff",
        "nodeDetails": "Detaljer",
        "enterComment": "Vennligst skriv en kommentar",
        "userCommentSave": "Lagre",
        "userCommentCancel": "Avbryt",
        "userCommentClear": "Tøm",
        "openAdminPanel": "Administrasjonspanel",
        "allCategoriesFilter": "Alle kategorier",
        "conversationTitle": "Tittel",
        "actionOptions": "Handlinger",
        "conversationCategory": "Kategori",
        "conversationTags": "Merkelapper"
    },
    "nl": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 is actief! 🎉",
        "updateCurrentConversationTree": "🌈 Huidige gespreksboom bijwerken 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Achtergrondkleur en opaciteit aanpassen 🎨",
        "toggleConversationTree": "🌳 Gespreksboom weergeven/verbergen 🌳",
        "noDatabaseAndCreationFailed": "Geen database en het aanmaken is mislukt! Script wordt afgesloten!",
        "mismatchedLink": "Link komt niet overeen, ververs de pagina!",
        "startUpdatingConversationTree": "Begint met het bijwerken van de gespreksboom",
        "selectedItem": "Je hebt {item} geselecteerd",
        "successSavingChanges": "Wijzigingen succesvol opgeslagen!",
        "codeCopiedToClipboard": "Code gekopieerd naar klembord!",
        "contentCopied": "Inhoud gekopieerd!",
        "emptyCommentPrompt": "De opmerking is leeg. Wil je de opmerking instellen op \\"leeg\\"?",
        "confirmDeleteLinkData": "Gedetecteerde link is {item}! Weet je zeker dat je de informatie van deze link wilt verwijderen? Alle gespreks- en opmerkingsinhoud zal worden verwijderd!",
        "confirmCurrentURL": "Gedetecteerde link is {item}! Zeker weten?",
        "commentSetToEmpty": "Opmerking is ingesteld op \\"leeg\\"",
        "enterCommentFirst": "Voer eerst een opmerking in",
        "commentSaved": "Opmerking opgeslagen",
        "conversationDataDeleted": "Gespreksgegevens succesvol verwijderd",
        "executeSearchWithQuery": "Zoekopdracht uitvoeren: {item}",
        "searchPlaceholder": "Voer zoekwoorden in...",
        "searchButton": "Zoeken",
        "searchInContent": "In gespreksinhoud",
        "searchInComments": "In gebruikersopmerkingen",
        "searchInBoth": "In inhoud en opmerkingen",
        "goToPrevious": "Ga naar vorige",
        "goToNext": "Ga naar volgende",
        "numberOfMatches": "{matches} overeenkomsten",
        "nodeDetails": "Details",
        "enterComment": "Voer alstublieft een opmerking in",
        "userCommentSave": "Opslaan",
        "userCommentCancel": "Annuleren",
        "userCommentClear": "Wissen",
        "openAdminPanel": "Beheerpaneel",
        "allCategoriesFilter": "Alle categorieën",
        "conversationTitle": "Titel",
        "actionOptions": "Acties",
        "conversationCategory": "Categorie",
        "conversationTags": "Labels"
    },
    "pl": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 jest uruchomiony! 🎉",
        "updateCurrentConversationTree": "🌈 Aktualizuj aktualne drzewo rozmów 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Dostosuj kolor tła i przezroczystość 🎨",
        "toggleConversationTree": "🌳 Pokaż/ukryj drzewo rozmów 🌳",
        "noDatabaseAndCreationFailed": "Brak bazy danych, a jej utworzenie nie powiodło się! Skrypt zakończy działanie!",
        "mismatchedLink": "Link nie pasuje, odśwież stronę!",
        "startUpdatingConversationTree": "Rozpoczyna aktualizację drzewa rozmów",
        "selectedItem": "Wybrałeś {item}",
        "successSavingChanges": "Zmiany zostały zapisane!",
        "codeCopiedToClipboard": "Kod skopiowany do schowka!",
        "contentCopied": "Treść skopiowana!",
        "emptyCommentPrompt": "Komentarz jest pusty. Czy chcesz ustawić komentarz na \\"pusty\\"?",
        "confirmDeleteLinkData": "Wykryto link {item}! Czy na pewno chcesz usunąć informacje z tego linku? Wszystkie treści rozmów i komentarze zostaną usunięte!",
        "confirmCurrentURL": "Wykryto link {item}! Czy jesteś pewien?",
        "commentSetToEmpty": "Komentarz został ustawiony na \\"pusty\\"",
        "enterCommentFirst": "Najpierw wprowadź komentarz",
        "commentSaved": "Komentarz został zapisany",
        "conversationDataDeleted": "Dane rozmowy zostały pomyślnie usunięte",
        "executeSearchWithQuery": "Wykonaj wyszukiwanie: {item}",
        "searchPlaceholder": "Wprowadź słowa kluczowe...",
        "searchButton": "Szukaj",
        "searchInContent": "W treści rozmowy",
        "searchInComments": "W komentarzach użytkowników",
        "searchInBoth": "W treści i komentarzach",
        "goToPrevious": "Przejdź do poprzedniego",
        "goToNext": "Przejdź do następnego",
        "numberOfMatches": "{matches} dopasowań",
        "nodeDetails": "Szczegóły",
        "enterComment": "Proszę wprowadzić komentarz",
        "userCommentSave": "Zapisz",
        "userCommentCancel": "Anuluj",
        "userCommentClear": "Wyczyść",
        "openAdminPanel": "Panel administracyjny",
        "allCategoriesFilter": "Wszystkie kategorie",
        "conversationTitle": "Tytuł",
        "actionOptions": "Operacje",
        "conversationCategory": "Kategoria",
        "conversationTags": "Tagi"
    },
 "pt-PT": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 em execução! 🎉",
        "updateCurrentConversationTree": "🌈 Atualizar a árvore de conversação atual 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Ajustar a cor de fundo e a opacidade 🎨",
        "toggleConversationTree": "🌳 Mostrar/ocultar árvore de conversação 🌳",
        "noDatabaseAndCreationFailed": "Sem base de dados e a criação falhou! Script a encerrar!",
        "mismatchedLink": "Link não corresponde, por favor atualize a página!",
        "startUpdatingConversationTree": "A iniciar a atualização da árvore de conversação",
        "selectedItem": "Selecionou {item}",
        "successSavingChanges": "Alterações guardadas com sucesso!",
        "codeCopiedToClipboard": "Código copiado para a área de transferência!",
        "contentCopied": "Conteúdo copiado!",
        "emptyCommentPrompt": "O comentário está vazio. Deseja definir o comentário como \\"vazio\\"?",
        "confirmDeleteLinkData": "O link detetado é {item}! Tem a certeza que quer eliminar as informações deste link? Todo o conteúdo da conversa e comentários serão eliminados!",
        "confirmCurrentURL": "O link detetado é {item}! Confirma?",
        "commentSetToEmpty": "O comentário foi definido como \\"vazio\\"",
        "enterCommentFirst": "Por favor, insira um comentário primeiro",
        "commentSaved": "Comentário guardado",
        "conversationDataDeleted": "Dados de conversação eliminados com sucesso",
        "executeSearchWithQuery": "Executar pesquisa: {item}",
        "searchPlaceholder": "Insira palavras-chave...",
        "searchButton": "Pesquisar",
        "searchInContent": "No conteúdo da conversa",
        "searchInComments": "Nos comentários do usuário",
        "searchInBoth": "Em conteúdo e comentários",
        "goToPrevious": "Ir para o anterior",
        "goToNext": "Ir para o próximo",
        "numberOfMatches": "{matches} correspondências",
        "nodeDetails": "Detalhes",
        "enterComment": "Insira um comentário",
        "userCommentSave": "Guardar",
        "userCommentCancel": "Cancelar",
        "userCommentClear": "Limpar",
        "openAdminPanel": "Painel de administração",
        "allCategoriesFilter": "Todas as categorias",
        "conversationTitle": "Título",
        "actionOptions": "Opções",
        "conversationCategory": "Categoria",
        "conversationTags": "Etiquetas"
    },
 "pt-BR": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 em execução! 🎉",
        "updateCurrentConversationTree": "🌈 Atualizar a árvore de conversa atual 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Ajustar a cor de fundo e a opacidade 🎨",
        "toggleConversationTree": "🌳 Mostrar/esconder árvore de conversa 🌳",
        "noDatabaseAndCreationFailed": "Sem banco de dados e a criação falhou! Script encerrando!",
        "mismatchedLink": "Link não corresponde, por favor, atualize a página!",
        "startUpdatingConversationTree": "Começando a atualizar a árvore de conversa",
        "selectedItem": "Você selecionou {item}",
        "successSavingChanges": "Alterações salvas com sucesso!",
        "codeCopiedToClipboard": "Código copiado para a área de transferência!",
        "contentCopied": "Conteúdo copiado!",
        "emptyCommentPrompt": "O comentário está vazio. Você quer definir o comentário como \\"vazio\\"?",
        "confirmDeleteLinkData": "O link detectado é {item}! Tem certeza de que deseja excluir as informações deste link? Todo o conteúdo da conversa e os comentários serão excluídos!",
        "confirmCurrentURL": "O link detectado é {item}! Confirma?",
        "commentSetToEmpty": "O comentário foi definido como \\"vazio\\"",
        "enterCommentFirst": "Por favor, insira um comentário primeiro",
        "commentSaved": "Comentário salvo",
        "conversationDataDeleted": "Dados da conversa excluídos com sucesso",
        "executeSearchWithQuery": "Executar pesquisa: {item}",
        "searchPlaceholder": "Digite palavras-chave...",
        "searchButton": "Pesquisar",
        "searchInContent": "No conteúdo da conversa",
        "searchInComments": "Nos comentários do usuário",
        "searchInBoth": "Em conteúdo e comentários",
        "goToPrevious": "Ir para o anterior",
        "goToNext": "Ir para o próximo",
        "numberOfMatches": "{matches} correspondências",
        "nodeDetails": "Detalhes",
        "enterComment": "Digite um comentário",
        "userCommentSave": "Salvar",
        "userCommentCancel": "Cancelar",
        "userCommentClear": "Limpar",
        "openAdminPanel": "Painel de administração",
        "allCategoriesFilter": "Todas as categorias",
        "conversationTitle": "Título",
        "actionOptions": "Opções",
        "conversationCategory": "Categoria",
        "conversationTags": "Tags"
    },
   "ro": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 este în funcțiune!🎉",
        "updateCurrentConversationTree": "🌈 Actualizați arborele conversației curente 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Ajustați culoarea de fundal și opacitatea 🎨",
        "toggleConversationTree": "🌳 Afișați/Ascundeți arborele conversației 🌳",
        "noDatabaseAndCreationFailed": "Nu există bază de date și crearea a eșuat! Scriptul se închide!",
        "mismatchedLink": "Link-ul nu se potrivește, vă rugăm să reîmprospătați pagina!",
        "startUpdatingConversationTree": "Începeți să actualizați arborele conversației",
        "selectedItem": "Ați selectat {item}",
        "successSavingChanges": "Modificările au fost salvate cu succes!",
        "codeCopiedToClipboard": "Codul a fost copiat în clipboard!",
        "contentCopied": "Conținutul a fost copiat!",
        "emptyCommentPrompt": "Comentariul este gol. Doriți să setați comentariul ca \\"gol\\"?",
        "confirmDeleteLinkData": "Link detectat ca fiind {item}! Confirmați ștergerea informațiilor acestui link? Tot conținutul conversației și comentariile vor fi șterse!",
        "confirmCurrentURL": "Link detectat ca fiind {item}! Confirmați?",
        "commentSetToEmpty": "Comentariu setat ca \\"gol\\"",
        "enterCommentFirst": "Vă rugăm să introduceți mai întâi un comentariu",
        "commentSaved": "Comentariu salvat",
        "conversationDataDeleted": "Datele conversației au fost șterse cu succes",
        "executeSearchWithQuery": "Executați căutarea: {item}",
        "searchPlaceholder": "Introduceți cuvinte cheie...",
        "searchButton": "Căutare",
        "searchInContent": "În conținutul conversației",
        "searchInComments": "În comentariile utilizatorului",
        "searchInBoth": "În conținut și comentarii",
        "goToPrevious": "Mergi la precedentul",
        "goToNext": "Mergi la următorul",
        "numberOfMatches": "{matches} potriviri",
        "nodeDetails": "Detalii",
        "enterComment": "Introduceți un comentariu",
        "userCommentSave": "Salvați",
        "userCommentCancel": "Anulați",
        "userCommentClear": "Șterge",
        "openAdminPanel": "Panou administrativ",
        "allCategoriesFilter": "Toate categoriile",
        "conversationTitle": "Titlu",
        "actionOptions": "Opțiuni",
        "conversationCategory": "Categorie",
        "conversationTags": "Etichete"
    },
    "ru": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 запущен!🎉",
        "updateCurrentConversationTree": "🌈 Обновить текущее дерево беседы 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Настроить цвет фона и прозрачность 🎨",
        "toggleConversationTree": "🌳 Показать/Скрыть дерево беседы 🌳",
        "noDatabaseAndCreationFailed": "База данных отсутствует, и создание не удалось! Скрипт выходит!",
        "mismatchedLink": "Ссылка не совпадает, пожалуйста, обновите страницу!",
        "startUpdatingConversationTree": "Начать обновление дерева беседы",
        "selectedItem": "Вы выбрали {item}",
        "successSavingChanges": "Изменения успешно сохранены!",
        "codeCopiedToClipboard": "Код скопирован в буфер обмена!",
        "contentCopied": "Содержимое скопировано!",
        "emptyCommentPrompt": "Комментарий пуст. Вы хотите установить комментарий как \\"пустой\\"?",
        "confirmDeleteLinkData": "Обнаружена ссылка {item}! Подтвердить удаление информации этой ссылки? Весь контент беседы и комментарии будут удалены!",
        "confirmCurrentURL": "Обнаружена ссылка {item}! Подтвердить?",
        "commentSetToEmpty": "Комментарий установлен как \\"пустой\\"",
        "enterCommentFirst": "Пожалуйста, сначала введите комментарий",
        "commentSaved": "Комментарий сохранен",
        "conversationDataDeleted": "Данные беседы успешно удалены",
        "executeSearchWithQuery": "Выполнить поиск: {item}",
        "searchPlaceholder": "Введите ключевые слова...",
        "searchButton": "Поиск",
        "searchInContent": "В контенте диалога",
        "searchInComments": "В комментариях пользователя",
        "searchInBoth": "В контенте и комментариях",
        "goToPrevious": "Перейти к предыдущему",
        "goToNext": "Перейти к следующему",
        "numberOfMatches": "{matches} совпадений",
        "nodeDetails": "Подробности",
        "enterComment": "Введите комментарий",
        "userCommentSave": "Сохранить",
        "userCommentCancel": "Отмена",
        "userCommentClear": "Очистить",
        "openAdminPanel": "Панель управления",
        "allCategoriesFilter": "Все категории",
        "conversationTitle": "Заголовок",
        "actionOptions": "Опции",
        "conversationCategory": "Категория",
        "conversationTags": "Теги"
    },
    "sk": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 beží!🎉",
        "updateCurrentConversationTree": "🌈 Aktualizovať aktuálny konverzačný strom 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Upraviť farbu pozadia a priehľadnosť 🎨",
        "toggleConversationTree": "🌳 Zobraziť/Skryť konverzačný strom 🌳",
        "noDatabaseAndCreationFailed": "Nie je databáza a vytvorenie zlyhalo! Skript končí!",
        "mismatchedLink": "Odkaz sa nezhoduje, prosím, obnovte stránku!",
        "startUpdatingConversationTree": "Začať aktualizovať konverzačný strom",
        "selectedItem": "Vybrali ste {item}",
        "successSavingChanges": "Zmeny boli úspešne uložené!",
        "codeCopiedToClipboard": "Kód bol skopírovaný do schránky!",
        "contentCopied": "Obsah bol skopírovaný!",
        "emptyCommentPrompt": "Komentár je prázdny. Chcete nastaviť komentár na \\"prázdny\\"?",
        "confirmDeleteLinkData": "Odkaz detekovaný ako {item}! Potvrdiť odstránenie informácií tohto odkazu? Všetok obsah konverzácie a komentáre budú odstránené!",
        "confirmCurrentURL": "Odkaz detekovaný ako {item}! Potvrdiť?",
        "commentSetToEmpty": "Komentár bol nastavený na \\"prázdny\\"",
        "enterCommentFirst": "Najprv prosím, zadajte komentár",
        "commentSaved": "Komentár bol uložený",
        "conversationDataDeleted": "Dáta konverzácie boli úspešne odstránené",
        "executeSearchWithQuery": "Vykonať vyhľadávanie: {item}",
        "searchPlaceholder": "Zadajte kľúčové slová pre vyhľadávanie...",
        "searchButton": "Hľadať",
        "searchInContent": "V obsahu konverzácie",
        "searchInComments": "V komentároch",
        "searchInBoth": "V obsahu a komentároch",
        "goToPrevious": "Prejsť na predchádzajúci",
        "goToNext": "Prejsť na ďalší",
        "numberOfMatches": "{matches} zhôd",
        "nodeDetails": "Detaily",
        "enterComment": "Zadajte komentár",
        "userCommentSave": "Uložiť",
        "userCommentCancel": "Zrušiť",
        "userCommentClear": "Vymazať",
        "openAdminPanel": "Administračný panel",
        "allCategoriesFilter": "Všetky kategórie",
        "conversationTitle": "Názov",
        "actionOptions": "Možnosti",
        "conversationCategory": "Kategória",
        "conversationTags": "Značky"
    },
    "sr": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 je pokrenut!🎉",
        "updateCurrentConversationTree": "🌈 Ažurirajte trenutno stablo razgovora 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Podesite boju pozadine i providnost 🎨",
        "toggleConversationTree": "🌳 Prikaži/Sakrij stablo razgovora 🌳",
        "noDatabaseAndCreationFailed": "Nema baze podataka, a kreiranje nije uspelo! Skript izlazi!",
        "mismatchedLink": "Link se ne podudara, molimo osvežite stranicu!",
        "startUpdatingConversationTree": "Počnite ažurirati stablo razgovora",
        "selectedItem": "Izabrali ste {item}",
        "successSavingChanges": "Promene su uspešno sačuvane!",
        "codeCopiedToClipboard": "Kod je kopiran u klipbord!",
        "contentCopied": "Sadržaj je kopiran!",
        "emptyCommentPrompt": "Komentar je prazan. Da li želite postaviti komentar kao \\"prazan\\"?",
        "confirmDeleteLinkData": "Link je detektovan kao {item}! Potvrditi brisanje informacija o ovom linku? Svi podaci razgovora i komentari će biti obrisani!",
        "confirmCurrentURL": "Link je detektovan kao {item}! Potvrditi?",
        "commentSetToEmpty": "Komentar je postavljen kao \\"prazan\\"",
        "enterCommentFirst": "Molimo prvo unesite komentar",
        "commentSaved": "Komentar je sačuvan",
        "conversationDataDeleted": "Podaci razgovora su uspešno obrisani",
        "executeSearchWithQuery": "Izvršiti pretragu: {item}",
        "searchPlaceholder": "Unesite ključne reči za pretragu...",
        "searchButton": "Pretraga",
        "searchInContent": "U sadržaju razgovora",
        "searchInComments": "U komentarima",
        "searchInBoth": "U sadržaju i komentarima",
        "goToPrevious": "Idi na prethodni",
        "goToNext": "Idi na sledeći",
        "numberOfMatches": "{matches} poklapanja",
        "nodeDetails": "Detalji",
        "enterComment": "Unesite komentar",
        "userCommentSave": "Sačuvaj",
        "userCommentCancel": "Otkaži",
        "userCommentClear": "Obriši",
        "openAdminPanel": "Administrativni panel",
        "allCategoriesFilter": "Sve kategorije",
        "conversationTitle": "Naslov",
        "actionOptions": "Opcije",
        "conversationCategory": "Kategorija",
        "conversationTags": "Tagovi"
    },
    "sv": {
        "chatTreeRunning": "🥳🌳ChatTree🌳 är igång!🎉",
        "updateCurrentConversationTree": "🌈 Uppdatera aktuellt konversations träd 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Justera bakgrundsfärg och opacitet 🎨",
        "toggleConversationTree": "🌳 Visa/Dölj konversationsträd 🌳",
        "noDatabaseAndCreationFailed": "Ingen databas, och skapandet misslyckades! Skriptet avslutas!",
        "mismatchedLink": "Länken matchar inte, vänligen uppdatera sidan!",
        "startUpdatingConversationTree": "Börja uppdatera konversationsträdet",
        "selectedItem": "Du valde {item}",
        "successSavingChanges": "Ändringar sparade framgångsrikt!",
        "codeCopiedToClipboard": "Koden har kopierats till urklipp!",
        "contentCopied": "Innehållet har kopierats!",
        "emptyCommentPrompt": "Kommentaren är tom. Vill du ställa in kommentaren som \\"tom\\"?",
        "confirmDeleteLinkData": "Länk identifierad som {item}! Bekräfta radering av denna länks information? All konversationsinnehåll och kommentarer kommer att raderas!",
        "confirmCurrentURL": "Länk identifierad som {item}! Bekräfta?",
        "commentSetToEmpty": "Kommentaren är inställd på \\"tom\\"",
        "enterCommentFirst": "Vänligen skriv en kommentar först",
        "commentSaved": "Kommentar sparad",
        "conversationDataDeleted": "Konversationsdata har raderats framgångsrikt",
        "executeSearchWithQuery": "Utför sökning: {item}",
        "searchPlaceholder": "Ange sökord...",
        "searchButton": "Sök",
        "searchInContent": "I konversationsinnehållet",
        "searchInComments": "I kommentarer",
        "searchInBoth": "I både innehåll och kommentarer",
        "goToPrevious": "Gå till föregående",
        "goToNext": "Gå till nästa",
        "numberOfMatches": "{matches} träffar",
        "nodeDetails": "Detaljer",
        "enterComment": "Ange en kommentar",
        "userCommentSave": "Spara",
        "userCommentCancel": "Avbryt",
        "userCommentClear": "Rensa",
        "openAdminPanel": "Administrationspanel",
        "allCategoriesFilter": "Alla kategorier",
        "conversationTitle": "Titel",
        "actionOptions": "Åtgärder",
        "conversationCategory": "Kategori",
        "conversationTags": "Taggar"
    },
     "th": {
        "chatTreeRunning": "🥳🌳ChatTree🌳กำลังทำงาน!🎉",
        "updateCurrentConversationTree": "🌈 อัปเดตต้นไม้การสนทนาปัจจุบัน 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 ปรับสีพื้นหลังและความโปร่งใส 🎨",
        "toggleConversationTree": "🌳 แสดง/ซ่อนต้นไม้การสนทนา 🌳",
        "noDatabaseAndCreationFailed": "ไม่มีฐานข้อมูล และไม่สามารถสร้างสำเร็จ! สคริปต์ออก!",
        "mismatchedLink": "ลิงก์ไม่ตรงกัน โปรดรีเฟรชหน้า!",
        "startUpdatingConversationTree": "เริ่มต้นอัปเดตต้นไม้การสนทนา",
        "selectedItem": "คุณเลือก {item}",
        "successSavingChanges": "บันทึกการเปลี่ยนแปลงสำเร็จ!",
        "codeCopiedToClipboard": "คัดลอกโค้ดไปยังคลิปบอร์ดแล้ว!",
        "contentCopied": "คัดลอกเนื้อหาแล้ว!",
        "emptyCommentPrompt": "คอมเมนต์ว่างเปล่า คุณต้องการตั้งค่าคอมเมนต์เป็น \\"ว่างเปล่า\\" หรือไม่?",
        "confirmDeleteLinkData": "ตรวจพบลิงก์เป็น {item}! ยืนยันที่จะลบข้อมูลลิงก์นี้หรือไม่? ข้อมูลการสนทนาและคอมเมนต์ทั้งหมดจะถูกลบ!",
        "confirmCurrentURL": "ตรวจพบลิงก์เป็น {item}! ยืนยันหรือไม่?",
        "commentSetToEmpty": "ตั้งค่าคอมเมนต์เป็น \\"ว่างเปล่า\\"",
        "enterCommentFirst": "โปรดใส่คอมเมนต์ก่อน",
        "commentSaved": "บันทึกคอมเมนต์แล้ว",
        "conversationDataDeleted": "ลบข้อมูลการสนทนาสำเร็จ",
        "executeSearchWithQuery": "ดำเนินการค้นหา: {item}",
        "searchPlaceholder": "ป้อนคำค้นหา...",
        "searchButton": "ค้นหา",
        "searchInContent": "ในเนื้อหาการสนทนา",
        "searchInComments": "ในความคิดเห็น",
        "searchInBoth": "ทั้งเนื้อหาและความคิดเห็น",
        "goToPrevious": "ไปที่ก่อนหน้า",
        "goToNext": "ไปที่ถัดไป",
        "numberOfMatches": "{matches} รายการที่ตรงกัน",
        "nodeDetails": "รายละเอียด",
        "enterComment": "กรุณาใส่ความคิดเห็น",
        "userCommentSave": "บันทึก",
        "userCommentCancel": "ยกเลิก",
        "userCommentClear": "ล้าง",
        "openAdminPanel": "แผงการจัดการ",
        "allCategoriesFilter": "ทุกหมวดหมู่",
        "conversationTitle": "ชื่อเรื่อง",
        "actionOptions": "การดำเนินการ",
        "conversationCategory": "ประเภท",
        "conversationTags": "แท็ก"
    },
    "tr": {
        "chatTreeRunning": "🥳🌳ChatTree🌳Çalışıyor!🎉",
        "updateCurrentConversationTree": "🌈 Güncel Konuşma Ağacını Güncelle 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Arka Plan Rengini ve Şeffaflığı Ayarla 🎨",
        "toggleConversationTree": "🌳 Konuşma Ağacını Göster/Gizle 🌳",
        "noDatabaseAndCreationFailed": "Veritabanı yok ve oluşturulamadı! Betik çıkıyor!",
        "mismatchedLink": "Bağlantı eşleşmiyor, lütfen sayfayı yenileyin!",
        "startUpdatingConversationTree": "Konuşma Ağacını Güncellemeye Başla",
        "selectedItem": "{item} seçildi",
        "successSavingChanges": "Değişiklikler Başarıyla Kaydedildi!",
        "codeCopiedToClipboard": "Kod panoya kopyalandı!",
        "contentCopied": "İçerik kopyalandı!",
        "emptyCommentPrompt": "Yorum boş. Yorumu \\"boş\\" olarak ayarlamak istiyor musunuz?",
        "confirmDeleteLinkData": "{item} bağlantısı tespit edildi! Bu bağlantının bilgilerini silmek istediğinizi onaylıyor musunuz? Tüm konuşma ve yorum içerikleri silinecek!",
        "confirmCurrentURL": "{item} bağlantısı tespit edildi! Onaylıyor musunuz?",
        "commentSetToEmpty": "Yorum \\"boş\\" olarak ayarlandı",
        "enterCommentFirst": "Lütfen önce bir yorum girin",
        "commentSaved": "Yorum kaydedildi",
        "conversationDataDeleted": "Konuşma Verileri Başarıyla Silindi",
        "executeSearchWithQuery": "Arama Yapılıyor: {item}",
        "searchPlaceholder": "Arama anahtar kelimelerini girin...",
        "searchButton": "Ara",
        "searchInContent": "Konuşma İçeriğinde",
        "searchInComments": "Yorumlarda",
        "searchInBoth": "İçerik ve Yorumlarda",
        "goToPrevious": "Öncekine Git",
        "goToNext": "Sonrakine Git",
        "numberOfMatches": "{matches} eşleşme",
        "nodeDetails": "Detaylar",
        "enterComment": "Bir yorum girin",
        "userCommentSave": "Kaydet",
        "userCommentCancel": "İptal",
        "userCommentClear": "Temizle",
        "openAdminPanel": "Yönetim Paneli",
        "allCategoriesFilter": "Tüm Kategoriler",
        "conversationTitle": "Başlık",
        "actionOptions": "İşlemler",
        "conversationCategory": "Kategori",
        "conversationTags": "Etiketler"
    },
    "uk": {
        "chatTreeRunning": "🥳🌳ChatTree🌳в роботі!🎉",
        "updateCurrentConversationTree": "🌈 Оновити поточне дерево розмов 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Налаштувати колір фону та прозорість 🎨",
        "toggleConversationTree": "🌳 Показати/сховати дерево розмов 🌳",
        "noDatabaseAndCreationFailed": "Немає бази даних, і не вдалося створити! Скрипт виходить!",
        "mismatchedLink": "Посилання не збігається, будь ласка, оновіть сторінку!",
        "startUpdatingConversationTree": "Почати оновлення дерева розмов",
        "selectedItem": "Ви обрали {item}",
        "successSavingChanges": "Зміни успішно збережено!",
        "codeCopiedToClipboard": "Код скопійовано в буфер обміну!",
        "contentCopied": "Зміст скопійовано!",
        "emptyCommentPrompt": "Коментар порожній. Ви хочете встановити коментар як \\"порожній\\"?",
        "confirmDeleteLinkData": "Посилання виявлене як {item}! Підтверджуєте видалення цього посилання? Всі дані розмов і коментарі будуть видалені!",
        "confirmCurrentURL": "Посилання виявлене як {item}! Підтвердити?",
        "commentSetToEmpty": "Коментар встановлено як \\"порожній\\"",
        "enterCommentFirst": "Будь ласка, спочатку введіть коментар",
        "commentSaved": "Коментар збережено",
        "conversationDataDeleted": "Дані розмови успішно видалено",
        "executeSearchWithQuery": "Виконати пошук: {item}",
        "searchPlaceholder": "Введіть ключові слова для пошуку...",
        "searchButton": "Пошук",
        "searchInContent": "У вмісті розмови",
        "searchInComments": "У коментарях",
        "searchInBoth": "У вмісті та коментарях",
        "goToPrevious": "Перейти до попереднього",
        "goToNext": "Перейти до наступного",
        "numberOfMatches": "{matches} збігів",
        "nodeDetails": "Деталі",
        "enterComment": "Введіть коментар",
        "userCommentSave": "Зберегти",
        "userCommentCancel": "Скасувати",
        "userCommentClear": "Очистити",
        "openAdminPanel": "Панель адміністрування",
        "allCategoriesFilter": "Всі категорії",
        "conversationTitle": "Заголовок",
        "actionOptions": "Дії",
        "conversationCategory": "Категорія",
        "conversationTags": "Теги"
    },
    "ug": {
        "chatTreeRunning": "🥳🌳ChatTree🌳ئىشلىتىلىۋاتىدۇ!🎉",
        "updateCurrentConversationTree": "🌈 نۆۋەتتىكي سۆھبەت تەرەككىنى يېڭىلاڭ 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 فون رەڭگىنى ۋە شېفافلىقىنى تەڭشەڭ 🎨",
        "toggleConversationTree": "🌳 سۆھبەت تەرەككىنى كۆرسىتىش/يوشۇرۇش 🌳",
        "noDatabaseAndCreationFailed": "ماڭلىق يوق، ھەمدە قۇرۇلمىدى! سكرىپت چىقىدۇ!",
        "mismatchedLink": "ئۇلىنىش ماس كەلمىدى، تور بەتنى يېڭىلاڭ!",
        "startUpdatingConversationTree": "سۆھبەت تەرەككىنى يېڭىلاشنى باشلاڭ",
        "selectedItem": "سىز تاللىغان {item}",
        "successSavingChanges": "ئۆزگەرتىشنى ساقلاش مۇۋەپپەقىيەتلىك بولدى!",
        "codeCopiedToClipboard": "كود تەسۋىرلىتىش تاختىسىغا كۆچۈرۈلدى!",
        "contentCopied": "مەزمۇن كۆچۈرۈلدى!",
        "emptyCommentPrompt": "ئىزاھات قۇرۇق. \\"قۇرۇق\\" دەپ بەلگىلەمسىز؟",
        "confirmDeleteLinkData": "{item} ئۇلىنىش تەپلىگەن! بۇ ئۇلىنىشنىڭ ئۇچۇرىنى ئۆچۈرۈشنى جەزملەسىزمۇ؟ بارلىق سۆھبەت ۋە ئىزاھات ئۆچۈرۈلىدۇ!",
        "confirmCurrentURL": "{item} ئۇلىنىش تەپلىگەن! جەزملەسىزمۇ؟",
        "commentSetToEmpty": "ئىزاھات \\"قۇرۇق\\" دەپ بەلگىلەندى",
        "enterCommentFirst": "ئاۋۋال ئىزاھات كىرگۈزۈڭ",
        "commentSaved": "ئىزاھات ساقلاندى",
        "conversationDataDeleted": "سۆھبەت ئۇچۇرى مۇۋەپپەقىيەتلىك ئۆچۈرۈلدى",
        "executeSearchWithQuery": "ئىزدەشنى ئىجرا قىلىدۇ: {item}",
        "searchPlaceholder": "ئىزدەش سۆزىنى كىرگۈزۈڭ...",
        "searchButton": "ئىزدەش",
        "searchInContent": "سۆھبەت مەزمۇنىدا",
        "searchInComments": "ئىزاھاتتا",
        "searchInBoth": "مەزمۇن ۋە ئىزاھاتتا",
        "goToPrevious": "ئالدىنقىغا بېرىش",
        "goToNext": "كېيىنكىگە بېرىش",
        "numberOfMatches": "{matches} دەسلەپتىكى ئۇنۇم",
        "nodeDetails": "نود تەپسىلاتى",
        "enterComment": "ئىزاھات كىرگۈزۈڭ",
        "userCommentSave": "ساقلا",
        "userCommentCancel": "بىكار قىل",
        "userCommentClear": "تازىلا",
        "openAdminPanel": "باشقۇرۇش تاختىسى",
        "allCategoriesFilter": "بارلىق تۈرلەر",
        "conversationTitle": "تېما",
        "actionOptions": "مەشغۇلاتلار",
        "conversationCategory": "تۈر",
        "conversationTags": "بەلگىلەر"
    },
    "vi": {
        "chatTreeRunning": "🥳🌳ChatTree🌳đang chạy!🎉",
        "updateCurrentConversationTree": "🌈 Cập nhật cây trò chuyện hiện tại 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 Điều chỉnh màu nền và độ mờ 🎨",
        "toggleConversationTree": "🌳 Hiển thị/Ẩn cây trò chuyện 🌳",
        "noDatabaseAndCreationFailed": "Không có cơ sở dữ liệu và không thể tạo được! Script thoát!",
        "mismatchedLink": "Liên kết không khớp, vui lòng làm mới trang!",
        "startUpdatingConversationTree": "Bắt đầu cập nhật cây trò chuyện",
        "selectedItem": "Bạn đã chọn {item}",
        "successSavingChanges": "Lưu thay đổi thành công!",
        "codeCopiedToClipboard": "Mã đã được sao chép vào bảng tạm!",
        "contentCopied": "Nội dung đã được sao chép!",
        "emptyCommentPrompt": "Bình luận trống. Bạn có muốn đặt bình luận thành \\"trống\\" không?",
        "confirmDeleteLinkData": "Đã phát hiện liên kết là {item}! Bạn có chắc chắn muốn xóa thông tin của liên kết này không? Tất cả nội dung trò chuyện và bình luận sẽ bị xóa!",
        "confirmCurrentURL": "Đã phát hiện liên kết là {item}! Bạn có xác nhận không?",
        "commentSetToEmpty": "Bình luận đã được đặt thành \\"trống\\"",
        "enterCommentFirst": "Vui lòng nhập bình luận trước",
        "commentSaved": "Bình luận đã được lưu",
        "conversationDataDeleted": "Dữ liệu trò chuyện đã được xóa thành công",
        "executeSearchWithQuery": "Thực hiện tìm kiếm: {item}",
        "searchPlaceholder": "Nhập từ khóa tìm kiếm...",
        "searchButton": "Tìm kiếm",
        "searchInContent": "Trong nội dung cuộc trò chuyện",
        "searchInComments": "Trong bình luận",
        "searchInBoth": "Cả trong nội dung và bình luận",
        "goToPrevious": "Đi đến trước đó",
        "goToNext": "Đi đến tiếp theo",
        "numberOfMatches": "{matches} kết quả phù hợp",
        "nodeDetails": "Chi tiết nút",
        "enterComment": "Nhập bình luận",
        "userCommentSave": "Lưu",
        "userCommentCancel": "Hủy",
        "userCommentClear": "Xóa sạch",
        "openAdminPanel": "Bảng Quản trị",
        "allCategoriesFilter": "Tất cả danh mục",
        "conversationTitle": "Tiêu đề",
        "actionOptions": "Tùy chọn",
        "conversationCategory": "Danh mục",
        "conversationTags": "Thẻ"
    },
     "zh": {
        "chatTreeRunning": "🥳🌳ChatTree🌳运行中！🎉",
        "updateCurrentConversationTree": "🌈 更新当前对话树 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 调整背景颜色和透明度 🎨",
        "toggleConversationTree": "🌳 显示/隐藏对话树 🌳",
        "noDatabaseAndCreationFailed": "没有数据库，并且未能成功创建！脚本退出！",
        "mismatchedLink": "链接不匹配，请刷新页面！",
        "startUpdatingConversationTree": "开始更新对话树",
        "selectedItem": "您选择了{item}",
        "successSavingChanges": "更改保存成功！",
        "codeCopiedToClipboard": "代码已复制到剪贴板！",
        "contentCopied": "内容已复制！",
        "emptyCommentPrompt": "注释为空。是否将注释设置为\\"空\\"？",
        "confirmDeleteLinkData": "监测到链接为 {item}！确认要删除这个链接的信息吗？所有的对话内容和注释都将被删除！",
        "confirmCurrentURL": "监测到链接为 {item}！确认吗？",
        "commentSetToEmpty": "注释已设置为\\"空\\"",
        "enterCommentFirst": "请先输入注释内容",
        "commentSaved": "注释已保存",
        "conversationDataDeleted": "对话数据成功删除",
        "executeSearchWithQuery": "执行搜索：{item}",
        "searchPlaceholder": "输入搜索关键词...",
        "searchButton": "搜索",
        "searchInContent": "对话内容",
        "searchInComments": "用户注释",
        "searchInBoth": "内容与注释",
        "goToPrevious": "转到上一个",
        "goToNext": "转到下一个",
        "numberOfMatches": "{matches} 个匹配项",
        "nodeDetails": "详情",
        "enterComment": "请输入注释",
        "userCommentSave": "保存",
        "userCommentCancel": "取消",
        "userCommentClear": "清空",
        "openAdminPanel": "管理面板",
        "allCategoriesFilter": "所有分类",
        "conversationTitle": "标题",
        "actionOptions": "操作",
        "conversationCategory": "分类",
        "conversationTags": "标签"
    },
        "zh-CN": {
        "chatTreeRunning": "🥳🌳ChatTree🌳运行中！🎉",
        "updateCurrentConversationTree": "🌈 更新当前对话树 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 调整背景颜色和透明度 🎨",
        "toggleConversationTree": "🌳 显示/隐藏对话树 🌳",
        "noDatabaseAndCreationFailed": "没有数据库，并且未能成功创建！脚本退出！",
        "mismatchedLink": "链接不匹配，请刷新页面！",
        "startUpdatingConversationTree": "开始更新对话树",
        "selectedItem": "您选择了{item}",
        "successSavingChanges": "更改保存成功！",
        "codeCopiedToClipboard": "代码已复制到剪贴板！",
        "contentCopied": "内容已复制！",
        "emptyCommentPrompt": "注释为空。是否将注释设置为\\"空\\"？",
        "confirmDeleteLinkData": "监测到链接为 {item}！确认要删除这个链接的信息吗？所有的对话内容和注释都将被删除！",
        "confirmCurrentURL": "监测到链接为 {item}！确认吗？",
        "commentSetToEmpty": "注释已设置为\\"空\\"",
        "enterCommentFirst": "请先输入注释内容",
        "commentSaved": "注释已保存",
        "conversationDataDeleted": "对话数据成功删除",
        "executeSearchWithQuery": "执行搜索：{item}",
        "searchPlaceholder": "输入搜索关键词...",
        "searchButton": "搜索",
        "searchInContent": "对话内容",
        "searchInComments": "用户注释",
        "searchInBoth": "内容与注释",
        "goToPrevious": "转到上一个",
        "goToNext": "转到下一个",
        "numberOfMatches": "{matches} 个匹配项",
        "nodeDetails": "详情",
        "enterComment": "请输入注释",
        "userCommentSave": "保存",
        "userCommentCancel": "取消",
        "userCommentClear": "清空",
        "openAdminPanel": "管理面板",
        "allCategoriesFilter": "所有分类",
        "conversationTitle": "标题",
        "actionOptions": "操作",
        "conversationCategory": "分类",
        "conversationTags": "标签"
    },
    "zh-TW": {
        "chatTreeRunning": "🥳🌳ChatTree🌳運行中！🎉",
        "updateCurrentConversationTree": "🌈 更新當前對話樹 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 調整背景顏色和透明度 🎨",
        "toggleConversationTree": "🌳 顯示/隱藏對話樹 🌳",
        "noDatabaseAndCreationFailed": "沒有資料庫，且未能成功創建！腳本退出！",
        "mismatchedLink": "鏈接不匹配，請刷新頁面！",
        "startUpdatingConversationTree": "開始更新對話樹",
        "selectedItem": "您選擇了{item}",
        "successSavingChanges": "更改保存成功！",
        "codeCopiedToClipboard": "代碼已複製到剪貼板！",
        "contentCopied": "內容已複製！",
        "emptyCommentPrompt": "註釋為空。是否將註釋設置為\\"空\\"？",
        "confirmDeleteLinkData": "監測到鏈接為 {item}！確認要刪除這個鏈接的信息嗎？所有的對話內容和註釋都將被刪除！",
        "confirmCurrentURL": "監測到鏈接為 {item}！確認嗎？",
        "commentSetToEmpty": "註釋已設置為\\"空\\"",
        "enterCommentFirst": "請先輸入註釋內容",
        "commentSaved": "註釋已保存",
        "conversationDataDeleted": "對話數據成功刪除",
        "executeSearchWithQuery": "執行搜索：{item}",
        "searchPlaceholder": "輸入搜索關鍵詞...",
        "searchButton": "搜索",
        "searchInContent": "對話內容",
        "searchInComments": "使用者註釋",
        "searchInBoth": "內容與註釋",
        "goToPrevious": "轉到上一個",
        "goToNext": "轉到下一個",
        "numberOfMatches": "{matches} 個匹配項",
        "nodeDetails": "詳情",
        "enterComment": "請輸入注釋",
        "userCommentSave": "保存",
        "userCommentCancel": "取消",
        "userCommentClear": "清空",
        "openAdminPanel": "管理面板",
        "allCategoriesFilter": "所有類別",
        "conversationTitle": "標題",
        "actionOptions": "操作選項",
        "conversationCategory": "類別",
        "conversationTags": "標籤"
    },
    "zh-HK": {
        "chatTreeRunning": "🥳🌳ChatTree🌳運行中！🎉",
        "updateCurrentConversationTree": "🌈 更新當前對話樹 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 調整背景顏色和透明度 🎨",
        "toggleConversationTree": "🌳 顯示/隱藏對話樹 🌳",
        "noDatabaseAndCreationFailed": "沒有資料庫，且未能成功創建！腳本退出！",
        "mismatchedLink": "鏈接不匹配，請刷新頁面！",
        "startUpdatingConversationTree": "開始更新對話樹",
        "selectedItem": "您選擇了{item}",
        "successSavingChanges": "更改保存成功！",
        "codeCopiedToClipboard": "代碼已複製到剪貼板！",
        "contentCopied": "內容已複製！",
        "emptyCommentPrompt": "註釋為空。是否將註釋設置為\\"空\\"？",
        "confirmDeleteLinkData": "監測到鏈接為 {item}！確認要刪除這個鏈接的信息嗎？所有的對話內容和註釋都將被刪除！",
        "confirmCurrentURL": "監測到鏈接為 {item}！確認嗎？",
        "commentSetToEmpty": "註釋已設置為\\"空\\"",
        "enterCommentFirst": "請先輸入註釋內容",
        "commentSaved": "註釋已保存",
        "conversationDataDeleted": "對話數據成功刪除",
        "executeSearchWithQuery": "執行搜索：{item}",
        "searchPlaceholder": "輸入搜尋關鍵詞...",
        "searchButton": "搜尋",
        "searchInContent": "對話內容",
        "searchInComments": "用戶註釋",
        "searchInBoth": "內容與註釋",
        "goToPrevious": "轉到上一個",
        "goToNext": "轉到下一個",
        "numberOfMatches": "{matches} 個匹配項",
        "nodeDetails": "詳情",
        "enterComment": "請輸入註釋",
        "userCommentSave": "儲存",
        "userCommentCancel": "取消",
        "userCommentClear": "清除",
        "openAdminPanel": "管理面板",
        "allCategoriesFilter": "所有類別",
        "conversationTitle": "標題",
        "actionOptions": "操作選項",
        "conversationCategory": "類別",
        "conversationTags": "標籤"
    },
    "zh-SG": {
       "chatTreeRunning": "🥳🌳ChatTree🌳运行中！🎉",
        "updateCurrentConversationTree": "🌈 更新当前对话树 🌈",
        "adjustBackgroundColorAndOpacity": "🎨 调整背景颜色和透明度 🎨",
        "toggleConversationTree": "🌳 显示/隐藏对话树 🌳",
        "noDatabaseAndCreationFailed": "没有数据库，并且未能成功创建！脚本退出！",
        "mismatchedLink": "链接不匹配，请刷新页面！",
        "startUpdatingConversationTree": "开始更新对话树",
        "selectedItem": "您选择了{item}",
        "successSavingChanges": "更改保存成功！",
        "codeCopiedToClipboard": "代码已复制到剪贴板！",
        "contentCopied": "内容已复制！",
        "emptyCommentPrompt": "注释为空。是否将注释设置为\\"空\\"？",
        "confirmDeleteLinkData": "监测到链接为 {item}！确认要删除这个链接的信息吗？所有的对话内容和注释都将被删除！",
        "confirmCurrentURL": "监测到链接为 {item}！确认吗？",
        "commentSetToEmpty": "注释已设置为\\"空\\"",
        "enterCommentFirst": "请先输入注释内容",
        "commentSaved": "注释已保存",
        "conversationDataDeleted": "对话数据成功删除",
        "executeSearchWithQuery": "执行搜索：{item}",
        "searchPlaceholder": "输入搜索关键词...",
        "searchButton": "搜索",
        "searchInContent": "对话内容",
        "searchInComments": "用户注释",
        "searchInBoth": "内容与注释",
        "goToPrevious": "转到上一个",
        "goToNext": "转到下一个",
        "numberOfMatches": "{matches} 个匹配项",
        "nodeDetails": "详情",
        "enterComment": "请输入注释",
        "userCommentSave": "保存",
        "userCommentCancel": "取消",
        "userCommentClear": "清空",
        "openAdminPanel": "管理面板",
        "allCategoriesFilter": "所有分类",
        "conversationTitle": "标题",
        "actionOptions": "操作",
        "conversationCategory": "分类",
        "conversationTags": "标签"
    }
}`;
    lang = JSON.parse(lang);
    const userLang = navigator.languages.find(l => l in lang) || 'en';
    //const userLang =  'zh-TW';
    //log("currentLang:",userLang);
    globalUserLang = userLang;
    return lang[userLang];

  };
  let globalUserLang;
  const currentLangPack = getLang();

  //log("currentLangPack", currentLangPack);

  function translate(key) {
    return currentLangPack[key] || key;
  }

  const states = {
    mainButton: {
      isDragging: false,
      isMouseOver: false
    },
    url: {
      isValidURL: false,
      url: ''
    },
    treeUpdate: {
      isDOMOperating: false,
    },
    visualization: {
      contentDiv: 0,
      thumbnailSvg: 0,
      panelToggleButton: 0,
    }
  };

  const Default_RootNode_Content = "Chat Starts Here";
  const DB_NAME = 'ChatTreeDB';
  const CONVERSATIONS_STORE_NAME = 'conversations';
  const SEARCH_HISTORY_STORE_NAME = 'searchHistory';
  const USER_SETTINGS_STORE_NAME = 'userSettings';
  let db;

  class DialogueNode {
    constructor(content, type) {
      this.content = content;
      this.type = type;
      this.uuid = generateUUID();
      this.children = [];
      this.comment = '';
    }
  }

  let conversationData = {
    url: null,
    rootNode: new DialogueNode(Default_RootNode_Content, "chatGPT"),
    uuid2pathMap: new Map(),
    uuid2nodeMap: new Map(),
    path2nodeMap: new Map(),
    bookMarked: new Map(),
    timestamp: Date.now(),
    participants: {
      user: {
        name: "UserName",
        avatarURL: "UserAvatarURL",
        avatarHTML: "💕",
      },
      gpt: {
        type: "GPT-3",
      }
    }
  };
  let GPT_Avatar_Config = {
    gpt4_Inner_Html: "<div class=\"relative p-1 rounded-sm h-9 w-9 text-white flex items-center justify-center\" style=\"background-color: rgb(171, 104, 255); width: 36px; height: 36px; \"><svg width=\"41\" height=\"41\" viewBox=\"0 0 41 41\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-md\" role=\"img\"><text x=\"-9999\" y=\"-9999\">ChatGPT</text><path d=\"M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z\" fill=\"currentColor\"></path></svg></div>",
    gpt3_Inner_Html: "<div class=\"relative p-1 rounded-sm h-9 w-9 text-white flex items-center justify-center\" style=\"background-color: rgb(25, 195, 125); width: 36px; height: 36px;\"><svg width=\"41\" height=\"41\" viewBox=\"0 0 41 41\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon-md\" role=\"img\"><text x=\"-9999\" y=\"-9999\">ChatGPT</text><path d=\"M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z\" fill=\"currentColor\"></path></svg></div>",
  }

  let root, treeLayout, svg, svgThumbnail, defs, gLinks, gNodes,
    nodeDrag, canvasDrag, zoom, searchHistoryRecord, chatHistory = [], curMouseOnUUID = null;


  const waitForDomChange = (element) => {
    return new Promise(resolve => {
      const observer = new MutationObserver((mutationsList, observer) => {

        observer.disconnect();
        resolve();
      });
      observer.observe(element, {childList: true, subtree: true});
    });
  };

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const treeOperation = {

    initializeChatTree: async function () {
      if (!states.url.isValidURL) {
        ButtonOperations.showUserNotification(translate("mismatchedLink"));
        return;
      }
      states.treeUpdate.isDOMOperating = true;
      let operatingURL = states.url.url;
      const button = document.querySelector('button.flex.w-full.items-center.gap-3.rounded-md.px-3.py-3.text-sm[data-headlessui-state=""]');

      if (button) {

        const relativeFlexElement = button.querySelector('.relative.flex');
        if (relativeFlexElement) {
          conversationData.participants.user.avatarHTML = relativeFlexElement.innerHTML;

          const imgElement = relativeFlexElement.querySelector('img.rounded-sm');

          if (imgElement) {
            const imgSrc = imgElement.getAttribute('src');
            conversationData.participants.user.avatarURL = imgSrc;
          } else {
            log('Image Element Not Found');
          }
        } else {
          log('Relative Flex Element Not Found');
        }

        const fontSemiboldElement = button.querySelector('.font-semibold');
        if (fontSemiboldElement) {
          conversationData.participants.user.name = fontSemiboldElement.innerHTML;
        } else {
          log('Font Semibold Element Not Found');
        }
      } else {
        let allDivs = DOMOperations.getAllDivs();
        if (allDivs) {
          let userDiv = allDivs[0];
          const imageDiv = userDiv.querySelector('div.flex-shrink-0.flex.flex-col.relative.items-end');
          if (imageDiv) {
            const relativeFlexElement = imageDiv.querySelector('.relative.flex');
            if (relativeFlexElement) {
              conversationData.participants.user.avatarHTML = relativeFlexElement.innerHTML;

              const imgElement = relativeFlexElement.querySelector('img.rounded-sm');

              if (imgElement) {
                const imgSrc = imgElement.getAttribute('src');
                conversationData.participants.user.avatarURL = imgSrc;
              } else {
                log('Image Element Not Found');
              }
            } else {
              log('Relative Flex Element Not Found');
            }
          }
        }
        log('Button Element Not Found');
      }

      if (conversationData.rootNode.content.toLowerCase() === "New Chat".toLowerCase()
      ||conversationData.rootNode.content.toLowerCase() === Default_RootNode_Content.toLowerCase()
        ||conversationData.rootNode.content.toLowerCase() === "Chat Start Here".toLowerCase()) {
        try {
          const targetElement = document.querySelector('.absolute.flex.right-1.z-10.dark\\:text-gray-300.text-gray-800.visible');
          if (targetElement) {
            let siblingElement = targetElement.parentElement.firstElementChild;
            while (siblingElement) {
              if (siblingElement.classList.contains('flex-1') &&
                siblingElement.classList.contains('text-ellipsis') &&
                siblingElement.classList.contains('max-h-5') &&
                siblingElement.classList.contains('overflow-hidden') &&
                siblingElement.classList.contains('break-all') &&
                siblingElement.classList.contains('relative')) {
                log(siblingElement.textContent || siblingElement.innerText);
                conversationData.rootNode.content = siblingElement.textContent
              }
              siblingElement = siblingElement.nextElementSibling;
            }
          } else {
            log('Target element not found.');
          }

          // async function testGetChatDetails() {
          //   const token = await chatgpt.getAccessToken();
          //   chatgpt.getChatDetails(token, ['id', 'title'])
          //     .then(data => {
          //       log("Successfully got chat details:", data);
          //     })
          //     .catch(error => {
          //       console.error("Error in getChatDetails:", error);
          //     });
          // }
          //
          // await testGetChatDetails();
          // 使用 chatgpt.js 库的 getChatData 方法获取聊天数据
          // const chatData = await chatgpt.getChatData('active', 'all', 'all', 'all');
          // //log(chatData);  // 在控制台打印聊天数据
          // conversationData.rootNode.content = chatData.title;

          // 如果需要，你可以在这里添加其他操作，例如将聊天数据发送到你的服务器
        } catch (error) {
          console.error('Error getting chat data:', error);  // 如果出现错误，在控制台打印错误信息
        }
      }
      let allDivs = DOMOperations.getAllDivs();
      if (allDivs.length > 1) {
        const gptDiv = allDivs[1].querySelector('.relative.p-1.rounded-sm.h-9.w-9.text-white.flex.items-center.justify-center');

        if (gptDiv) {
          const computedStyle = window.getComputedStyle(gptDiv);
          const bgColor = computedStyle.backgroundColor;
          log('Background Color:', bgColor);
          if (bgColor === 'rgb(171, 104, 255)') {
            conversationData.participants.gpt.type = 'GPT-4'
          } else if (bgColor === 'rgb(25, 195, 125)') {
            conversationData.participants.gpt.type = 'GPT-3'
          } else {
            log('The background color does not match.');
          }
        } else {
          log('gptDiv not found');
        }
      }
      log("url:", operatingURL);
      let result = DOMOperations.getButtonInfo();
      let hasLeftButton = result.hasLeftButtonUnClicked;
      while (hasLeftButton) {
        if (states.url.url !== operatingURL || !states.treeUpdate.isDOMOperating) {
          log("监测到链接变换! 退出initializeChatTree 函数!");
          states.treeUpdate.isDOMOperating = false;
          return;
        }
        let allChatDivs = DOMOperations.getAllDivs();
        if (allChatDivs.length === 0) {
          log("监测到没有divs:退出初始化!");
          states.treeUpdate.isDOMOperating = false;
          return;
        }
        let j = 0;
        for (; j < allChatDivs.length; j++) {
          if (result.childIndicesPath[j] !== 1) {
            DOMOperations.clickButtonAtDivLevel(0, j);
            log("clicking the ", j, "th div!");
            await waitForDomChange(document.body);
            break;
          }
        }
        if (j === allChatDivs.length) {
          break;
        }
        result = DOMOperations.getButtonInfo();
        log("result:", result);
        hasLeftButton = result.hasLeftButtonUnClicked;
      }
      log("Initializing Over.");
      await this.updateTree(operatingURL);

    },

    //🤖chatGPT版本
    updateTree: async function (url) {
      let allpaths = [];
      log("更新树");
      let operatingURL = url;
      if (states.url.url !== operatingURL) {
        log("监测到链接变换! 退出initializeChatTree 函数!");
        return;
      }
      let allChatDivs = DOMOperations.getAllDivs();
      let hasRightButtonUnClicked = true;
      let curRootDivChoice = 0;


      while (hasRightButtonUnClicked) {
        if (states.url.url !== operatingURL || !states.treeUpdate.isDOMOperating) {
          log("监测到链接变换! 退出updateTree 函数!");
          states.treeUpdate.isDOMOperating = false;
          return;
        }
        hasRightButtonUnClicked = false;
        allChatDivs = DOMOperations.getAllDivs();
        if (allChatDivs.length === 0) {
          log("监测到没有divs:退出更新!");
          states.treeUpdate.isDOMOperating = false;
          return;
        }

        let result = DOMOperations.getButtonInfo();
        for (let i = curRootDivChoice; i < allChatDivs.length; i++) {
          if (states.url.url !== operatingURL || !states.treeUpdate.isDOMOperating) {
            log("监测到链接变换! 退出initializeChatTree 函数!");
            states.treeUpdate.isDOMOperating = false;
            return;
          }
          let contentResult = DOMOperations.getTextContent(allChatDivs[i], i);
          let path = result.childIndicesPath.slice(0, i + 1);
          log("path", path, "content:", contentResult);
          let isExisting = conversationData.path2nodeMap.get(arrayToKey(path));
          if (isExisting) {
            log("isExisting!", isExisting);
            log("contentResult.contentText", contentResult.contentText);
            if (isExisting.content === contentResult.contentText) {
              allpaths.push(arrayToKey(path));
              continue;
            } else {
              isExisting.content = contentResult.contentText
              allpaths.push(arrayToKey(path));
              continue;
            }
          }
          let father = i > 0 ? conversationData.path2nodeMap.get(arrayToKey(result.childIndicesPath.slice(0, i))) : conversationData.rootNode;
          let newDialogueNode = new DialogueNode(contentResult.contentText, contentResult.userType);
          log("father :", father);
          father.children.push(newDialogueNode);
          log("newDialogueNode:", newDialogueNode);
          log("dataRenewing:", conversationData);
          conversationData.uuid2pathMap.set(newDialogueNode.uuid, path);
          conversationData.uuid2nodeMap.set(newDialogueNode.uuid, newDialogueNode);
          conversationData.path2nodeMap.set(arrayToKey(path), newDialogueNode);
          log("father:", father);
          allpaths.push(arrayToKey(path));
        }

        let curRootChoice = allChatDivs.length - 1;
        for (; curRootChoice >= 0; curRootChoice--) {
          if (url !== states.url.url) {
            log("发现url变化! 退出更新树");
            states.treeUpdate.isDOMOperating = false;
            return;
          }
          if (result.childIndicesPath[curRootChoice] !== result.childrenCountPath[curRootChoice]) {
            DOMOperations.clickButtonAtDivLevel(1, curRootChoice);
            let ableToContinue = false;
            while (!ableToContinue) {
              await sleep(50);
              let result1 = DOMOperations.getButtonInfo();
              let childIndecices = result1.childIndicesPath;

              if (childIndecices.length !== result.childIndicesPath.length) {
                ableToContinue = true;
                break;
              }
              for (let i = 0; i < childIndecices.length; i++) {
                if (childIndecices[i] !== result.childIndicesPath[i]) {
                  ableToContinue = true;
                  break;
                }
              }
            }
            curRootDivChoice = curRootChoice;
            hasRightButtonUnClicked = true;
            break;
          }
        }
        if (!hasRightButtonUnClicked) {
          log("所有的节点都加进来了!")
          log("准备保存的data:", conversationData);
          if (states.url.url !== operatingURL || window.location.href !== operatingURL) {
            log("监测到链接变化, 停止更新!");
            states.treeUpdate.isDOMOperating = false;
            return;
          }
          try {
            await dbOperations.saveConversationsData(conversationData);
            await dbOperations.loadConversationsData(operatingURL);
          } catch (error) {
            console.error("Error:", error);
          }
          log("重新读取到的data:", conversationData);
          break;
        }
      }
      states.treeUpdate.isDOMOperating = false;
      dbOperations.initConversationData()
        .then(information => {
          controlPanelKit.renderConversations(chatHistory);
        })
        .catch(error => console.error(error));
    },
    jumpToDialogueItem: async function (uuid) {
      if (!uuid || !conversationData.uuid2pathMap.get(uuid) || uuid === conversationData.rootNode.uuid) {
        return;
      }
      let path = conversationData.uuid2pathMap.get(uuid);
      if (!path) {
        log("没有从map中获取路径! 请检查!")
        return;
      }

      let result = DOMOperations.getButtonInfo();
      log("path:", path);
      let i = 0;
      while (i < path.length) {
        result = DOMOperations.getButtonInfo();
        if (path[i] === result.childIndicesPath[i]) {
          i++;
          continue;
        }
        if (path[i] < result.childIndicesPath[i]) {
          DOMOperations.clickButtonAtDivLevel(0, i);
          log("path:", path);
          result = DOMOperations.getButtonInfo();
          await sleep(200);
          continue;
        }
        if (path[i] > result.childIndicesPath[i]) {
          DOMOperations.clickButtonAtDivLevel(1, i);
          log("path:", path);
          result = DOMOperations.getButtonInfo();
          await sleep(200);

          continue;
        }
      }
      let j = 0;
      for (; j < path.length; j++) {
        if (path[j] !== result.childIndicesPath[j]) {
          log("在:", j, "没有成功转到!");
          log(path, result.childIndicesPath);
          break;
        }
      }
      sleep(200);
      if (j === path.length) {
        let allDivs = DOMOperations.getAllDivs();
        log("path", path, "result.childIndicesPath", result.childIndicesPath, "allDivs[path.length - 1]", allDivs[path.length - 1]);

        function highlightDiv1() {
          allDivs[path.length - 1].classList.add('highlight');
          setTimeout(() => {
            allDivs[path.length - 1].classList.remove('highlight');
          }, 4000);
        }

        function highlightDiv2() {
          allDivs[path.length - 1].classList.add('highlightt');
          setTimeout(() => {
            allDivs[path.length - 1].classList.remove('highlightt');
          }, 4000);
        }

        function blinkText() {
          allDivs[path.length - 1].classList.add('blinkText');
          setTimeout(() => {
            allDivs[path.length - 1].classList.remove('blinkText');
          }, 5000);
        }

        allDivs[path.length - 1].scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'});
        const htmlClass = document.documentElement.getAttribute('class');
        if (htmlClass && htmlClass.includes('dark')) {
          highlightDiv1();
        } else {
          highlightDiv2();
        }
        setTimeout(() => {
          allDivs[path.length - 1].scrollIntoView({behavior: 'smooth', block: 'center', inline: 'start'});
          const htmlClass = document.documentElement.getAttribute('class');
          if (htmlClass && htmlClass.includes('dark')) {
            highlightDiv1();
          } else {
            highlightDiv2();
          }
        }, 1000);
        log("成功转到!");
      }
    },

  };

  const urlOperations = {
    getCurrentURL: function () {
      return window.location.href;
    },

    isValidURL: function (url) {
      const pattern = /^https:\/\/chat\.openai\.com\/c\/[a-z0-9\-]+\/?$/;
      return pattern.test(url);
    },

    isNonUniqueURL: function (url) {
      const nonUniquePatterns = [
        /^https:\/\/chat\.openai\.com\/?$/,
        /^https:\/\/chat\.openai\.com\/\?model=.+$/
      ];
      return nonUniquePatterns.some(pattern => pattern.test(url));
    },
    getCurURLInfo: function () {
      let curURL = window.location.href;
      let isCurURLValid = this.isValidURL(curURL);
      let isCurURLUnique = !this.isNonUniqueURL(curURL);
      return {
        curURL: curURL,
        isCurURLValid: isCurURLValid,
        isCurURLUnique: isCurURLUnique,
      };
    },
    observeTargetChanges: function () {
      let lastURL = window.location.href;
      if (urlOperations.isValidURL(lastURL)) {
        urlOperations.handleURLChange(lastURL);
        states.url.url = window.location.href;
        states.url.isValidURL = true;
      }

      function callback(mutationsList, observer) {
        const currentURL = window.location.href;
        log("currentURL:", currentURL);
        if (urlOperations.isValidURL(currentURL)) {
          if (currentURL !== lastURL) {
            log("URL changed:", currentURL);
            lastURL = currentURL;
            urlOperations.handleURLChange(currentURL);
            states.treeUpdate.isDOMOperating = false;
          } else {
            log("Current URL:", currentURL);
          }
        } else if (urlOperations.isNonUniqueURL(currentURL)) {
          log("Non-unique URL:", currentURL, " detected. Please refresh the page.");
          urlOperations.handleURLChange(currentURL);
        }

      };


      let outter_observer;
      let inner_observer;
      let curState = null;

      const startObserving = (target, config, callback, observer) => {
        if (observer) {
          observer.disconnect();
        }
        observer = new MutationObserver(callback);
        observer.observe(target, config);
        log('Started observing:', target);
        return observer;
      };
      window.addEventListener("resize", function () {
        checkCurrentState();
      });
      const checkCurrentState = () => {
        const flexDiv = document.querySelector('.flex-shrink-0.overflow-x-hidden.dark.bg-gray-900');
        const htmlTag = document.querySelector('html');

        if (flexDiv && curState !== 1) {
          log('Switched to State 1.');
          curState = 1;

          const config = {attributes: true, attributeFilter: ['style']};

          outter_observer = startObserving(htmlTag, config, (mutations) => {
            if (mutations.some(m => m.type === 'attributes' && m.attributeName === 'style')) {
              log('HTML style changed.');
              checkCurrentState();
            }
          }, outter_observer);

          const innerConfig = {childList: true, subtree: true};
          inner_observer = startObserving(flexDiv, innerConfig, (mutations) => {
            if (mutations.some(m => m.type === 'childList')) {
              log('FlexDiv child list changed.');
              callback();
              checkCurrentState();
            }
          }, inner_observer);
        } else if (!flexDiv && curState !== 2) {
          log('Switched to State 2.');
          curState = 2;
          const config = {childList: true, subtree: true};
          outter_observer = startObserving(document.body, config, (mutations) => {
            if (mutations.some(m => m.type === 'childList')) {
              log('Body child list changed.');

              const conversationList = document.querySelector('#headlessui-portal-root');
              if (conversationList) {
                log('Conversation List Detected.');
                inner_observer = startObserving(conversationList, config, (mutations) => {
                  if (mutations.some(m => m.type === 'childList')) {
                    log('Conversation List child list changed.');
                    callback();
                  }
                }, inner_observer);
              }

              checkCurrentState();
            }
          }, outter_observer);
        }
      };
      checkCurrentState();
    },
    handleURLChange: function (url) {
      log("In handleURLChange, Data:", conversationData);
      if (urlOperations.isNonUniqueURL(url)) {
        states.url.isValidURL = false;
        states.url.url = '';
        states.treeUpdate.isDOMOperating = false;
        conversationData = {
          url: null,
          rootNode: new DialogueNode(Default_RootNode_Content, "chatGPT"),
          uuid2pathMap: new Map(),
          uuid2nodeMap: new Map(),
          path2nodeMap: new Map(),
          bookMarked: new Map(),
          timestamp: Date.now(),
          participants: {
            user: {
              name: "UserName",
              avatarURL: "UserAvatarURL",
              avatarHTML: "User",
            },
            gpt: {
              type: "GPT-3",
            }
          }
        };
        root = d3.hierarchy(conversationData.rootNode);
        const widthPerNode = 30;
        const heightPerNode = 30;
        treeLayout = d3.tree().nodeSize([widthPerNode, heightPerNode]);
        treeLayout(root);
        settingsKit.refreshTree();
        log("请刷新页面或者转到具有对话信息的页面从而获取正确的链接");
      } else {
        states.url.isValidURL = true;
        states.url.url = url;
        dbOperations.loadConversationsData(url).then(loadeddata => {
          log("Loaded data for URL:", loadeddata);
          conversationData = loadeddata;
          root = d3.hierarchy(conversationData.rootNode);
          const widthPerNode = 30;
          const heightPerNode = 30;
          treeLayout = d3.tree().nodeSize([widthPerNode, heightPerNode]);

          treeLayout(root);
          settingsKit.refreshTree();
        }).catch(error => {
          console.error("Error loading data:", error);
        });
      }
    }
  };

  let GlobalMainTreeBtnColorSettings = {};
  let GlobalMainTreeBtnPositionSettings = {};
  const dbOperations = {
    initDatabase: function () {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onerror = event => {
          console.error("Detailed Error:", event);
          reject("Error opening database:", event);
        };

        request.onupgradeneeded = event => {
          log("升级数据库!");
          db = event.target.result;
          if (!db.objectStoreNames.contains(CONVERSATIONS_STORE_NAME)) {
            db.createObjectStore(CONVERSATIONS_STORE_NAME, {keyPath: "url"});
          }
          if (!db.objectStoreNames.contains(SEARCH_HISTORY_STORE_NAME)) {
            db.createObjectStore(SEARCH_HISTORY_STORE_NAME, {keyPath: "id"});
            const initSearchHistory = {id: 'searchHistory', records: []};
            const transaction = event.target.transaction;
            const historyStore = transaction.objectStore(SEARCH_HISTORY_STORE_NAME);
            historyStore.add(initSearchHistory);
          }
          if (!db.objectStoreNames.contains(USER_SETTINGS_STORE_NAME)) {
            db.createObjectStore(USER_SETTINGS_STORE_NAME, {keyPath: "id"});
            const transaction = event.target.transaction;
            const userSettingsStore = transaction.objectStore(USER_SETTINGS_STORE_NAME);
            const mainTreeBtnColorSettings = {id: 'mainTreeBtn', color: '#0FD126', opacity: 0.9};
            userSettingsStore.add(mainTreeBtnColorSettings);
            const mainTreeBtnPosSettings = {id: 'mainTreeBtnPos', top: '20px', left: '20px'};
            userSettingsStore.add(mainTreeBtnPosSettings);
          }
        };
        request.onsuccess = event => {
          db = event.target.result;
          dbOperations.getSearchHistory()
            .then(records => {
              log('Got search history:', records);
            })
            .catch(error => console.error(error));
          dbOperations.getMainTreeBtnSettings('mainTreeBtn')
            .then(MainTreeBtnSettings => {
              log('Got MainTreeBtnSettings:', MainTreeBtnSettings);
              GlobalMainTreeBtnColorSettings = MainTreeBtnSettings;
              treeMainBtn.style.background = GlobalMainTreeBtnColorSettings.color;
              treeMainBtn.style.opacity = GlobalMainTreeBtnColorSettings.opacity;
            })
            .catch(error => console.error(error));
          dbOperations.getMainTreeBtnSettings('mainTreeBtnPos')
            .then(mainTreeBtnPos => {
              log('Got mainTreeBtnPosSettings:', mainTreeBtnPos);
              GlobalMainTreeBtnPositionSettings = mainTreeBtnPos;
              treeMainBtn.style.top = GlobalMainTreeBtnPositionSettings.top;
              treeMainBtn.style.left = GlobalMainTreeBtnPositionSettings.left;
            })
            .catch(error => console.error(error));
          dbOperations.initConversationData()
            .then(information => {
              log("information:", information);
              log('initConversationData:', chatHistory);
              controlPanelKit.init();
              controlPanelKit.renderConversations(chatHistory);
              controlPanelKit.updateCategorySelect();
            })
            .catch(error => console.error(error));
          resolve();
        };
      });
    },

    initConversationData: function () {
      if(!db){
        return;
      }
      return new Promise((resolve, reject) => {
        let information = {
          conversations: []
        };

        const transaction = db.transaction([CONVERSATIONS_STORE_NAME], "readwrite");
        const objectStore = transaction.objectStore(CONVERSATIONS_STORE_NAME);

        // 获取现有的 "conversations_information" 对象（如果存在）
        const getRequest = objectStore.get("conversations_information");

        getRequest.onsuccess = event => {
          if (getRequest.result) {
            objectStore.delete("conversations_information");
          }

          // 现在，我们可以遍历对象存储中的每个对象
          objectStore.openCursor().onsuccess = event => {
            const cursor = event.target.result;

            if (cursor) {
              const url = cursor.value.url;

              if (url && !url.includes("conversations_information")) {
                const id = url.split('/').pop();
                const safeId = id.replace(/-/g, '');

                information.conversations.push({
                  id: safeId,
                  topic: cursor.value.rootNode.content,
                  link: url,
                  categories: cursor.value.categories || [], // 新增字段
                  chatTreeTags: cursor.value.chatTreeTags || [] // 新增字段
                });
              }
              cursor.continue();
            } else {
              const putRequest = objectStore.put({
                url: "conversations_information",
                data: information
              });

              putRequest.onsuccess = event => {
                log("Information updated successfully.");
                resolve(information);
              };

              putRequest.onerror = event => {
                console.error("Failed to update information.", event.target.error);
                reject(event.target.error);
              };
            }
            chatHistory = information.conversations;
          };
        };

        getRequest.onerror = event => {
          console.error("Failed to get information.", event.target.error);
          reject(event.target.error);
        };
      });
    },


    addOrDeleteTagOrClassToURL: async function (url, isTag, value, isAdd) {
      log("In DBOper:", "url:",url, "isTag:",isTag, "value:",value, "isAdd:",isAdd);

      if (!url || !urlOperations.isValidURL(url)) {
        return;
      }
      return new Promise((resolve, reject) => {
        if (!db) {
          console.error("加载数据:Database has not been initialized.");
          return;
        }
        if (!url) {
          reject("加载数据:No URL key specified.");
          return;
        }
        const transaction = db.transaction([CONVERSATIONS_STORE_NAME], "readwrite");
        const objectStore = transaction.objectStore(CONVERSATIONS_STORE_NAME);
        const request = objectStore.get(url);

        request.onsuccess = event => {
          let result = event.target.result;
          log("result:",result);
          if (isAdd) {
            if(!result.chatTreeTags){
              result.chatTreeTags = [];
            }
            if(!result.categories){
              result.categories = [];
            }
            if (isTag && !result.chatTreeTags.includes(value)) {
              result.chatTreeTags.push(value);
              log("added!");
            }
            else if (!isTag && !result.categories.includes(value)) {
              result.categories.push(value);
              log("added!");
            }
          } else {
            if (isTag && result.chatTreeTags.includes(value)) {
              result.chatTreeTags = result.chatTreeTags.filter(tag => tag != value);
              log("deleted!");
            }
          else if (!isTag && result.categories.includes(value)) {
              result.categories = result.categories.filter(tag => tag != value);
              log("deleted!");
            }
          }
          dbOperations.saveConversationsData(result)
            .then(() => dbOperations.initConversationData())
            .then(information => {
              controlPanelKit.updateCategorySelect();
            })
            .catch(error => {
              console.error(error);
            });
        };
        request.onerror = event => reject("Error loading data:", event.target.errorCode);
      });

    },


    saveConversationsData: function (data) {
      if (data.url === null) {
        log("保存数据:No URL key specified.");
        return;
      }
      return new Promise((resolve, reject) => {
        if (!db) {
          console.error("保存数据:Database has not been initialized.");
          return;
        }
        if (!data.url) {
          reject("保存数据:No URL key specified.");
          return;
        }
        const transaction = db.transaction([CONVERSATIONS_STORE_NAME], "readwrite");
        const objectStore = transaction.objectStore(CONVERSATIONS_STORE_NAME);
        const request = objectStore.put(data);
        request.onsuccess = () => resolve();
        request.onerror = event => reject("Error saving data:", event.target.errorCode);
      });
    },
    getMainTreeBtnSettings: function (key) {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([USER_SETTINGS_STORE_NAME], 'readonly');
        const store = transaction.objectStore(USER_SETTINGS_STORE_NAME);
        const request = store.get(key);
        request.onsuccess = function (event) {
          const settings = event.target.result;
          log(settings);
          resolve(settings);
        };

        request.onerror = function (event) {
          console.error('读取设置失败', event.target.errorCode);
          reject(event.target.errorCode);
        };
      });
    },
    updateMainTreeBtnSettings: function (newSettings) {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([USER_SETTINGS_STORE_NAME], 'readwrite');
        const store = transaction.objectStore(USER_SETTINGS_STORE_NAME);
        const request = store.put(newSettings);

        request.onsuccess = function (event) {
          log('设置更新成功');
          resolve();
        };
        request.onerror = function (event) {
          console.error('更新设置失败', event.target.errorCode);
          reject(event.target.errorCode);
        };
      });
    },

    changeConversationDataTopic: async function (url, newTopic) {
      if (!url || !urlOperations.isValidURL(url)) {
        return;
      }
      return new Promise((resolve, reject) => {
        if (!db) {
          console.error("加载数据:Database has not been initialized.");
          return;
        }
        if (!url) {
          reject("加载数据:No URL key specified.");
          return;
        }
        const transaction = db.transaction([CONVERSATIONS_STORE_NAME], "readwrite");
        const objectStore = transaction.objectStore(CONVERSATIONS_STORE_NAME);
        const request = objectStore.get(url);

        request.onsuccess = event => {
          let result = event.target.result;
          result.rootNode.content = newTopic;
          dbOperations.saveConversationsData(result);
        };
        request.onerror = event => reject("Error loading data:", event.target.errorCode);
      });
    },
    loadConversationsData: function (url) {
      if (!url || !urlOperations.isValidURL(url)) {
        return;
      }
      return new Promise((resolve, reject) => {
        if (!db) {
          console.error("加载数据:Database has not been initialized.");
          return;
        }
        if (!url) {
          reject("加载数据:No URL key specified.");
          return;
        }
        const transaction = db.transaction([CONVERSATIONS_STORE_NAME], "readwrite");
        const objectStore = transaction.objectStore(CONVERSATIONS_STORE_NAME);
        const request = objectStore.get(url);

        request.onsuccess = event => {
          let result = event.target.result;
          log(" resultOfRequest:", result);
          if (!result) {
            let conversationData = {
              url: url,
              rootNode: new DialogueNode(Default_RootNode_Content, "chatGPT"),
              uuid2pathMap: new Map(),
              uuid2nodeMap: new Map(),
              path2nodeMap: new Map(),
              bookMarked: new Map(),
              timestamp: Date.now(),
              participants: {
                user: {
                  name: "UserName",
                  avatarURL: "UserAvatarURL",
                  avatarHTML: "User",
                },
                gpt: {
                  type: "GPT-3",
                }
              }
            };
            conversationData.uuid2nodeMap.set(conversationData.rootNode.uuid, conversationData.rootNode);
            conversationData.uuid2pathMap.set(conversationData.rootNode.uuid, []);
            conversationData.path2nodeMap.set('', conversationData.rootNode);
            log("在load中: data", conversationData);

            const addRequest = objectStore.add(conversationData);
            addRequest.onsuccess = () => {
              log("返回data:", conversationData);
              resolve(conversationData);
            }
            addRequest.onerror = event => reject("Error creating new data:", event.target.errorCode);
          } else {
            log("dataExisting!");
            conversationData = result;
            if (!conversationData.bookMarked) {
              conversationData.bookMarked = new Map();
            }
            if (!conversationData.participants) {
              conversationData.participants = {
                user: {
                  name: "UserName",
                  avatarURL: "UserAvatarURL",
                  avatarHTML: "User",
                },
                gpt: {
                  type: "GPT-3",
                }
              }
            }
            root = d3.hierarchy(conversationData.rootNode);
            const widthPerNode = 30;
            const heightPerNode = 30;
            treeLayout = d3.tree().nodeSize([widthPerNode, heightPerNode]);
            treeLayout(root);
            settingsKit.refreshTree();
            resolve(result);
          }
        };
        request.onerror = event => reject("Error loading data:", event.target.errorCode);
      });
    },

    deleteConversationData: function (url) {
      return new Promise((resolve, reject) => {
        if (!url || !urlOperations.isValidURL(url)) {
          reject('Invalid URL');
          return;
        }

        if (!db) {
          console.error('删除数据: Database has not been initialized.');
          reject('Database not initialized');
          return;
        }
        const transaction = db.transaction([CONVERSATIONS_STORE_NAME], 'readwrite');
        const objectStore = transaction.objectStore(CONVERSATIONS_STORE_NAME);
        const deleteRequest = objectStore.delete(url);

        deleteRequest.onsuccess = () => {
          log(`Data for URL ${url} has been deleted.`);
          resolve();
        };
        deleteRequest.onerror = event => {
          console.error('Error deleting data:', event.target.errorCode);
          reject(event.target.errorCode);
        };
      });
    },
    addSearchRecord: function (records) {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([SEARCH_HISTORY_STORE_NAME], 'readwrite');
        const store = transaction.objectStore(SEARCH_HISTORY_STORE_NAME);

        const request = store.put({id: 'searchRecords', records: records});

        request.onsuccess = () => {
          log('搜索记录已成功更新');
          resolve();
        };

        request.onerror = () => {
          console.error('更新搜索记录时出错');
          reject(new Error('更新搜索记录时出错'));
        };
      });
    },
    getSearchHistory: function () {
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([SEARCH_HISTORY_STORE_NAME], 'readonly');
        const store = transaction.objectStore(SEARCH_HISTORY_STORE_NAME);
        const request = store.get('searchRecords');

        request.onsuccess = event => {
          const records = event.target.result?.records || [];
          log('搜索历史记录:', records);
          searchHistoryRecord = records;
          resolve(records);
        };

        request.onerror = event => {
          console.error('获取搜索历史记录失败');
          reject(new Error('获取搜索历史记录失败'));
        };
      });
    }
  };

  const DOMOperations = {
    getAllDivs: function () {
      return document.querySelectorAll('div[data-testid^="conversation-turn-"]');

    },
    clickButtonAtDivLevel: function (buttonIndex, divLevel = -1,) {
      let allChatDivs = DOMOperations.getAllDivs();
      let conversationDiv = allChatDivs[divLevel];
      if (conversationDiv) {

        const buttonInfoDiv = conversationDiv.querySelector('.text-xs.flex.items-center');

        let buttons = buttonInfoDiv.querySelectorAll("button");
        log("In clickButtonAtDivLevel", "divLevel: ", divLevel, "buttons:", buttons);
        buttons[buttonIndex].click();
      } else {
        log("TargetDiv Not found!");
      }

    },
    getButtonInfo: function () {
      log("In getButtonInfo!");
      let hasRightButtonUnClicked = false;
      let hasLeftButtonUnClicked = false;
      let allChatDivs = DOMOperations.getAllDivs();
      let childIndicesPath = [];
      let childrenCountPath = [];
      for (let i = 0; i < allChatDivs.length; i++) {
        let div = allChatDivs[i];
        //text-xs flex items-center justify-center gap-1 absolute left-0 top-2 -ml-4 -translate-x-full gizmo:top-1 gizmo:-ml-6 group:hover-visible visible
        //text-xs flex items-center justify-center gap-1 self-center pt-2 visible
        const buttonInfoDiv = div.querySelector('.text-xs.flex.items-center');
        if (buttonInfoDiv) {
          let span = buttonInfoDiv.querySelector("span");
          if (span) {
            let spanText = span.innerText || span.textContent;
            let match = spanText.match(/(\d+) \/ (\d+)/);
            if (match) {
              let currentVersion = parseInt(match[1], 10);
              let totalVersions = parseInt(match[2], 10);
              childIndicesPath.push(currentVersion);
              childrenCountPath.push(totalVersions);
            } else {
              childIndicesPath.push(1);
              childrenCountPath.push(1);
            }
          } else {
            childIndicesPath.push(1);
            childrenCountPath.push(1);
          }
        } else {
          log("!didNot find the targetDiv of buttons!");
          childIndicesPath.push(1);
          childrenCountPath.push(1);
        }
      }
      log("divlength:", allChatDivs.length, "childIndices:", childIndicesPath, "childrenCount", childrenCountPath);
      for (let i = 0; i < childrenCountPath.length; i++) {
        if (childIndicesPath[i] !== 1) hasLeftButtonUnClicked = true;
        if (childIndicesPath[i] !== childrenCountPath[i]) hasRightButtonUnClicked = true;
      }
      return {
        childIndicesPath: childIndicesPath,
        childrenCountPath: childrenCountPath,
        hasRightButtonUnClicked: hasRightButtonUnClicked,
        hasLeftButtonUnClicked: hasLeftButtonUnClicked
      };
    },


    getTextContent: function (div, i) {
      let isUser = null;
      let isGPT = null;
      if (i % 2) {
        isGPT = div.querySelector(".markdown.prose");
      } else {
        isUser = div.querySelector('div.flex.flex-col.items-start.gap-3.overflow-x-auto.whitespace-pre-wrap.break-words');
      }
      let userType = isUser ? "用户" : "chatGPT";
      if (!userType) {
        userType = i % 2 ? "chatGPT" : "用户";
      }
      let contentText;
      if (userType === "用户")
        if (isUser)
          contentText = isUser.innerText;
        else
          contentText = '';
      else {
        if (isGPT)
          contentText = isGPT.innerHTML;
        else
          contentText = '';
      }
      return {
        userType: userType,
        contentText: contentText
      }
    }

  };

  function arrayToKey(arr) {
    return arr.join('|');
  }

  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  function start() {
    ButtonOperations.showUserNotification(translate("chatTreeRunning"));
    dbOperations.initDatabase().then(() => {
      if (!db) {
        ButtonOperations.showUserNotification(translate("noDatabaseAndCreationFailed"));
        return;
      }
      log("Database initialized successfully.");
      log("database:", db);
      urlOperations.observeTargetChanges();
    }).catch(error => {
      console.error("Error initializing database:", error);
    });
  }

  function toggleSvgShow(isShowSvgButton = 0) {
    let mainSvg = document.getElementById("mainSvg")
    let mainSvgDiv = document.getElementById("mainSvgDiv")
    let thumbnail = document.getElementById("thumbnailSvg")
    let isMainSvgsDisplayed = mainSvgDiv.style.display;
    if (states.visualization.thumbnailSvg === 0) {
      states.visualization.thumbnailSvg = thumbnail.getAttribute("visibility");
      states.visualization.contentDiv = contentDiv.style.display;
      states.visualization.panelToggleButton = panelToggleButton.style.display;
    }
    log("states.visualization.thumbnailSvg", states.visualization.thumbnailSvg);
    if (isMainSvgsDisplayed === 'block') {
      managePanel.style.display = 'none';
      mainSvgDiv.style.display = "none";
      settingsContainer.style.display = "none";
      searchContainer.style.display = 'none';
      mainSvg.setAttribute("visibility", "hidden");
      if (states.visualization.thumbnailSvg === "visible") {
        thumbnail.setAttribute("visibility", "hidden");
      }
      if (states.visualization.contentDiv === 'block') {
        contentDiv.style.display = 'none';
      }
      panelToggleButton.style.display = 'none';
      commentForm.style.display = 'none';
      document.documentElement.style.overflow = '';

    } else if (isShowSvgButton) {
      mainSvgDiv.style.display = "block";
      settingsContainer.style.display = "block";
      searchContainer.style.display = 'flex';
      mainSvg.setAttribute("visibility", "visible");
      if (states.visualization.contentDiv === 'block') {
        contentDiv.style.display = 'block';
      }
      if (states.visualization.thumbnailSvg === "visible") {
        thumbnail.setAttribute("visibility", "visible");
      }
      panelToggleButton.style.display = 'block';
      states.visualization.thumbnailSvg = 0;
      states.visualization.contentDiv = 0;
      document.documentElement.style.overflow = 'hidden';
    }
  }


  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      log('Esc key was pressed');
      toggleSvgShow();
    }
  });

  let treeMainBtn = document.createElement("button");

  let isDragging = false;
  let isMouseOver = false;
  let offsetX, offsetY;
  let menu;
  let colorPicker, opacityPicker;

  const ButtonOperations = {
    createButton: function () {
      treeMainBtn.style.display = 'none';
      treeMainBtn.className = 'main-button'
      treeMainBtn.id = "chatTreeBtn";
      treeMainBtn.innerHTML = "🌳ChatTree🌳";
      treeMainBtn.style.position = "fixed";
      //treeMainBtn.style.right = '20px';
      //treeMainBtn.style.top =   '20px';
      try {
        treeMainBtn.style.left = GlobalMainTreeBtnPositionSettings.left ? GlobalMainTreeBtnPositionSettings.left : '20px';
        treeMainBtn.style.top = GlobalMainTreeBtnPositionSettings.top ? GlobalMainTreeBtnPositionSettings.top : '20px';
      } catch (e) {
        treeMainBtn.style.right = '30%';
        treeMainBtn.style.top = '20px';
      }
      treeMainBtn.style.zIndex = "9999";
      treeMainBtn.style.resize = "both";
      treeMainBtn.style.width = "150px";
      treeMainBtn.style.height = "30px";
      treeMainBtn.style.backgroundColor = GlobalMainTreeBtnColorSettings ? GlobalMainTreeBtnColorSettings.color : "rgb(16,209,38)";
      treeMainBtn.style.opacity = GlobalMainTreeBtnColorSettings ? GlobalMainTreeBtnColorSettings.opacity : "0.9";
      treeMainBtn.style.borderRadius = "12px";
      document.body.appendChild(treeMainBtn);
      treeMainBtn.style.display = 'block';


      treeMainBtn.addEventListener("mouseenter", ButtonOperations.showMenu);
      treeMainBtn.addEventListener("mouseleave", ButtonOperations.hideMenuIfNotOver);
      treeMainBtn.addEventListener("mousedown", ButtonOperations.onMouseDown);
      treeMainBtn.addEventListener("click", ButtonOperations.onClick);
    },
    onMouseDown: function (e) {
      if (e.button !== 0) return;
      let rect = treeMainBtn.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      isDragging = true;
      window.addEventListener("mousemove", ButtonOperations.onMouseMove);
      window.addEventListener("mouseup", ButtonOperations.onMouseUp);
    },
    onMouseMove: function (e) {
      if (!isDragging) return;
      ButtonOperations.hideMenu();
      let top = e.clientY - offsetY;
      let left = e.clientX - offsetX;
      let maxWidth = window.innerWidth;
      let maxHeight = window.innerHeight;
      let elementWidth = treeMainBtn.offsetWidth;
      let elementHeight = treeMainBtn.offsetHeight;
      if (left < 0) {
        left = 0;
      } else if (left > maxWidth - elementWidth) {
        left = maxWidth - elementWidth;
      }
      if (top < 0) {
        top = 0;
      } else if (top > maxHeight - elementHeight) {
        top = maxHeight - elementHeight;
      }
      treeMainBtn.style.left = left + "px";
      treeMainBtn.style.top = top + "px";
      treeMainBtn.style.right = "auto";
      treeMainBtn.style.bottom = "auto";
    },
    onMouseUp: function () {
      isDragging = false;
      const newSettings = {id: 'mainTreeBtnPos', left: treeMainBtn.style.left, top: treeMainBtn.style.top};
      dbOperations.updateMainTreeBtnSettings(newSettings).then(() => {
      }).catch(error => {
        console.error("Error saving Change:", error);
      });
      window.removeEventListener("mousemove", ButtonOperations.onMouseMove);
      window.removeEventListener("mouseup", ButtonOperations.onMouseUp);
    },
    onClick: function (e) {
      if (isDragging) {
        e.stopPropagation();
        e.preventDefault();
        ButtonOperations.hideMenu();
      }
    },
    showMenu: function () {
      if (isDragging) return;
      isMouseOver = true;
      if (menu) return;
      menu = document.createElement("div");
      let updateCurrentConversationTreeText = translate("updateCurrentConversationTree");
      let adjustBackgroundColorAndOpacityText = translate("adjustBackgroundColorAndOpacity");
      let toggleConversationTreeText = translate("toggleConversationTree");
      menu.innerHTML = `
            <button class='menu-option' id='opt_updateTree' style='width: 180px; height: 40px; padding: 3px; border-radius: 6px; font-size: 10px'>${updateCurrentConversationTreeText}</button>
            <button class='menu-option' id='adjustOption' style='width: 180px; height: 40px; padding: 3px; border-radius: 6px; font-size: 10px'>${adjustBackgroundColorAndOpacityText}</button>
            <button class='menu-option' id='showSvg' style='width: 180px; height: 40px; padding: 3px; border-radius: 6px; font-size: 10px'>${toggleConversationTreeText}</button>
            <input type='color' id='colorPicker' style='display:none;'>
            <input type='range' id='opacityPicker' style='display:none;' min='20' max='100' value='90'>
        `;
      menu.style.position = "fixed";
      menu.style.zIndex = "10000";
      menu.style.backgroundColor = "transparent";
      menu.style.border = "none";
      document.body.appendChild(menu);
      ButtonOperations.positionMenu();
      const menuOptions = menu.querySelectorAll('.menu-option');
      menuOptions.forEach((el, index) => {
        el.style.transition = 'all 400ms ease-out';
        el.style.transform = `translateX(${treeMainBtn.getBoundingClientRect().width / 3}px)`;
        el.style.opacity = Math.max(0.2, parseFloat(treeMainBtn.style.opacity) - 0.4);
        setTimeout(() => {
          el.style.transform = 'translateX(0)';
          el.style.opacity = treeMainBtn.style.opacity;
        }, index * 100);
      })

      function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) {
          h = s = 0;
        } else {
          let d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;
            case g:
              h = (b - r) / d + 2;
              break;
            case b:
              h = (r - g) / d + 4;
              break;
          }
          h /= 6;
        }
        return [h, s, l];
      }

      function hslToRgb(h, s, l) {
        let r, g, b;
        if (s === 0) {
          r = g = b = l;
        } else {
          function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          }

          let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          let p = 2 * l - q;
          r = hue2rgb(p, q, h + 1 / 3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1 / 3);
        }
        return [r * 255, g * 255, b * 255];
      }

      menuOptions.forEach(option => {
        option.addEventListener('mouseover', () => {
          const bgColor = window.getComputedStyle(treeMainBtn).backgroundColor;
          const rgb = bgColor.match(/[\d.]+/g).map(Number);
          let [h, s, l] = rgbToHsl(...rgb);
          l *= 0.8
          const [r, g, b] = hslToRgb(h, s, l);
          option.style.backgroundColor = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
        });

        option.addEventListener('mouseout', () => {
          option.style.backgroundColor = treeMainBtn.style.backgroundColor;
        });
      });

      menu.addEventListener("click", ButtonOperations.onMenuClick);
      menu.addEventListener("mouseenter", () => isMouseOver = true);
      menu.addEventListener("mouseleave", ButtonOperations.hideMenuIfNotOver);
      colorPicker = document.getElementById('colorPicker');
      opacityPicker = document.getElementById('opacityPicker');
      colorPicker.addEventListener('input', ButtonOperations.onColorChange);
      colorPicker.addEventListener('change', ButtonOperations.onColorChangeDone);
      opacityPicker.addEventListener('input', ButtonOperations.onOpacityChange);
      opacityPicker.addEventListener('change', ButtonOperations.onOpacityChangeDone);

      document.querySelectorAll('.menu-option').forEach(el => {
        el.style.backgroundColor = treeMainBtn.style.backgroundColor;
        el.style.opacity = treeMainBtn.style.opacity;
      });
    },

    hideMenuIfNotOver: function () {
      isMouseOver = false;
      setTimeout(() => {
        if (!isMouseOver) ButtonOperations.hideMenu();
      }, 100);
    },

    hideMenu: function () {
      if (menu) {
        document.body.removeChild(menu);
        menu = null;
      }
    },

    onMenuClick: function (e) {
      if (e.target.id === 'adjustOption') {
        colorPicker.style.display = 'inline-block';
        opacityPicker.style.display = 'inline-block';
      }
      if (e.target.id === 'opt_updateTree') {
        let curURL = window.location.href;
        log("curURL:", curURL, "states:", states);
        if (curURL !== states.url.url) {
          if (urlOperations.isValidURL(curURL)) {
            if (confirm(translate("confirmCurrentURL").replace('{item}', curURL))) {
              urlOperations.handleURLChange(curURL);
              ButtonOperations.showUserNotification(translate("startUpdatingConversationTree"));
            } else {
              return;
            }
          } else {
            alert("Please Refresh The Page First!🔄️")
            return;
          }
        }
        log("按钮点击而开始更新树!states:", states);

        if (states.url.isValidURL === true && states.url.url !== '' && !states.treeUpdate.isDOMOperating) {
          log("由于按钮点击而开始更新树!");
          let allDivs = DOMOperations.getAllDivs();
          if (allDivs.length === 0) {
            log("没有检测到Div!请刷新页面获取对话信息!");
            return;
          }
          setTimeout(() => treeOperation.initializeChatTree(), 1000);
        } else {
          log("按钮点击而开始更新树!但是条件不允许!states:", states);
        }
      }

      if (e.target.id === 'showSvg') {
        toggleSvgShow(1);
      }
      if (e.target.innerText != '')
        ButtonOperations.showUserNotification(translate("selectedItem").replace('{item}', e.target.innerText));
    },

    currentMessages: 0,
    showUserNotification: function (text, alertOrNote = "note", duration = 3000) {
      const message = document.createElement("div");

      const innerHtml = (alertOrNote === "note") ?

        `<div class="px-3 py-2 rounded-md text-white inline-flex flex-row border pointer-events-auto gap-2 border-green-500 bg-green-500" role="alert">
        <div class="mt-1 flex-shrink-0 flex-grow-0">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        </div>
        <div class="flex-1 justify-center gap-2">
            <div class="whitespace-pre-wrap text-left">${text}</div>
        </div>
    </div>` :
        `
    <div data-state="entered" class="toast-root" style="height: 50px; margin-bottom: 0px;">
        <div class="w-full p-1 text-center md:w-auto md:text-justify">
            <div class="px-3 py-2 rounded-md text-white inline-flex flex-row border pointer-events-auto gap-2 border-red-500 bg-red-500" role="alert">
                <div class="mt-1 flex-shrink-0 flex-grow-0">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                </div>
                <div class="flex-1 justify-center gap-2">
                    <div class="whitespace-pre-wrap text-left">${text}</div>
                </div>
            </div>
        </div>
    </div>
`;
      /*
      <div data-state="entered" class="toast-root" style="height: 50px; margin-bottom: 0px;"><div class="w-full p-1 text-center md:w-auto md:text-justify"><div class="px-3 py-2 rounded-md text-white inline-flex flex-row border pointer-events-auto gap-2 border-red-500 bg-red-500" role="alert"><div class="mt-1 flex-shrink-0 flex-grow-0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></div><div class="flex-1 justify-center gap-2"><div class="whitespace-pre-wrap text-left">Unable to load conversation efdb10a3-3d0d-49de-a21e-a3c2f76c56ea</div></div></div></div></div>
      */
      message.style.position = "fixed";
      message.style.top = "0";
      message.style.zIndex = "10001";
      message.style.opacity = treeMainBtn.style.opacity;
      message.style.transform = "translateY(-100%)";
      message.style.transition = "all 400ms ease-in";
      message.style.marginTop = "10px";
      message.style.opacity = '0';

      message.innerHTML = innerHtml;
      log("message:", message);
      document.body.appendChild(message);

      const leftPosition = (window.innerWidth - message.offsetWidth) / 2;
      message.style.left = `${leftPosition}px`;

      let offset = this.currentMessages * 50 + 10;
      message.style.top = `${offset}px`;
      this.currentMessages++;
      document.body.appendChild(message);
      setTimeout(() => {
        message.style.transform = "translateY(0)";
        message.style.opacity = '1';
      }, 0);

      setTimeout(() => {
        message.style.transform = "translateY(-100%)";
        message.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(message);
          this.currentMessages--;
        }, 400);
      }, duration);
    },

    positionMenu: function () {
      let rect = treeMainBtn.getBoundingClientRect();
      let menuLeft = rect.left - 15;
      menu.style.top = `${rect.bottom}px`;
      menu.style.left = `${menuLeft}px`;
      menu.style.width = `${rect.width}px`;
    },

    onColorChange: function (e) {
      const color = e.target.value;
      treeMainBtn.style.backgroundColor = color;
      if (menu) {
        document.querySelectorAll('.menu-option').forEach(el => {
          el.style.backgroundColor = color;
        });
      }

    },

    onOpacityChange: function (e) {
      const opacity = e.target.value / 100;
      treeMainBtn.style.opacity = opacity.toString();
      if (menu) {
        document.querySelectorAll('.menu-option').forEach(el => {
          el.style.opacity = opacity.toString();
        });
      }
    },
    onOpacityChangeDone: function (e) {
      const opacity = e.target.value / 100;
      let opacity_string = opacity.toString();
      const newSettings = {id: 'mainTreeBtn', color: treeMainBtn.style.backgroundColor, opacity: opacity_string};
      dbOperations.updateMainTreeBtnSettings(newSettings).then(() => {
        ButtonOperations.showUserNotification(translate("successSavingChanges"));
      }).catch(error => {
        console.error("Error saving Change:", error);
      });
    },
    onColorChangeDone: function (e) {
      const opacity_string = treeMainBtn.style.opacity

      const newSettings = {id: 'mainTreeBtn', color: treeMainBtn.style.backgroundColor, opacity: opacity_string};
      dbOperations.updateMainTreeBtnSettings(newSettings).then(() => {
        ButtonOperations.showUserNotification(translate("successSavingChanges"));
      }).catch(error => {
        console.error("Error saving Change:", error);
      });
    },
  };


  start();
  ButtonOperations.createButton();


  const initSvgAndGradient = {
    thumbnailStyles: {
      "position": "fixed",
      "bottom": "10px",
      "left": "10px"
    },

    createSvg: function (selection, styles = {}, width = "100%",
                         height = "100%", createDiv = true, svgId) {
      let parent = selection;

      if (createDiv) {
        parent = selection.append("div")
          .style("width", width)
          .style("height", height)
          .style("position", "fixed")
          .style("top", "0px")
          .style("left", "0px")
          .style("display", 'none')
          .attr("id", "mainSvgDiv")
      }

      let svgEl = parent.append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("visibility", "hidden")

      for (let style in styles) {
        svgEl.style(style, styles[style]);
      }
      if (svgId) {
        svgEl.attr("id", svgId);
      }
      return svgEl;
    },


    createLinearGradient: function (defs, id, colorStart, colorEnd) {
      const gradient = defs.append("linearGradient")
        .attr("id", id)
        .attr("x1", "0%")
        .attr("y1", "100%")
        .attr("x2", "0%")
        .attr("y2", "0%");

      gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", colorStart)
        .attr("stop-opacity", 1);

      gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", colorEnd)
        .attr("stop-opacity", 1);
    },

    Visualizationinit: function (data) {
      if (!data) {
        log("data = null! return!");

      } else {
        root = d3.hierarchy(data);
        const widthPerNode = 30;
        const heightPerNode = 30;
        treeLayout = d3.tree().nodeSize([widthPerNode, heightPerNode]);

        treeLayout(root);
      }
      svg = initSvgAndGradient.createSvg(d3.select("body"), {}, "100%", "100%", true, "mainSvg");
      svgThumbnail = initSvgAndGradient.createSvg(d3.select("body"), initSvgAndGradient.thumbnailStyles, "0px", "0px", false, "thumbnailSvg");

      defs = svg.append("defs");
      initSvgAndGradient.createLinearGradient(defs, "chatgptGradient", "#34aeeb", "#0a87d8");
      initSvgAndGradient.createLinearGradient(defs, "userGradient", "#ffc085", "#ff7f00");

      gLinks = svg.append("g");
      gNodes = svg.append("g");
      window.addEventListener('wheel', function (event) {
        if (states.visualization.thumbnailSvg === 'visible') {
          setTimeout(drawMainSVG, 200);
        }
        let mainSvgDiv = document.getElementById("mainSvgDiv");
        if (mainSvgDiv.style.display === 'block' && event.ctrlKey) {
          event.preventDefault(); // 阻止默认行为，即浏览器的缩放操作
        }
      }, {passive: false});

      window.addEventListener("resize", function () {

        let treeMainButton = document.getElementById("chatTreeBtn");

        if (treeMainButton) {
          const maxX = window.innerWidth - treeMainButton.offsetWidth;
          const maxY = window.innerHeight - treeMainButton.offsetHeight;

          let left = parseInt(treeMainButton.style.left);
          let top = parseInt(treeMainButton.style.top);

          left = Math.min(maxX, Math.max(0, left));
          top = Math.min(maxY, Math.max(0, top));

          treeMainButton.style.left = left + "px";
          treeMainButton.style.top = top + "px";
          treeMainButton.style.right = "auto";
          treeMainButton.style.bottom = "auto";
        }

        let contentDiv = document.getElementById("contentDiv");
        if (contentDiv) {
          const maxX = window.innerWidth - contentDiv.offsetWidth;
          const maxY = window.innerHeight - contentDiv.offsetHeight;

          let left = parseInt(contentDiv.style.left);
          let top = parseInt(contentDiv.style.top);

          left = Math.min(maxX, Math.max(0, left));
          top = Math.min(maxY, Math.max(0, top));

          contentDiv.style.left = left + "px";
          contentDiv.style.top = top + "px";
          contentDiv.style.right = "auto";
          contentDiv.style.bottom = "auto";
        }
      });
    }
  }
  initSvgAndGradient.Visualizationinit(conversationData.rootNode);


  //dragAndZoomKits
  const dragAndZoomKits = {

    initialPageX: 0,
    initialPageY: 0,
    initialTranslateX: 0,
    initialTranslateY: 0,
    nodeDragStarted: function (d) {
      nodesInAndOutKit.highlightDescendantsOnDrag(d);
      newOperation =
        {
          type: "drag",
          uuid: d.data.uuid,
          startX: d.x,
          startY: d.y,
        }
      redoStack = [];
    },

    nodeDragged: function (d, i) {
      const dx = d3.event.x - d.x;
      const dy = d3.event.y - d.y;

      function move(node) {
        node.x += dx;
        node.y += dy;
        if (node.children) {
          node.children.forEach(move);
        }

        let windowElem = document.getElementById(node.data.uuid + "-window");
        if (windowElem) {
          let currentTop = parseFloat(windowElem.style.top);
          let currentLeft = parseFloat(windowElem.style.left);
          windowElem.style.top = (currentTop + dy) + 'px';
          windowElem.style.left = (currentLeft + dx) + 'px';
        }
      }

      move(d);
      drawMainSVG();
    },

    nodeDragEnded: function (d) {
      gNodes.selectAll(".node").classed("descendant-dragging", false);
      d3.select(this).style("cursor", "pointer");
      newOperation.endX = d.x;
      newOperation.endY = d.y;
      if (newOperation.startX !== newOperation.endX || newOperation.startY !== newOperation.endY)
        settingsKit.performAction(newOperation);
    },

    canvasDragStarted: function () {
      const currentTransform = d3.zoomTransform(svg.node());
      this.initialTranslateX = currentTransform.x;
      this.initialTranslateY = currentTransform.y;
      this.initialPageX = d3.event.sourceEvent.pageX;
      this.initialPageY = d3.event.sourceEvent.pageY;
    },

    canvasDragged: function () {
      const dx = (d3.event.sourceEvent.pageX - this.initialPageX);
      const dy = (d3.event.sourceEvent.pageY - this.initialPageY);
      const newTranslateX = this.initialTranslateX + dx;
      const newTranslateY = this.initialTranslateY + dy;
      svg.call(zoom.transform, d3.zoomIdentity.translate(newTranslateX, newTranslateY).scale(d3.zoomTransform(svg.node()).k));
      drawThumbnailSVG();
    },
    zoomed: function () {
      const transform = d3.event.transform;
      gNodes.attr("transform", transform.toString());
      gLinks.attr("transform", transform.toString());
      drawThumbnailSVG();
    },
    init: function (svgElement) {

      nodeDrag = d3.drag()
        .on("start", dragAndZoomKits.nodeDragStarted)
        .on("drag", dragAndZoomKits.nodeDragged)
        .on("end", dragAndZoomKits.nodeDragEnded);

      canvasDrag = d3.drag()
        .on("start", this.canvasDragStarted)
        .on("drag", this.canvasDragged);

      zoom = d3.zoom()
        .scaleExtent([0.1, 10])
        .filter(() => d3.event.ctrlKey)
        .on("zoom", this.zoomed);

      svgElement.call(zoom);
      svgElement.call(canvasDrag);
    },


  }
  dragAndZoomKits.init(svg);

  function drawThumbnailSVG() {
    const thumbReservedSpace = 0.2;
    svgThumbnail.selectAll("*").remove();

    const xRange = d3.extent(root.descendants(), d => d.x);
    const yRange = d3.extent(root.descendants(), d => d.y);
    const treeWidth = xRange[1] - xRange[0];
    const treeHeight = yRange[1] - yRange[0];


    const thumbScale = 0.2;
    const DEFAULTS = {
      THUMB_WIDTH_MIN: 270,
      THUMB_WIDTH_MAX: 400,
      THUMB_HEIGHT_MIN: 250,
      THUMB_HEIGHT_MAX: 1000,
    };
    let thumbWidth = Math.max(DEFAULTS.THUMB_WIDTH_MIN, Math.min(DEFAULTS.THUMB_WIDTH_MAX, treeWidth * thumbScale * (1 + 1.2 * thumbReservedSpace)));
    let thumbHeight = Math.max(DEFAULTS.THUMB_HEIGHT_MIN, Math.min(DEFAULTS.THUMB_HEIGHT_MAX, treeHeight * (thumbScale) * (1 + 1 * thumbReservedSpace)));

    const xOffset = Math.min(Math.max(treeWidth * thumbScale * 0.8 * thumbReservedSpace, 0.9 * thumbWidth), 0.1 * thumbWidth);
    const yOffset = thumbHeight * 0.05;


    svgThumbnail
      .attr("width", thumbWidth)
      .attr("height", thumbHeight)
      .style("border-radius", "10px")

    svgThumbnail.append("rect")
      .attr("width", thumbWidth)
      .attr("height", thumbHeight)
      .attr("rx", 10)
      .attr("ry", 10)
      .style("fill", "none")
      .style("stroke", "rgba(211,211,211,1)")
      .style("stroke-width", 5);

    svgThumbnail.selectAll(".link")
      .data(root.links())
      .enter().append("line")
      .attr("class", "link")
      .attr("x1", d => (d.source.x - xRange[0]) * thumbScale + xOffset)
      .attr("y1", d => (d.source.y - yRange[0]) * thumbScale + yOffset)
      .attr("x2", d => (d.target.x - xRange[0]) * thumbScale + xOffset)
      .attr("y2", d => (d.target.y - yRange[0]) * thumbScale + yOffset)
      .style("stroke", "#aaa");

    svgThumbnail.selectAll(".node")
      .data(root.descendants())
      .enter().append("circle")
      .attr("class", "node")
      .attr("cx", d => (d.x - xRange[0]) * thumbScale + xOffset)
      .attr("cy", d => (d.y - yRange[0]) * thumbScale + yOffset)
      .attr("r", 2)
      .style("fill", d => {
        return d.data.type === "用户" ? "url(#userGradient)" : "url(#chatgptGradient)";
      });

    const transform = d3.zoomTransform(svg.node());
    const currentZoom = transform.k;
    const currentTranslateX = transform.x;
    const currentTranslateY = transform.y;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    root.descendants().forEach(node => {

      const adjustedX = node.x * currentZoom + currentTranslateX;
      const adjustedY = node.y * currentZoom + currentTranslateY;
      const svgRect = svg.node().getBoundingClientRect();
      const screenX = adjustedX + svgRect.left;
      const screenY = adjustedY + svgRect.top;

      const isVisible = (screenX >= -6 && screenX <= window.innerWidth + 6) &&
        (screenY >= -6 && screenY <= window.innerHeight + 6);

      if (isVisible) {
        if (node.x < minX) minX = node.x;
        if (node.x > maxX) maxX = node.x;
        if (node.y < minY) minY = node.y;
        if (node.y > maxY) maxY = node.y;
      }
    });

    if (minX === Infinity || minY === Infinity || maxX === -Infinity || maxY === -Infinity) {
      return;
    }
    const rectX = (minX - xRange[0]) * thumbScale + xOffset;
    const rectY = (minY - yRange[0]) * thumbScale + yOffset;
    const rectWidth = (maxX - minX) * thumbScale;
    const rectHeight = (maxY - minY) * thumbScale;

    svgThumbnail.append("rect")
      .attr("x", rectX - 6)
      .attr("y", rectY - 6)
      .attr("width", rectWidth + 12)
      .attr("height", rectHeight + 12)
      .attr("rx", 10)
      .attr("ry", 10)
      .style("fill", "rgba(211,211,211,0.3)")
      .style("stroke", "rgba(80, 80, 80, 1)")
      .style("stroke-width", 2);

  }

  function drawMainSVG() {

    const links = gLinks.selectAll(".link")
      .data(root.links(), d => d.target.data.uuid);

    links.enter()
      .append("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", "2")
      .merge(links)
      .attr("d", d => {
        return `M ${d.source.x} ${d.source.y} C ${(d.source.x + d.target.x) / 2} ${d.source.y}, ${(d.source.x + d.target.x) / 2} ${d.target.y}, ${d.target.x} ${d.target.y}`;
      });

    links.exit().remove();

    const nodes = gNodes.selectAll(".node")
      .data(root.descendants(), d => d.data.uuid);

    const nodesEnter = nodes.enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .call(nodeDrag);

    nodesEnter.append("circle")
      .attr("r", 10)
      .attr("class", function (d) {
        return d.data.type.toLowerCase();
      });
    nodesEnter.append("text")
      .text("✅")
      .style("display", "none")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .style("font-size", "12px");

    d3.selectAll(".node circle.chatgpt")
      .style("fill", "url(#chatgptGradient)");
    d3.selectAll(".node circle.用户")
      .style("fill", "url(#userGradient)");


    nodesEnter.append("text")
      .attr("class", "emoji-tag")
      .attr("x", d => +0)
      .attr("y", d => -4)
      .text("📌")
      .attr("visibility", "hidden")
      .filter(d => conversationData.bookMarked.get(d.data.uuid))
      .attr("visibility", "visible");
    nodesEnter.on("contextmenu", nodesInAndOutKit.onContextMenu)
    nodesEnter.on("mouseover", nodesInAndOutKit.handleMouseOver);
    nodesEnter.on("mouseout", nodesInAndOutKit.handleMouseOut);
    nodesEnter.on('click', nodesInAndOutKit.showNode);

    nodes.merge(nodesEnter)
      .attr("transform", d => `translate(${d.x},${d.y})`);


    nodes.exit().remove();
    drawThumbnailSVG();
    updateStylesBasedOnTheme();

  }

  //nodesInAndOutKit
  const nodesInAndOutKit = {
    highlightDescendantsOnDrag: function (node) {
      gNodes.selectAll(".node")
        .classed("descendant-dragging", d => nodesInAndOutKit.isDescendant(node, d));
    },
    isDescendant: function (parent, node) {
      if (node === parent) return false;
      while (node) {
        if (node === parent) {
          return true;
        }
        node = node.parent;
      }
      return false;
    },
    highlightDescendantLinks: function (node) {
      gLinks.selectAll(".link")
        .classed("descendant-highlighted", function (d) {
          return nodesInAndOutKit.isDescendant(node, d.target);
        });
    },
    showNode: function (d) {
      const existingComment = d.data.comment;
      if (existingComment && existingComment !== '') {
        commentTextarea.value = existingComment;
      } else {
        commentTextarea.value = '';
      }
      const nodeElement = d3.select(this);
      const isAlreadySelected = nodeElement.classed("selectedNode");
      if (isAlreadySelected) {
        contentDiv.style.display = 'none';
        nodeElement.classed("selectedNode", false);
        if (commentForm.style.display === 'block') {
          commentForm.style.display = 'none';
        }
      } else {
        if (d.data.type === "用户") {
          talkingPerson.innerHTML = conversationData.participants.user.avatarHTML;
        } else if (d.data.type === "chatGPT") {
          talkingPerson.innerHTML = (conversationData.participants.gpt.type === "GPT-3") ? GPT_Avatar_Config.gpt3_Inner_Html : GPT_Avatar_Config.gpt4_Inner_Html;
        } else {
          talkingPerson.innerHTML = '';
        }
        gNodes.selectAll(".node")
          .classed("selectedNode", false);
        nodeElement.classed("selectedNode", true);
        contentDiv.style.display = 'block';
        log("nodeElement:", nodeElement);
        contentDiv.dataset.curDisplay = d.data.uuid;
        let selectedNodeContent = document.getElementById("nodeContent");
        const htmlClass = document.documentElement.getAttribute('class');
        contentDiv.style.backgroundColor = htmlClass === "dark" ?
          d.data.type === "chatGPT" ? 'rgb(68,70,84)' : 'rgb(51,53,65)' :
          d.data.type === "chatGPT" ? 'rgb(247,247,248)' : 'rgb(256,256,256)';
        contentDiv.style.boxShadow = htmlClass === "dark" ? '0px 4px 20px rgba(255, 255, 255, 0.1)' : '0px 4px 20px rgba(0, 0, 0, 0.1)';
        nodesInAndOutKit.updateSelectedNodeContentDiv(d, selectedNodeContent);
        selectedNodeContent.removeEventListener('click', nodesInAndOutKit.handleClick);
        selectedNodeContent.addEventListener('click', nodesInAndOutKit.handleClick);
        var initialHeight = contentDiv.offsetHeight;
        selectedNodeContent.style.height = initialHeight - 60 + 'px';
        //selectedNodeContent.style.maxHeight = '600px';
      }
    },

    createTalkingPersonElement: function (d) {
      const talkingPerson1 = document.createElement('div');
      talkingPerson1.style.float = 'left';
      talkingPerson1.style.marginRight = '8px';
      talkingPerson1.style.background = 'none';
      talkingPerson1.style.height = 'auto';
      if (d.data.type === "用户") {
        talkingPerson1.innerHTML = conversationData.participants.user.avatarHTML;
        const img = talkingPerson1.querySelector('img');
        if (img) {
          img.style.display = 'block';
          img.style.margin = '0';
          img.style.height = '35px';
          img.style.width = '35px';
        }

      } else if (d.data.type === "chatGPT") {
        talkingPerson1.innerHTML = (conversationData.participants.gpt.type === "GPT-3") ? GPT_Avatar_Config.gpt3_Inner_Html : GPT_Avatar_Config.gpt4_Inner_Html;
      } else {
        talkingPerson1.innerHTML = '';
      }
      return talkingPerson1;
    },
    updateSelectedNodeContentDiv: function (d, targetDiv) {
      const talkingPerson1 = nodesInAndOutKit.createTalkingPersonElement(d);

      // let commentHTML = d.data.comment ? `<span class="comment-text">注释: ${d.data.comment}</span><br>` : '';
      // if (d.data.type === "chatGPT") {
      //   targetDiv.innerHTML = commentHTML;
      //   targetDiv.appendChild(talkingPerson1);
      //   targetDiv.innerHTML += `<span class="content-text">${d.data.content}</span>`;
      // } else {
      //   targetDiv.innerHTML = commentHTML;
      //   targetDiv.appendChild(talkingPerson1);
      //   let contentSpan = document.createElement('span');
      //   contentSpan.className = 'content-text';
      //   contentSpan.textContent = d.data.content;
      //   targetDiv.appendChild(contentSpan);
      // }
      let commentHTML = d.data.comment ? `<span class="comment-text">注释: ${d.data.comment}</span><br>` : '';
      targetDiv.innerHTML = commentHTML;
      targetDiv.appendChild(talkingPerson1);

      let contentSpan = document.createElement('span');
      contentSpan.className = 'content-text';

      if (d.data.type === "chatGPT") {
        contentSpan.innerHTML = d.data.content; // 如果需要保留HTML标签
      } else {
        contentSpan.textContent = d.data.content; // 如果只需要纯文本
      }

      targetDiv.appendChild(contentSpan);

    },
    handleClick: function (e) {
      if (e.target.closest('button.flex.ml-auto.gizmo\\:ml-0.gap-2.items-center')) {
        var codeBlock = e.target.closest('.bg-black').querySelector('code').innerText;
        nodesInAndOutKit.copyToClipboard(codeBlock);
      }
    },
    copyToClipboard: function (text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('Copy');
      textArea.remove();
      ButtonOperations.showUserNotification(translate("codeCopiedToClipboard"));
    },
    handleMouseOver: function (d) {
      curMouseOnUUID = d.data.uuid + "-window";
      d3.select(this).style("cursor", "pointer");
      d3.select(this).select("circle")
        .style("stroke", "#FFFFFF")
        .style("stroke-width", "3px")
        .style("cursor", "pointer");
      if (d.parent) {
        d3.selectAll(".node")
          .filter(function (data) {
            return data === d.parent;
          })
          .select("circle")
          .style("stroke", "cyan")
          .style("stroke-width", "3px");
      }
      const ancestors = d.ancestors();
      gLinks.selectAll(".link")
        .filter(link => ancestors.indexOf(link.target) > -1)
        .classed("highlighted", true);
      nodesInAndOutKit.highlightDescendantLinks(d);
      let windowId = d.data.uuid + "-window";
      if (!document.getElementById(windowId)) {

        temporaryWindowKit.createContentWindowForNode(d);
        temporaryWindowKit.positionContentWindow(d, event.pageX, event.pageY);
      }
    },
    handleMouseOut: function (d) {
      curMouseOnUUID = null;

      setTimeout(() => {
        if (curMouseOnUUID !== d.data.uuid + "-window") {
          let windowElem = document.getElementById(d.data.uuid + "-window");
          if (windowElem && windowElem.id === d.data.uuid + "-window") {
            windowElem.remove();
          }
        }
      }, 300);
      gLinks.selectAll(".link.highlighted")
        .classed("highlighted", false);
      gLinks.selectAll(".link.descendant-highlighted")
        .classed("descendant-highlighted", false);
      d3.select(this).select("circle")
        .style("stroke", null)
        .style("stroke-width", null);
      if (d.parent) {
        d3.selectAll(".node")
          .filter(function (data) {
            return data === d.parent;
          })
          .select("circle")
          .style("stroke", null)
          .style("stroke-width", null);
      }
    },
    onContextMenu: function (d) {
      log("右击了节点!");
      d3.event.stopPropagation()
      d3.event.preventDefault();
      const tag = d3.select(this).select(".emoji-tag");
      if (tag.attr("visibility") === "hidden") {
        tag.attr("visibility", "visible");
        conversationData.bookMarked.set(d.data.uuid, true);
        dbOperations.saveConversationsData(conversationData)
          .then(() => {
            log("已保存变化!",);
          })
          .catch(error => {
            console.error("Error saving data:", error);
          });

      } else {
        tag.attr("visibility", "hidden");
        conversationData.bookMarked.delete(d.data.uuid);
        dbOperations.saveConversationsData(conversationData)
          .then(() => {
          })
          .catch(error => {
            console.error("Error saving data:", error);
          });
      }
    },
  }

  //temporaryWindowKit
  const temporaryWindowKit = {
    positionContentWindow: function (d, x, y) {
      let windowElem = document.getElementById(d.data.uuid + "-window");
      if (windowElem) {
        windowElem.style.top = (y + 15) + 'px';
        windowElem.style.left = (x + 20) + 'px';
      }
    },
    createContentWindowForNode: function (d) {
      let elements = document.querySelectorAll('.temporalityContentLayoutDiv');
      elements.forEach(element => {
        element.remove();
      });
      let windowElem = document.createElement('div');
      windowElem.className = "temporalityContentLayoutDiv";
      windowElem.id = d.data.uuid + "-window";
      windowElem.style.position = 'absolute';
      windowElem.style.width = '600px';
      windowElem.style.maxHeight = '500px';
      windowElem.style.padding = '20px';
      windowElem.style.fontFamily = 'Arial, sans-serif';
      windowElem.style.fontSize = '16px';
      windowElem.style.lineHeight = '1.6';
      windowElem.style.border = '1px solid #ccc';
      windowElem.style.borderRadius = '5px';
      windowElem.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.2)';
      windowElem.style.overflow = 'auto';
      windowElem.style.opacity = '0.8';

      nodesInAndOutKit.updateSelectedNodeContentDiv(d, windowElem);
      const htmlClass = document.documentElement.getAttribute('class');
      windowElem.classList.add('markdown', 'prose', 'w-full', 'break-words', 'dark:prose-invert', htmlClass);

      windowElem.style.backgroundColor = htmlClass === "dark" ?
        d.data.type === "chatGPT" ? 'rgb(68,70,84)' : 'rgb(51,53,65)' :
        d.data.type === "chatGPT" ? 'rgb(247,247,248)' : 'rgb(256,256,256)';
      windowElem.style.boxShadow = htmlClass === "dark" ? '0px 4px 20px rgba(255, 255, 255, 0.1)' : '0px 4px 20px rgba(0, 0, 0, 0.1)';
      windowElem.addEventListener('click', nodesInAndOutKit.handleClick);
      document.body.appendChild(windowElem);
      windowElem.addEventListener('mouseenter', temporaryWindowKit.windowEnter);
      windowElem.addEventListener('mouseleave', temporaryWindowKit.windowLeave);
    },
    windowEnter: function (e) {
      curMouseOnUUID = e.target.id;
    },
    windowLeave: function (e) {
      curMouseOnUUID = null;
      setTimeout(() => {
        if (curMouseOnUUID !== e.target.id) {
          e.target.remove();
        }
      }, 300);
    },
  }


  //---ContentKit---//
  const contentDiv = document.createElement('div');
  const selectedNodeContent = document.createElement('div');
  const contentHeader = document.createElement('div');
  const copyButton = document.createElement('button');
  const goToNodeButton = document.createElement('button');
  const talkingPerson = document.createElement('div');
  const closeButton = document.createElement('button');
  const commentButton = document.createElement('button');


  const commentForm = document.createElement('div');
  const commentLabel = document.createElement('label');
  const commentTextarea = document.createElement('textarea');
  const submitButton = document.createElement('button');
  const cancelButton = document.createElement('button');
  const clearButton = document.createElement('button');


  function updateStylesBasedOnTheme() {
    const htmlClass = document.documentElement.getAttribute('class');
    contentDiv.style.backgroundColor = htmlClass === "dark" ?
      'rgb(68,70,84)' : 'rgb(256,256,256)';
    contentDiv.style.boxShadow = htmlClass === "dark" ? '0px 4px 20px rgba(255, 255, 255, 0.1)' : '0px 4px 20px rgba(0, 0, 0, 0.1)';
    const links = gLinks.selectAll(".link");

    if (htmlClass === "dark") {
      links
        .attr("stroke", "white")
    } else {
      links
        .attr("stroke", "black")
    }

    commentTextarea.style.background = htmlClass === "dark" ?
      'rgb(68,70,84)' : 'rgb(256,256,256)';
  }

  updateStylesBasedOnTheme();

  const HTMLClassObserver = new MutationObserver(mutations => {
    for (let mutation of mutations) {
      if (mutation.attributeName === 'class') {
        updateStylesBasedOnTheme();

      }
    }
  });
  HTMLClassObserver.observe(document.documentElement, {attributes: true});

  let isRightMouseDown = false;
  let isLeftMouseDown = false;
  let initialMouseX, initialMouseY, initialDivX, initialDivY;

  const ContentKit = {
    init: function () {
      this.createContentDivs();
      this.addEventListeners();
    },

    createContentDivs: function () {
      selectedNodeContent.id = 'nodeContent';
      copyButton.id = 'copyButton';
      goToNodeButton.id = 'goToNodeButton';
      contentHeader.id = 'contentHeader';
      commentButton.id = 'commentButton';

      contentHeader.style.fontFamily = 'Times New Roman';
      contentHeader.textContent = translate("nodeDetails");
      contentHeader.style.fontSize = '20px';
      contentHeader.style.fontWeight = 'bold';
      contentHeader.style.marginBottom = '10px';
      contentHeader.style.display = 'flex';
      contentHeader.style.justifyContent = 'space-between';
      contentHeader.style.alignItems = 'center';

      const htmlClass = document.documentElement.getAttribute('class');

      contentDiv.id = 'contentDiv';
      contentDiv.style.position = 'fixed';
      contentDiv.style.top = '10px';
      contentDiv.style.right = '10px';
      contentDiv.style.width = '400px';
      contentDiv.style.padding = '10px';
      contentDiv.style.borderRadius = '8px';
      contentDiv.style.border = '8px solid #ddd';
      contentDiv.style.display = 'none';
      contentDiv.style.fontFamily = 'Arial, sans-serif';
      contentDiv.style.fontSize = '14px';
      contentDiv.style.lineHeight = '1.6';
      contentDiv.style.overflow = 'hidden';
      contentDiv.style.userSelect = 'text';

      selectedNodeContent.style.paddingTop = '10px';
      selectedNodeContent.style.paddingRight = '10px';
      selectedNodeContent.style.paddingBottom = '10px';
      selectedNodeContent.style.paddingLeft = '10px';
      selectedNodeContent.style.userSelect = 'text';
      selectedNodeContent.style.overflow = 'auto';
      selectedNodeContent.classList.add('markdown', 'prose', 'w-full', 'break-words', 'dark:prose-invert', htmlClass);

      copyButton.innerHTML = `📋`;
      copyButton.style.border = 'none';
      copyButton.style.cursor = 'pointer';
      copyButton.style.fontSize = '20px';
      copyButton.style.position = 'absolute';
      copyButton.style.top = '6px';
      copyButton.style.right = '150px';
      copyButton.style.background = 'none';
      copyButton.style.border = 'none';
      copyButton.style.cursor = 'pointer';

      goToNodeButton.textContent = '🚩';
      goToNodeButton.style.position = 'absolute';
      goToNodeButton.style.top = '7px';
      goToNodeButton.style.right = '90px';
      goToNodeButton.style.background = 'none';
      goToNodeButton.style.border = 'none';
      goToNodeButton.style.fontSize = '18px';
      goToNodeButton.style.cursor = 'pointer';


      commentButton.textContent = "🖊";
      commentButton.style.position = 'absolute';
      commentButton.style.top = '8px';
      commentButton.style.right = '210px';
      commentButton.style.background = 'none';
      commentButton.style.border = 'none';
      commentButton.style.fontSize = '18px';
      commentButton.style.cursor = 'pointer';

      talkingPerson.id = 'talkingPerson';
      talkingPerson.style.position = 'absolute';
      talkingPerson.style.top = '8px';
      talkingPerson.style.right = '240px';
      talkingPerson.style.background = 'none';

      const closeIconSVG = '<svg stroke="black" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      closeButton.innerHTML = closeIconSVG;
      closeButton.style.position = 'absolute';
      closeButton.style.top = '10px';
      closeButton.style.right = '40px';
      closeButton.style.backgroundColor = 'white';
      closeButton.style.border = 'none';
      closeButton.style.cursor = 'pointer';
      closeButton.style.fontSize = '30px';

      commentForm.id = 'commentForm';
      commentForm.style.position = 'fixed';
      ContentKit.positionCommentFormRelativeToContentDiv();
      commentForm.style.display = 'none';


      commentLabel.setAttribute('for', 'comment');
      commentLabel.innerText = translate("enterComment") + ":";
      commentForm.appendChild(commentLabel);

      commentTextarea.id = 'commentText';
      commentTextarea.rows = '5';

      commentForm.appendChild(commentTextarea);
      submitButton.id = 'submitComment';
      submitButton.innerText = translate("userCommentSave");
      cancelButton.className = 'commentHoverEffect';
      clearButton.className = 'commentHoverEffect';
      submitButton.className = 'commentHoverEffect';


      commentForm.appendChild(submitButton);
      commentForm.appendChild(cancelButton);
      commentForm.appendChild(clearButton);
      document.body.appendChild(commentForm);

      contentHeader.appendChild(copyButton);
      contentHeader.appendChild(goToNodeButton);
      contentHeader.appendChild(closeButton);
      contentHeader.appendChild(commentButton);
      contentHeader.appendChild(talkingPerson);
      contentDiv.appendChild(selectedNodeContent);
      contentDiv.insertBefore(contentHeader, selectedNodeContent);
      document.body.appendChild(contentDiv);

    },
    positionCommentFormRelativeToContentDiv: function () {
      const rect = contentDiv.getBoundingClientRect();
      commentForm.style.position = 'fixed';
      commentForm.style.left = (rect.left - 300) + 'px';
      commentForm.style.top = rect.top + 'px';
      const commentRect = commentForm.getBoundingClientRect();
    },

    addEventListeners: function () {

      talkingPerson.addEventListener('mouseenter', function (e) {
        talkingPerson.style.cursor = 'grab';
      });
      talkingPerson.addEventListener('mousedown', function (e) {
        if (e.button === 0) {
          e.preventDefault();
          e.stopPropagation();
          isLeftMouseDown = true;

          initialMouseX = e.clientX;
          initialMouseY = e.clientY;
          initialDivX = contentDiv.offsetLeft;
          initialDivY = contentDiv.offsetTop;

          document.body.style.cursor = 'grabbing';
          document.addEventListener('mousemove', moveContentDiv);
        }
      });
      contentDiv.addEventListener('mousedown', function (e) {
        if (e.button === 2) {
          e.preventDefault();
          isRightMouseDown = true;

          initialMouseX = e.clientX;
          initialMouseY = e.clientY;
          initialDivX = contentDiv.offsetLeft;
          initialDivY = contentDiv.offsetTop;

          document.body.style.cursor = 'move';
          document.addEventListener('mousemove', moveContentDiv);
        }
      });

      document.addEventListener('mouseup', function (e) {
        if (isRightMouseDown && e.button === 2 || isLeftMouseDown && e.button === 0) {
          e.preventDefault();
          isRightMouseDown = false;
          document.body.style.cursor = '';
          talkingPerson.style.cursor = 'grab';

          document.removeEventListener('mousemove', moveContentDiv);
        }
      });

      contentDiv.addEventListener('contextmenu', function (e) {
        e.preventDefault();

      });

      function moveContentDiv(e) {
        if (isRightMouseDown || isLeftMouseDown) {
          const dx = e.clientX - initialMouseX;
          const dy = e.clientY - initialMouseY;

          let newLeft = initialDivX + dx;
          let newTop = initialDivY + dy;

          let maxWidth = window.innerWidth;
          let maxHeight = window.innerHeight;
          let elementWidth = contentDiv.offsetWidth;
          let elementHeight = contentDiv.offsetHeight;
          if (newLeft < 0) {
            newLeft = 0;
          } else if (newLeft > maxWidth - elementWidth) {
            newLeft = maxWidth - elementWidth;
          }

          if (newTop < 0) {
            newTop = 0;
          } else if (newTop > maxHeight - elementHeight) {
            newTop = maxHeight - elementHeight;
          }

          contentDiv.style.left = newLeft + 'px';
          contentDiv.style.top = newTop + 'px';

          document.body.style.cursor = isRightMouseDown ? 'move' : 'grabbing';
          talkingPerson.style.cursor = 'grabbing';

          ContentKit.positionCommentFormRelativeToContentDiv();
        }
      }

      closeButton.addEventListener('click', function () {
        contentDiv.style.display = 'none';
        if (commentForm.style.display === 'block') {
          commentForm.style.display = 'none';
        }
      });

      copyButton.addEventListener("click", function () {
        ContentKit.copyToClipboard(selectedNodeContent.innerHTML.replace(/<[^>]*>/g, ' '));
        ButtonOperations.showUserNotification(translate("contentCopied"));
      });

      commentButton.addEventListener('click', this.commentToSave);
      goToNodeButton.addEventListener('click', () => treeOperation.jumpToDialogueItem(contentDiv.dataset.curDisplay));
      contentDiv.addEventListener('mousemove', ContentKit.handleContentDivMouseMove);
      contentDiv.addEventListener('mousedown', ContentKit.handleContentDivMouseDown);
      contentDiv.onmouseleave = function () {
        contentDiv.style.cursor = 'null';
      };
    },
    handleContentDivMouseMove: function (e) {
      var borderWidth = 8;
      var oBoxW = contentDiv.offsetWidth - borderWidth;
      var oBoxH = contentDiv.offsetHeight - borderWidth;
      var x = e.clientX - contentDiv.getBoundingClientRect().left;
      var y = e.clientY - contentDiv.getBoundingClientRect().top;

      contentDiv.style.cursor = '';

      if (x < borderWidth) {
        contentDiv.style.cursor = 'w-resize';
      } else if (x > oBoxW) {
        contentDiv.style.cursor = 'e-resize';
      }

      if (y < borderWidth) {
        contentDiv.style.cursor = 'n-resize';
      } else if (y > oBoxH) {
        contentDiv.style.cursor = 's-resize';
      }

      if (x < borderWidth && y < borderWidth) {
        contentDiv.style.cursor = 'nw-resize';
      } else if (x > oBoxW && y < borderWidth) {
        contentDiv.style.cursor = 'ne-resize';
      } else if (x < borderWidth && y > oBoxH) {
        contentDiv.style.cursor = 'sw-resize';
      } else if (x > oBoxW && y > oBoxH) {
        contentDiv.style.cursor = 'se-resize';
      }
    },
    handleContentDivMouseDown: function (e) {
      var borderWidth = 8;
      e = e || event;
      var d = null;
      var oBoxL = contentDiv.offsetLeft;
      var oBoxT = contentDiv.offsetTop;
      var oBoxW = contentDiv.offsetWidth - borderWidth;
      var oBoxH = contentDiv.offsetHeight - borderWidth;

      var initialWidth = contentDiv.offsetWidth;
      var initialHeight = contentDiv.offsetHeight;

      var x = e.clientX - oBoxL;
      var y = e.clientY - oBoxT;
      var directions = {
        top: y < borderWidth,
        bottom: y > oBoxH,
        left: x < borderWidth,
        right: x > oBoxW
      };

      var corners = [
        {corner: 'LT', conditions: ['left', 'top']},
        {corner: 'LB', conditions: ['left', 'bottom']},
        {corner: 'RT', conditions: ['right', 'top']},
        {corner: 'RB', conditions: ['right', 'bottom']}
      ];

      var d = Object.keys(directions).find(key => directions[key]) || null;

      corners.forEach(corner => {
        if (corner.conditions.every(condition => directions[condition])) {
          d = corner.corner;
        }
      });
      if (!d) {
        return;
      }


      var startX = e.clientX;
      var startY = e.clientY;

      function handleMouseMove(e) {
        e = e || event;
        var dx = e.clientX - startX;
        var dy = e.clientY - startY;
        const cursors = {
          'left': 'ew-resize',
          'right': 'ew-resize',
          'top': 'ns-resize',
          'bottom': 'ns-resize',
          'LB': 'nesw-resize',
          'LT': 'nwse-resize',
          'RB': 'nwse-resize',
          'RT': 'nesw-resize'
        };

        const MIN_WIDTH = 400;
        const MIN_HEIGHT = 200;

        function updateStyle(d, dx, dy) {
          let newWidth, newHeight;

          switch (d) {
            case 'left':
            case 'LB':
            case 'LT':
              newWidth = initialWidth - dx;
              if (d !== 'left') {
                newHeight = d === 'LB' ? initialHeight + dy : initialHeight - dy;
              }
              break;
            case 'right':
            case 'RB':
            case 'RT':
              newWidth = initialWidth + dx;
              if (d !== 'right') {
                newHeight = d === 'RB' ? initialHeight + dy : initialHeight - dy;
              }
              break;
            case 'top':
            case 'bottom':
              newHeight = d === 'top' ? initialHeight - dy : initialHeight + dy;
              break;
          }

          if (newWidth >= MIN_WIDTH) {
            contentDiv.style.width = newWidth + 'px';
            if (['left', 'LB', 'LT'].includes(d)) {
              contentDiv.style.left = (oBoxL + dx) + 'px';
            }
          }

          if (newHeight >= MIN_HEIGHT) {
            contentDiv.style.height = newHeight + 'px';
            selectedNodeContent.style.height = (newHeight - 60) + 'px';
            if (['top', 'LT', 'RT'].includes(d)) {
              contentDiv.style.top = (oBoxT + dy) + 'px';
            }
          }

          document.body.style.cursor = cursors[d];
        }

        switch (d) {
          case 'left':
          case 'right':
          case 'top':
          case 'bottom':
          case 'LB':
          case 'LT':
          case 'RB':
          case 'RT':
            updateStyle(d, dx, dy);
            break;
        }
        if (commentForm.style.display === 'block') {
          ContentKit.positionCommentFormRelativeToContentDiv();
        }
        return false;
      }

      function handleMouseUp() {
        log("mouseup!");
        document.body.style.cursor = '';
        contentDiv.style.cursor = '';
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      if (e.preventDefault) {
        e.preventDefault();
      }
    },
    copyToClipboard: function (text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    },
    commentToSave: function (d) {
      let curUUID = contentDiv.dataset.curDisplay;
      log("curUUID:", curUUID);
      if (commentForm.style.display !== 'block') {
        commentForm.style.display = 'block';
      } else {
        commentForm.style.display = 'none';
      }
      ContentKit.positionCommentFormRelativeToContentDiv();
      let selectedNode = gNodes.selectAll(".node")
        .filter(function (d) {
          return d.data.uuid === curUUID;
        });
      log("commentForm Node:", selectedNode);
      const existingComment = selectedNode.data.comment;

      if (existingComment && existingComment !== '') {
        commentTextarea.value = existingComment;
      }

      if (!cancelButton.hasListener) {
        cancelButton.innerText = translate("userCommentCancel");
        cancelButton.addEventListener('click', function () {
          commentForm.style.display = 'none';
        });
        cancelButton.hasListener = true;
      }

      if (!clearButton.hasListener) {
        clearButton.innerText = translate("userCommentClear");
        clearButton.addEventListener('click', function () {
          commentTextarea.value = '';
        });
        clearButton.hasListener = true;
      }

      if (!submitButton.hasListener) {
        log("curUUID:", curUUID);
        commentForm.style.display = 'block';
        submitButton.addEventListener('click', function () {
          let commentValue = commentTextarea.value;
          let curUUID = contentDiv.dataset.curDisplay;
          let selectedNode = gNodes.selectAll(".node")
            .filter(function (d) {
              return d.data.uuid === curUUID;
            });
          let selectedNodeData;
          selectedNodeData = selectedNode.data()[0];
          let selectedMapNode;
          selectedMapNode = conversationData.uuid2nodeMap.get(curUUID);
          if (commentValue.trim() === '') {
            if (confirm(translate("emptyCommentPrompt"))) {
              ButtonOperations.showUserNotification(translate("commentSetToEmpty"));
              selectedNodeData.data.comment = '';
              log("renew selectedNodeData:", selectedNodeData);
              log("selectedNodeData.comment:", selectedNodeData.data.comment);
              selectedMapNode.comment = '';
              const existingComment = selectedNode.data.comment;

              if (existingComment && existingComment !== '') {
                commentTextarea.value = existingComment;
              }
              dbOperations.saveConversationsData(conversationData)
                .then(() => {
                })
                .catch(error => {
                  console.error("Error saving data:", error);
                });
              log("newData", conversationData);
              commentForm.style.display = 'none';
              selectedNodeData.data.comment = "";
              nodesInAndOutKit.updateSelectedNodeContentDiv(selectedNodeData, selectedNodeContent);
            } else {
              ButtonOperations.showUserNotification(translate("enterCommentFirst"), "alert");
            }
          } else {
            ButtonOperations.showUserNotification(translate("commentSaved"));
            try {
              selectedNodeData.data.comment = commentValue;
              log("renew selectedNodeData:", selectedNodeData);
              log("selectedNodeData.comment:", selectedNodeData.data.comment);
              selectedMapNode.comment = commentValue;
              const existingComment = selectedNode.data.comment;

              if (existingComment && existingComment !== '') {
                commentTextarea.value = existingComment;
              }

              dbOperations.saveConversationsData(conversationData)
                .then(() => {
                  nodesInAndOutKit.updateSelectedNodeContentDiv(selectedNodeData, selectedNodeContent);
                })
                .catch(error => {
                  console.error("Error saving data:", error);
                });
              commentForm.style.display = 'none';
            } catch (error) {
              //log("error:", error);
            }
          }
        });
        submitButton.hasListener = true;
      }
    },
  }
  ContentKit.init();
  //___ContentKit___//

  //---settingsKit---//
  let settingsDiv = document.createElement('div');
  let zoomInButton = document.createElement('div');
  let zoomOutButton = document.createElement('div');
  let refreshTreeButton = document.createElement('div');
  let thumbNailButton = document.createElement('div');
  let undoButton = document.createElement('div');
  let redoButton = document.createElement('div');
  let deleteDiv = document.createElement('div');
  let feedbackDiv = document.createElement('div');
  let settingsContainer = document.createElement('div');

  let scaleIncrementSmall = 0.1;
  let scaleIncrementLarge = 0.3;
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 3;


  let undoStack = [];
  let redoStack = [];
  let newOperation = {};

  const tooltipDiv = document.createElement('div');
  if (globalUserLang.startsWith('zh')) {
    tooltipDiv.innerHTML = `
<div data-radix-popper-content-wrapper="" style="position: fixed; right: 60px; bottom: 310px; min-width: max-content; z-index: auto; --radix-popper-anchor-width:30px; --radix-popper-anchor-height:33px; --radix-popper-available-width:1091px; --radix-popper-available-height:59px; --radix-popper-transform-origin:83px 13.5px;">
    <div data-side="left" data-align="center" data-state="delayed-open" class="relative rounded-lg border border-black/10 bg-black p-1 shadow-xs transition-opacity" style="--radix-tooltip-content-transform-origin:var(--radix-popper-transform-origin); --radix-tooltip-content-available-width:var(--radix-popper-available-width); --radix-tooltip-content-available-height:var(--radix-popper-available-height); --radix-tooltip-trigger-width:var(--radix-popper-anchor-width); --radix-tooltip-trigger-height:var(--radix-popper-anchor-height);">
        <span class="block text-center font-medium normal-case text-white text-sm mb-2">点击参与问卷调查 (腾讯问卷)</span>
        <div style="width: 100px; height: 100px; margin: auto;">
            <img src="https://cdn.jsdelivr.net/gh/cuizhenzhi/pic_bed/img/000pureCode.png" alt="问卷二维码" style="width: 100px; height: 100px; display: block; margin: auto;">
        </div>
        <span style="position: absolute; right: 0px; transform-origin: 100% 0px; transform: translateY(50%) rotate(-90deg) translateX(50%); top: 10.5px;">
        <div width="10" height="5" viewbox="0 0 30 10" preserveaspectratio="none" class="relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-black shadow-xs" style="display: block;"></div></span>
    </div>
</div>`;
  } else {
    tooltipDiv.innerHTML = `
<div data-radix-popper-content-wrapper="" style="position: fixed; right: 60px; bottom: 310px; min-width: max-content; z-index: auto; --radix-popper-anchor-width:30px; --radix-popper-anchor-height:33px; --radix-popper-available-width:1091px; --radix-popper-available-height:59px; --radix-popper-transform-origin:83px 13.5px;">
    <div data-side="left" data-align="center" data-state="delayed-open" class="relative rounded-lg border border-black/10 bg-black p-1 shadow-xs transition-opacity" style="--radix-tooltip-content-transform-origin:var(--radix-popper-transform-origin); --radix-tooltip-content-available-width:var(--radix-popper-available-width); --radix-tooltip-content-available-height:var(--radix-popper-available-height); --radix-tooltip-trigger-width:var(--radix-popper-anchor-width); --radix-tooltip-trigger-height:var(--radix-popper-anchor-height);">
        <p class="block text-center font-medium normal-case text-white text-sm mb-2">Click to take the survey</br>(Google Forms)</p>
        <div style="width: 100px; height: 100px; margin: auto;">
            <img src="https://cdn.jsdelivr.net/gh/cuizhenzhi/pic_bed/img/google_form.png" alt="Survey Code" style="width: 100px; height: 100px; display: block; margin: auto;">
        </div>
        <span style="position: absolute; right: 0px; transform-origin: 100% 0px; transform: translateY(50%) rotate(-90deg) translateX(50%); top: 10.5px;">
        <div width="10" height="5" viewbox="0 0 30 10" preserveaspectratio="none" class="relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-black shadow-xs" style="display: block;"></div></span>
    </div>
</div>`;
  }
  tooltipDiv.style.display = 'none';
  tooltipDiv.className = "actionDiv1";

  settingsContainer.appendChild(tooltipDiv);

  const settingsKit = {
    init: function () {
      this.createSettingDivs();
      this.addEventListeners();
    },

    createSettingDivs: function () {
      settingsDiv.id = "settingsDiv";
      settingsDiv.style.fontSize = '24px';

      settingsContainer.appendChild(settingsDiv);
      settingsContainer.style.display = 'none';

      const settingSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path fill="rgb(217, 74, 171)" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/></svg>';
      settingsDiv.innerHTML = settingSVG;

      zoomInButton.className = "actionDiv";
      zoomInButton.id = 'plusDiv';
      zoomOutButton.className = "actionDiv";
      zoomOutButton.id = 'minusDiv';
      zoomInButton.innerText = '➕';
      zoomOutButton.innerText = '➖';
      settingsContainer.appendChild(zoomInButton);
      settingsContainer.appendChild(zoomOutButton);


      thumbNailButton.id = 'thumbNailDiv';
      thumbNailButton.className = "actionDiv";
      thumbNailButton.innerText = '🌐';
      settingsContainer.appendChild(thumbNailButton);

      refreshTreeButton.id = 'refreshTree';
      refreshTreeButton.className = "actionDiv";
      refreshTreeButton.innerText = '🔄️';
      settingsContainer.appendChild(refreshTreeButton);

      undoButton.id = 'undoDiv';
      undoButton.className = "actionDiv";
      undoButton.innerText = '⏪';
      settingsContainer.appendChild(undoButton);

      redoButton.id = 'redoDiv';
      redoButton.className = "actionDiv";
      redoButton.innerText = '⏩';
      settingsContainer.appendChild(redoButton);


      deleteDiv.id = 'deleteDiv';
      deleteDiv.className = "actionDiv";
      deleteDiv.innerText = '🗑️';
      settingsContainer.appendChild(deleteDiv);

      feedbackDiv.id = 'feedbackDiv';
      feedbackDiv.className = "actionDiv";
      feedbackDiv.innerText = '✉️';
      settingsContainer.appendChild(feedbackDiv);

      document.body.appendChild(settingsContainer);

    },

    addEventListeners: function () {

      feedbackDiv.addEventListener('click', () => {
        // 检测用户的语言设置
        if (globalUserLang.startsWith('zh')) {
          window.open('https://wj.qq.com/s2/13235492/27ec', '_blank');
        } else {
          window.open('https://docs.google.com/forms/d/e/1FAIpQLSetbHqiS1GBM6bG0QaaKy9cN31jKXK76BcYCW8_wkRNH7I5kQ/viewform', '_blank');
        }
      });

      let feedbackTimeOut;
      feedbackDiv.addEventListener('mouseenter', function (e) {
        log("feedbackDiv mouseover");
        clearTimeout(feedbackTimeOut);
        let elements = [feedbackDiv, tooltipDiv];
        elements.forEach(element => {
          element.style.display = 'flex';
        });
      });
      tooltipDiv.addEventListener('mouseenter', function (e) {
        log("tooltipDiv mouseover");
        clearTimeout(feedbackTimeOut);
        tooltipDiv.style.display = 'block';
      });
      feedbackDiv.addEventListener('mouseleave', function () {
        log("feedbackDiv mouseleave");
        feedbackTimeOut = setTimeout(() => {
          tooltipDiv.style.display = 'none';
        }, 400);
      });
      tooltipDiv.addEventListener('mouseleave', function (e) {
        log("tooltipDiv mouseleave");
        feedbackTimeOut = setTimeout(() => {
          tooltipDiv.style.display = 'none';
        }, 400);
      });


      let settingsTimeOut;
      settingsContainer.addEventListener('mouseenter', function (e) {
        log("settingsContainer mouseover");
        clearTimeout(settingsTimeOut);
        let elements = document.querySelectorAll('.actionDiv');
        elements.forEach(element => {
          element.style.display = 'flex';
        });
      });
      settingsContainer.addEventListener('mouseleave', function () {
        log("settingsContainer mouseleave");
        settingsTimeOut = setTimeout(() => {
          let elements = document.querySelectorAll('.actionDiv');
          elements.forEach(element => {
            element.style.display = 'none';
          });
        }, 400);
      });
      zoomInButton.addEventListener('click', this.zoomIn);
      zoomOutButton.addEventListener('click', this.zoomOut);
      thumbNailButton.addEventListener('click', this.toggleThumbnail);
      refreshTreeButton.addEventListener('click', this.refreshTree);
      undoButton.addEventListener('click', this.undo);
      redoButton.addEventListener('click', this.redo);
      deleteDiv.addEventListener('click', this.deleteConversationData(null, false));
    },
    deleteConversationData: async function (operatingLink, IsfromPanel) {
      if (states.treeUpdate.isDOMOperating || !states.url.isValidURL || conversationData.url === null) {
        return;
      }
      let operatingURL;
      if (operatingLink === null && IsfromPanel === false) {
        operatingURL = conversationData.url;
      } else if (operatingLink && IsfromPanel === true) {
        operatingURL = operatingLink;
      }
      if (confirm(translate("confirmDeleteLinkData").replace('{item}', operatingURL))) {
        try {
          await dbOperations.deleteConversationData(operatingURL);
          log('Data deleted successfully');
          ButtonOperations.showUserNotification(translate("conversationDataDeleted"), 'alert');
          if(IsfromPanel){
            return;
          }
          try {
            dbOperations.loadConversationsData(operatingURL).then(loadeddata => {
              log("Loaded data for URL:", loadeddata);
              conversationData = loadeddata;
              root = d3.hierarchy(conversationData.rootNode);
              log("reNewedRoot:", root);
              const widthPerNode = 30;
              const heightPerNode = 30;
              treeLayout = d3.tree().nodeSize([widthPerNode, heightPerNode]);
              treeLayout(root);
              settingsKit.refreshTree();
              drawMainSVG();
            }).catch(error => {
              console.error("Error loading data:", error);
            });
          } catch (loadError) {
            console.error('Error loading data:', loadError);
          }
        } catch (deleteError) {
          console.error('Error deleting data:', deleteError);
        }
      } else {
        log('数据未被删除!');
      }
    },

    zoomIn: function () {
      let currentScale = d3.zoomTransform(svg.node()).k;
      let increment = currentScale < 1 ? scaleIncrementSmall : scaleIncrementLarge;
      let newScale = currentScale + increment;
      if (newScale > 10) newScale = 10;
      svg.transition().duration(250)
        .call(zoom.scaleTo, newScale, [centerX, centerY]);
    },

    zoomOut: function () {
      let currentScale = d3.zoomTransform(svg.node()).k;
      let decrement = currentScale <= 1 ? scaleIncrementSmall : scaleIncrementLarge;
      let newScale = currentScale - decrement;
      if (newScale < 0.1) newScale = 0.1;
      svg.transition().duration(250)
        .call(zoom.scaleTo, newScale, [centerX, centerY]);

    },


    toggleThumbnail: function () {
      let currentVisibility = svgThumbnail.attr('visibility');
      svgThumbnail.attr('visibility', currentVisibility === 'hidden' ? 'visible' : 'hidden');
      log("currentVisibility:", currentVisibility);
    },


    refreshTree: function () {
      undoStack = [];
      redoStack = [];
      svg.call(zoom.transform, d3.zoomIdentity.translate(0, 0).scale("1"));
      treeLayout(root);
      const yOffset = window.innerHeight / 5 - root.x;
      const xOffset = window.innerWidth / 5 - root.x;
      root.each(d => {
        d.y += yOffset;
      });
      root.each(d => {
        d.x += xOffset;
      });
      drawMainSVG();
    },


    simulateMove: function (action, doType) {
      let nodeData;

      d3.selectAll("g.node")
        .filter(function (d) {
          return d.data.uuid === action.uuid;
        })
        .each(function (d) {
          nodeData = d;
        });

      if (!nodeData) {
        console.error("Node not found for UUID:", action.uuid);
        return;
      }

      let dx;
      let dy;
      if (doType === 'undo') {
        dx = action.startX - action.endX;
        dy = action.startY - action.endY;
      } else if (doType === 'redo') {
        dx = action.endX - action.startX;
        dy = action.endY - action.startY;
      }
      nodeData.x += dx;
      nodeData.y += dy;
      if (nodeData.children) {
        nodeData.children.forEach(child => {
          settingsKit.simulateMove({
            uuid: child.data.uuid,
            startX: child.x,
            startY: child.y,
            endX: child.x - dx,
            endY: child.y - dy
          }, "undo");
        });
      }
    },

    performAction: function (action) {
      undoStack.push(action);
      redoStack = [];
    },
    redo: function () {
      if (redoStack.length <= 0) return;
      let action = redoStack.pop();
      log("action:", action);
      if (action.type === 'drag') {
        settingsKit.simulateMove(action, "redo");
        drawMainSVG();
      }
      undoStack.push(action);
    },
    undo: function () {
      if (undoStack.length <= 0) return;
      let action = undoStack.pop();
      log("action:", action);
      if (action.type === 'drag') {
        settingsKit.simulateMove(action, "undo");
        drawMainSVG();
      }
      redoStack.push(action);
    },
  };
  settingsKit.init();


  let searchContainer = document.createElement('div');
  let searchIcon = document.createElement('div');
  let searchBox = document.createElement('input');
  let searchBtn = document.createElement('button');
  let searchResultsCount = document.createElement('div');
  let searchHistory = document.createElement('div');
  let suggestionsContainer = document.createElement('div');
  let matchedUUIDs = new Set();
  let matchedArray = [];
  let currentTreeBreathingIndex = -1;
  const searchKit = {
    isSearchKitExpanded: false,
    stopBreathing: false,
    init: function () {
      settingsKit.refreshTree();
      searchContainer.id = 'search-container';
      searchContainer.style.display = 'none';
      searchIcon.id = 'search-icon';
      searchIcon.innerText = '🔍';
      searchIcon.onclick = searchKit.toggleSearch;
      searchContainer.appendChild(searchIcon);
      searchBox.type = 'text';
      searchBox.id = 'search-box';
      suggestionsContainer.id = 'suggestions-container';
      suggestionsContainer.className = 'suggestions-container';
      searchContainer.appendChild(suggestionsContainer);
      searchBox.setAttribute("placeholder", translate("searchPlaceholder"));
      searchBox.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
          event.preventDefault();
          event.stopPropagation();
          searchKit.executeSearch();
        }
      });

      function updateSuggestions(suggestions) {
        suggestionsContainer.style.display = 'block';
        suggestionsContainer.innerHTML = '';
        suggestions.forEach(suggestion => {
          const item = document.createElement('div');
          item.className = 'suggestion-item';
          item.textContent = suggestion;
          const closeButton = document.createElement('span');
          closeButton.textContent = 'x';
          closeButton.className = 'close-button';
          closeButton.onclick = (e) => {
            e.stopPropagation();
            const index = suggestions.indexOf(suggestion);
            if (index > -1) {
              suggestions.splice(index, 1);
              dbOperations.addSearchRecord(searchHistoryRecord)
                .then(() => dbOperations.getSearchHistory())
                .then(records => {
                  log('Got search history:', records);
                })
                .catch(error => console.error(error));
            }
            updateSuggestions(suggestions);
          };

          item.appendChild(closeButton);

          item.onclick = () => {
            searchBox.value = suggestion;
            clearSuggestions();
          };

          item.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            const index = suggestions.indexOf(suggestion);
            if (index > -1) {
              suggestions.splice(index, 1);
            }
            updateSuggestions(suggestions);
            dbOperations.addSearchRecord(searchHistoryRecord)
              .then(() => dbOperations.getSearchHistory())
              .then(records => {
                log('Got search history:', records);
              })
              .catch(error => console.error(error));
          });

          suggestionsContainer.appendChild(item);
        });
      }

      function clearSuggestions() {
        suggestionsContainer.innerHTML = '';
        suggestionsContainer.style.display = 'none';
      }

      document.addEventListener('click', function (e) {
        if (!searchContainer.contains(e.target)) {
          clearSuggestions();
        }
      });
      searchBox.addEventListener('input', function () {
        const query = this.value.trim();
        if (query.length > 0) {
          const suggestions = searchHistoryRecord.filter(existing => existing.includes(query));
          updateSuggestions(suggestions);
        } else {
          clearSuggestions();
        }
      });
      searchContainer.appendChild(searchBox);
      searchBtn.id = 'search-btn';
      searchBtn.innerText = translate("searchButton");
      searchBtn.onclick = searchKit.executeSearch;
      searchBtn.style.border = 'none';
      searchBtn.style.borderRadius = '3px';
      searchBtn.style.height = '32px';
      searchBtn.style.cursor = 'pointer';
      searchBtn.style.position = 'relative';
      searchBtn.style.top = '4px';
      searchBtn.style.backgroundColor = 'rgb(241, 241, 241)';

      searchContainer.appendChild(searchBtn);
      searchResultsCount.id = 'search-results-count';
      searchResultsCount.style.borderRadius = '3px';
      searchResultsCount.style.background = '#f1f1f1';
      searchResultsCount.style.width = '80px';
      searchResultsCount.style.height = '32px';
      searchResultsCount.style.position = 'relative';
      searchResultsCount.style.fontSize = '10px';
      searchResultsCount.style.top = '4px';
      searchResultsCount.style.left = '5px';
      searchResultsCount.style.display = 'none';

      const optionsButtons = document.createElement('div');
      optionsButtons.style.width = '490px';
      optionsButtons.style.position = 'absolute';
      optionsButtons.style.top = '250px';
      optionsButtons.style.left = '4px';
      optionsButtons.style.display = 'flex';
      optionsButtons.style.flexDirection = 'column';
      optionsButtons.style.alignItems = 'center';
      optionsButtons.style.background = 'none';
      optionsButtons.id = "optionsButtons";
      optionsButtons.style.display = 'none';
      optionsButtons.style.marginTop = '10px';

      const labelsDiv = document.createElement('div');
      labelsDiv.style.display = 'flex';
      labelsDiv.style.justifyContent = 'center';
      labelsDiv.style.width = '100%';
      labelsDiv.style.marginBottom = '20px';


      const buttonsDiv = document.createElement('div');
      buttonsDiv.style.display = 'flex';
      buttonsDiv.style.justifyContent = 'center';
      buttonsDiv.style.width = '100%';

      const options = [translate("searchInContent"), translate("searchInComments"), translate("searchInBoth")];
      options.forEach(option => {
        const label = document.createElement('label');
        label.style.marginRight = '10px';
        label.style.backgroundColor = 'rgb(221, 221, 221)';
        label.style.padding = '5px';
        label.style.borderRadius = '5px';
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'searchOption';
        radio.id = option.toLowerCase();
        radio.value = option.toLowerCase();
        if (option === translate("searchInContent")) radio.checked = true;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        labelsDiv.appendChild(label);
      });
      optionsButtons.appendChild(labelsDiv);

      const navButtons = [translate("goToPrevious"), translate("goToNext")];
      navButtons.forEach(btnText => {
        const btn = document.createElement('button');
        btn.innerText = btnText;
        btn.style.marginRight = '10px';
        btn.style.backgroundColor = 'rgb(221, 221, 221)';
        btn.style.padding = '5px';
        btn.style.borderRadius = '5px';
        if (btnText === translate("goToNext")) {
          btn.addEventListener('click', function () {
            searchKit.goToNextMatch();
          });
        }
        if (btnText === translate("goToPrevious")) {
          btn.addEventListener('click', function () {
            searchKit.gpToPreviousMatch();
          });
        }
        buttonsDiv.appendChild(btn);
      });
      optionsButtons.appendChild(buttonsDiv);


      searchContainer.appendChild(searchResultsCount);
      searchHistory.id = 'search-history';
      searchContainer.appendChild(searchHistory);
      searchContainer.appendChild(optionsButtons);
      document.body.appendChild(searchContainer);
    },
    toggleSearch: function () {
      const searchBox = document.getElementById('search-box');
      const searchHistory = document.getElementById('search-history');
      const searchIcon = document.getElementById('search-icon');
      if (!this.isSearchKitExpanded) {
        searchContainer.style.display = 'flex';
        searchContainer.style.width = '600px';
        searchHistory.style.display = 'block';
        searchBox.style.display = 'block';
        anime({
          targets: searchBox,
          width: '300px',
          duration: 500,
          easing: 'easeInOutQuart',
          opacity: 1,
          background: '#f1f1f1',
          complete: function () {
            searchBox.style.pointerEvents = 'auto';
            searchBtn.style.display = 'block';
            document.getElementById('search-history').style.display = 'flex';
            searchResultsCount.style.display = 'block';
            let opbtn = document.getElementById("optionsButtons");
            opbtn.style.display = 'block';
            searchKit.displaySearchHistory();
          }
        });
        anime({
          targets: searchHistory,
          width: '500px',
          height: '300px',
          opacity: 1,
          duration: 500,
          easing: 'easeInOutQuart',
          background: '#f1f1f1',
        });
        searchIcon.innerHTML = '❌';
        this.isSearchKitExpanded = true;
        log("this.isSearchKitExpanded:", this.isSearchKitExpanded);
      } else {
        searchContainer.style.width = '50px';
        suggestionsContainer.style.display = 'none';
        gNodes.selectAll(".node")
          .select("circle")
          .interrupt()
          .attr("opacity", 1);
        gNodes.selectAll(".node")
          .each(function (d) {
            if (matchedUUIDs.has(d.data.uuid)) {
              d3.select(this)
                .select("text")
                .style("display", "none");
            }
          });
        let opbtn = document.getElementById("optionsButtons");
        opbtn.style.display = 'none';
        searchResultsCount.style.display = 'none';
        anime({
          targets: searchBox,
          width: '0px',
          duration: 500,
          easing: 'easeInOutQuart',
          opacity: 0,
          background: 'transparent',
          begin: function () {
            searchBtn.style.display = 'none';
          },
          complete: function () {
            searchHistory.style.display = 'none';
            searchBox.style.display = 'none';
          }
        });
        anime({
          targets: searchHistory,
          width: '20px',
          height: '0px',
          opacity: 0,
          duration: 500,
          easing: 'easeInOutQuart',
          background: '#f1f1f1',
        });
        searchIcon.innerHTML = '🔍';
        this.isSearchKitExpanded = false;
        log("this.isSearchKitExpanded:", this.isSearchKitExpanded);
      }
    },
    escapeRegExp: function (string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    },
    executeSearch: function () {
      gNodes.selectAll(".node")
        .select("circle")
        .interrupt()
        .attr("opacity", 1);
      gNodes.selectAll(".node")
        .each(function (d) {
          if (matchedUUIDs.has(d.data.uuid)) {
            d3.select(this)
              .select("text")
              .style("display", "none");
          }
        });
      let rawQuery = document.getElementById('search-box').value;
      let trimmedQuery = rawQuery.trim();
      if (trimmedQuery !== null && trimmedQuery !== '' && trimmedQuery !== ' ') {
        ButtonOperations.showUserNotification(translate("executeSearchWithQuery").replace(`{item}`, rawQuery));
        searchKit.addSearchHistory(rawQuery);
        searchKit.displaySearchHistory();


        const searchOptions = document.getElementsByName("searchOption");
        let selectedOption = "";
        let selectedNum = 0;
        for (const option of searchOptions) {
          if (option.checked) {
            selectedOption = option.value;
            break;
          }
          selectedNum++;
        }
        selectedOption = selectedNum === 0 ? translate("searchInContent") : selectedNum === 1 ? translate("searchInComments") : translate("searchInBoth");
        let escapedQuery = searchKit.escapeRegExp(rawQuery);
        matchedArray = searchKit.bfsSearch(conversationData.rootNode, escapedQuery, selectedOption);
        matchedUUIDs = new Set(matchedArray.map(d => d.uuid));
        log('results:', matchedArray);
        let matches = matchedArray.length;
        document.getElementById('search-results-count').innerText = translate("numberOfMatches").replace('{matches}', matches);
        dbOperations.addSearchRecord(searchHistoryRecord)
          .then(() => dbOperations.getSearchHistory())
          .then(records => {
            log('Got search history:', records);
          })
          .catch(error => console.error(error));
        gNodes.selectAll(".node")
          .each(function (d) {
            if (matchedUUIDs.has(d.data.uuid)) {
              d3.select(this)
                .select("text")
                .style("display", "block");
            }
          });

      } else {
        alert("Please Enter Before Searching!");
      }
    },

    bfsSearch: function (tree, searchTerm, searchOption) {
      log("searchTerm:", searchTerm);
      log("in bfsSearch");
      //log("searchOption:",searchOption, "translate:",translate("searchInContent"),"\n",translate("searchInComments"),"\n",translate("searchInBoth"));
      let queue = [tree];
      let results = [];
      while (queue.length > 0) {
        let current = queue.shift();
        if (searchOption === translate("searchInContent") && current.content) {
          if (current.content.match(new RegExp(searchTerm, 'i')))
            results.push(current);
        } else if (searchOption === translate("searchInComments") && current.comment) {
          if (current.comment.match(new RegExp(searchTerm, 'i')))
            results.push(current);
        } else if (searchOption === translate("searchInBoth") && (current.content || current.comment)) {
          if (current.content) {
            if (current.content.match(new RegExp(searchTerm, 'i'))) {
              results.push(current);
            }
          }
          if (current.comment) {
            if (current.comment.match(new RegExp(searchTerm, 'i'))) {
              results.push(current);
            }
          }
        }
        if (current.children) {
          queue.push(...current.children);
        }
      }
      return results;
    },


    breathe: function (selection) {
      selection.select("circle")
        .transition()
        .duration(100)
        .attr("opacity", 0)
        .transition()
        .duration(100)
        .attr("opacity", 1)
        .on("end", function () {
          if (!this.stopBreathing) {
            searchKit.breathe(selection);
          }
        });
    },

    goToNextMatch: function () {

      log("In goToNextMatch");

      if (matchedArray.length === 0) return;
      this.stopBreathing = true;
      gNodes.selectAll(".node")
        .select("circle")
        .interrupt()
        .attr("opacity", 1);
      log("matchedArray:", matchedArray);
      log("before_currentTreeBreathingIndex", currentTreeBreathingIndex);
      currentTreeBreathingIndex = (currentTreeBreathingIndex + 1) % matchedArray.length;
      log("after_currentTreeBreathingIndex", currentTreeBreathingIndex);
      log("matchedArray[currentTreeBreathingIndex]", matchedArray[currentTreeBreathingIndex]);
      let currentNodeUUID = matchedArray[currentTreeBreathingIndex].uuid;
      log("NextUUID:", currentNodeUUID);
      let nextNodeSelection = gNodes.selectAll(".node").filter(d => d.data.uuid === currentNodeUUID);
      log("nextNodeSelection:", nextNodeSelection);
      this.stopBreathing = false;
      searchKit.breathe(nextNodeSelection);
      searchKit.centerNodeOnScreen(nextNodeSelection);
      log("Out goToNextMatch");
    },

    gpToPreviousMatch: function () {
      if (matchedArray.length === 0) return;
      log("In goToNextMatch");
      this.stopBreathing = true;
      gNodes.selectAll(".node")
        .select("circle")
        .interrupt()
        .attr("opacity", 1);
      log("matchedArray:", matchedArray);
      currentTreeBreathingIndex = (currentTreeBreathingIndex - 1 + matchedArray.length) % matchedArray.length;
      log("currentTreeBreathingIndex", currentTreeBreathingIndex);
      log("matchedArray[currentTreeBreathingIndex]", matchedArray[currentTreeBreathingIndex]);
      let currentNodeUUID = matchedArray[currentTreeBreathingIndex].uuid;
      log("NextUUID:", currentNodeUUID);
      let nextNodeSelection = gNodes.selectAll(".node").filter(d => d.data.uuid === currentNodeUUID);
      log("nextNodeSelection:", nextNodeSelection);
      this.stopBreathing = false;
      searchKit.breathe(nextNodeSelection);
      searchKit.centerNodeOnScreen(nextNodeSelection);
      log("Out goToNextMatch");

    },
    centerNodeOnScreen: function (node) {
      let nodeData = node.datum();
      let nodeX = nodeData.x;
      let nodeY = nodeData.y;
      let newScale = 2;
      let horizontalTranslate = (window.innerWidth / 2) - (nodeX * newScale);
      let verticalTranslate = (window.innerHeight / 3) - (nodeY * newScale);
      let nodeTransform = d3.zoomIdentity.translate(horizontalTranslate, verticalTranslate).scale(newScale);
      svg.transition().duration(750).call(zoom.transform, nodeTransform);
    },

    addSearchHistory: function (query) {
      if (searchHistoryRecord.includes(query)) {
        let index = searchHistoryRecord.indexOf(query);
        searchHistoryRecord.splice(index, 1);
      }
      searchHistoryRecord.unshift(query);
    },

    displaySearchHistory: function () {
      let container = document.getElementById('search-history');
      container.innerHTML = '';
      let displayedCount = 0;
      searchHistoryRecord.forEach(item => {
        if (displayedCount >= 20) {
          return;
        }
        displayedCount++;
        let historyItem = document.createElement('div');
        historyItem.className = 'history-item';

        let text = document.createElement('div');
        text.className = 'history-text';
        text.innerText = item;
        historyItem.appendChild(text);

        historyItem.onclick = () => {

          searchBox.value = item;
        };
        historyItem.style.cursor = 'pointer';
        let deleteBtn = document.createElement('div');
        deleteBtn.className = 'history-delete';
        deleteBtn.innerText = 'x';
        deleteBtn.onclick = function (e) {
          e.stopPropagation();
          let index = searchHistoryRecord.indexOf(item);
          searchHistoryRecord.splice(index, 1);
          searchKit.displaySearchHistory();
          dbOperations.addSearchRecord(searchHistoryRecord)
            .then(() => dbOperations.getSearchHistory())
            .then(records => {
              log('Got search history:', records);
            })
            .catch(error => console.error(error));

        };
        historyItem.appendChild(deleteBtn);
        container.appendChild(historyItem);
      });
    },
  };

  searchKit.init();

  let panelToggleButton = document.createElement('button');
  // Create the 'managePanel' div
  let managePanel = document.createElement('div');
  let topicSearchContainer = document.createElement('div');
  let searchTopicBox = document.createElement('input');
  let categoryEditor = document.createElement('div');
  let categorySelect = document.createElement('select');
  let conversationContainer = document.createElement('div');
  let togglePanel = document.createElement('div');
  const controlPanelKit = {
    init: function () {
      panelToggleButton.id = "panelToggleButton";
      panelToggleButton.innerText = translate("openAdminPanel");
      panelToggleButton.style.display = 'none';
      panelToggleButton.style.borderRadius = '12px'; // 更大的圆角
      panelToggleButton.style.opacity = '0.9'; // 轻微调整透明度
      panelToggleButton.style.background = 'linear-gradient(to right, #007BFF, #00C6FF)'; // 线性渐变背景
      panelToggleButton.style.color = 'white'; // 文字颜色设置为白色
      panelToggleButton.style.padding = '10px 20px'; // 添加一些内边距
      panelToggleButton.style.fontWeight = 'bold'; // 粗体字
      panelToggleButton.style.boxShadow = '0px 3px 5px rgba(0,0,0,0.2)'; // 添加微小的阴影

      document.body.appendChild(panelToggleButton);


      managePanel.id = 'managePanel';
      managePanel.style.display = 'none';
      // Create the 'searchContainer' div
      topicSearchContainer.id = 'searchContainer';
      topicSearchContainer.style.marginTop = '20px';
      topicSearchContainer.style.marginLeft = '20px';

      // Create the search input box
      searchTopicBox.type = 'text';
      searchTopicBox.id = 'searchTopicBox';
      searchTopicBox.setAttribute("placeholder", translate("searchPlaceholder"));

      // Append the search box to the 'searchContainer' div
      topicSearchContainer.appendChild(searchTopicBox);

      // Create the 'categoryEditor' div
      categoryEditor.id = 'categoryEditor';
      categoryEditor.className = 'editor';

      // Create the select box for categories
      categorySelect.id = 'categorySelect';
      categorySelect.style.marginTop = '20px';
      categorySelect.style.marginLeft = '20px';
      // Add options to the select box
      dbOperations.initConversationData()
        .then(information => {
          controlPanelKit.updateCategorySelect();
        })
        .catch(error => console.error(error));
      let allCategoriesString = translate("allCategoriesFilter");
      let categories = [allCategoriesString];
      for(let i = 0; i < chatHistory.length; i ++){
        let curChat = chatHistory[i];
        if(curChat.categories){
          for(let j =0; j < curChat.categories.length; j++){
            if(!categories.includes(curChat.categories[j]))
              categories.push(curChat.categories[j]);
          }
        }
      }
      categories.forEach(optionText => {
        let option = document.createElement('option');
        option.text = optionText;
        categorySelect.appendChild(option);
      });
      // Append the select box to the 'categoryEditor' div
      categoryEditor.appendChild(categorySelect);

      let translatedTitle = translate('conversationTitle');
      let translatedOption = translate('actionOptions');
      let translatedCategory = translate('conversationCategory');
      let translatedTags = translate('conversationTags');

      let panelHeader = document.createElement('div');
      panelHeader.id = 'panelHeader';
      // panelHeader.innerHTML =
      //   '<br><hr><hr><hr><hr><br><div class="conversation" style="display: flex; justify-content: space-between; align-items: center; background-color: #f3f4f6; padding: 10px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"><div class="topic-container" style="flex: 2; text-align: center; display: flex; justify-content: center; flex-wrap: wrap;"><span class="category" style="background-color: #a0aec0; color: #ffffff; padding: 5px; border-radius: 4px; margin: 2px;">　　${translatedTitle}　　</span></div><div class="options-container" id="optionsContainer_03e7f1e764254835b3cb29c68e3827a8" style="flex: 0.7; text-align: center; background-color: #e2e8f0; padding: 5px; border-radius: 4px;">操作</div><div class="categories-container" id="categoriesContainer_03e7f1e764254835b3cb29c68e3827a8" style="flex: 1.5; text-align: center; display: flex; justify-content: center; flex-wrap: wrap;"><span class="category" style="background-color: #a0aec0; color: #ffffff; padding: 5px; border-radius: 4px; margin: 2px;">分类</span></div><div class="tags-container" id="tagContainers_03e7f1e764254835b3cb29c68e3827a8" style="flex: 1.5; text-align: center; display: flex; justify-content: center; flex-wrap: wrap;"><span class="chat-tree-tag" style="background-color: #a0aec0; color: #ffffff; padding: 5px; border-radius: 4px; margin: 2px;">标签</span></div></div><br><hr><hr><hr><hr>';
      panelHeader.innerHTML = `
  <br>
  <hr>
  <hr>
  <hr>
  <hr>
  <br>
  <div class="conversation" style="display: flex; justify-content: space-between; align-items: center; background-color: #f3f4f6; padding: 10px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <div class="topic-container" style="flex: 2; text-align: center; display: flex; justify-content: center; flex-wrap: wrap;">
      <span class="category" style="background-color: #83c5be; color: #ffffff; padding: 5px; border-radius: 4px; margin: 2px; width: 40%;">
        ${translatedTitle}
      </span>
    </div>
    <div class="options-container" style="flex: 0.7; text-align: center; background-color: #e2e8f0; padding: 5px; border-radius: 4px;">
      ${translatedOption}
    </div>
    <div class="categories-container" style="flex: 1.5; text-align: center; display: flex; justify-content: center; flex-wrap: wrap;">
      <span class="category" style="background-color: #a0aec0; color: #ffffff; padding: 5px; border-radius: 4px; margin: 2px; width: 30%;">
        ${translatedCategory}
      </span>
    </div>
    <div class="tags-container" style="flex: 1.5; text-align: center; display: flex; justify-content: center; flex-wrap: wrap;">
      <span class="chat-tree-tag" style="background-color: #a0aec0; color: #ffffff; padding: 5px; border-radius: 4px; margin: 2px; width: 30%;">
        ${translatedTags}
      </span>
    </div>
  </div>
  <br>
  <hr>
  <hr>
  <hr>
  <hr>
`;
      // Create the 'conversationContainer' div
      conversationContainer.id = 'conversationContainer';
      conversationContainer.style.marginTop = '20px';
      conversationContainer.style.overflow = 'auto';
      conversationContainer.style.maxHeight = '700px';
      // Append all child divs to the 'managePanel' div
      managePanel.appendChild(topicSearchContainer);
      managePanel.appendChild(categoryEditor);
      managePanel.appendChild(panelHeader);

      managePanel.appendChild(conversationContainer);

      // Append 'managePanel' to the document body or another container element
      document.body.appendChild(managePanel);

      managePanel.style.height = window.innerHeight - 20 + 'px';
      togglePanel.innerHTML = '×';
      togglePanel.style.position = 'fixed';
      togglePanel.style.fontSize = '30px';
      togglePanel.style.top = '20px';
      togglePanel.style.right = '20px';
      togglePanel.style.cursor = 'pointer';

      managePanel.appendChild(togglePanel);
      //controlPanelKit.renderConversations(chatHistory);
      controlPanelKit.addEventListeners();
    },
    updateCategorySelect: function(){
      log("inupdateSelect!");
      categorySelect.innerHTML = '';
      let allCategoriesString = translate("allCategoriesFilter");
      let categories = [allCategoriesString];
      for(let i = 0; i < chatHistory.length; i ++){
        let curChat = chatHistory[i];
        if(curChat.categories){
          for(let j =0; j < curChat.categories.length; j++){
            if(!categories.includes(curChat.categories[j]))
              categories.push(curChat.categories[j]);
          }
        }
      }
      categories.forEach(optionText => {
        let option = document.createElement('option');
        option.text = optionText;
        categorySelect.appendChild(option);
      });
    },
    addEventListeners: function () {
      panelToggleButton.addEventListener('click', controlPanelKit.toggleHistoryPanel);

      searchTopicBox.addEventListener("input", controlPanelKit.executeFilter);
      categorySelect.addEventListener('change', controlPanelKit.executeFilter);
      togglePanel.addEventListener('click', function () {
        managePanel.style.display = 'none';
        panelToggleButton.style.display = 'block';
      });
    },
    executeFilter:function(){
      const selectedCategory = categorySelect.value.toLowerCase(); // 注意转换为小写
      const query = searchTopicBox.value.toLowerCase();
      let filteredConversations = chatHistory.filter(conv => {
        return conv.topic.toLowerCase().includes(query);
      });
      let truely_filtered;
      if(selectedCategory !== translate('allCategoriesFilter').toLowerCase()) {
        truely_filtered = filteredConversations.filter(conv => {
          return conv.categories.some(category => category.toLowerCase().includes(selectedCategory));
        });
        controlPanelKit.renderConversations(truely_filtered);
        log(`User selected category: ${selectedCategory}, filteredConversations:`, truely_filtered);
      }
      else {
        controlPanelKit.renderConversations(filteredConversations);
        log(`User selected category: ${selectedCategory}, filteredConversations:`, filteredConversations);
      }
    },
    toggleHistoryPanel: function () {
      managePanel.style.display = 'block';
      panelToggleButton.style.display = 'none';
    },
    renderConversations: function (conversations) {

      //log("in render:");
      const conversationContainer = document.getElementById("conversationContainer");
      conversationContainer.innerHTML = ""; // Clear existing conversations
      let conversation_num = 0;
      conversations.forEach(conv => {
        conversation_num++;
        //const safeId = conv.id.replace(/-/g, '');
        const safeId = conv.id;

        const convElem = document.createElement("div");
        convElem.classList.add("conversation");
        convElem.style.display = "flex";
        convElem.style.justifyContent = "space-between";


        // Create action buttons container
        const actionContainer = document.createElement("div");
        actionContainer.classList.add("conversation-actions");

        // Add topic
        const topicElem = document.createElement("h3");
        topicElem.classList.add("topic");
        const topicElem_2 = document.createElement("h3");
        topicElem_2.innerText =  conversation_num.toString()+ '　';
        topicElem.innerText = conv.topic;
        // 创建包含标题和按钮的一个容器
        const topicContainer = document.createElement("div");
        topicContainer.classList.add('topicContainer');
        topicContainer.appendChild(topicElem_2);
        topicContainer.appendChild(topicElem);

        // 创建包含修改和删除按钮的一个容器
        const optionsContainer = document.createElement("div");
        optionsContainer.id = "optionsContainer_" + safeId;
        optionsContainer.classList.add("optionsContainer");
        optionsContainer.innerHTML = '<div class="flex visible">   <button class="p-1 hover:text-token-text-primary"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button>    <button class="p-1 hover:text-token-text-primary"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>  <button class="p-1 hover:text-token-text-primary">' +
          '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>' +
          '</button>   <button class="p-1 hover:text-token-text-primary" style="cursor: pointer;"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 14H19C20.1046 14 21 13.1046 21 12V5C21 3.89543 20.1046 3 19 3H12C10.8954 3 10 3.89543 10 5V6.5M5 10H12C13.1046 10 14 10.8954 14 12V19C14 20.1046 13.1046 21 12 21H5C3.89543 21 3 20.1046 3 19V12C3 10.8954 3.89543 10 5 10Z"></path></svg></button></div>'
        let buttons = optionsContainer.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].style.cursor = 'pointer';
        }

        buttons[0].addEventListener('click', function () {
          let topicElem = convElem.querySelector(".topic");
          createTopicInput(conv, topicElem);
        })
        buttons[1].addEventListener('click', function () {
          settingsKit.deleteConversationData(conv.link, true);
        })
        buttons[2].addEventListener('click', function () {
          window.open(conv.link, '_blank');

          // let templink = document.createElement('a');
          // templink.href = conv.link;
          // templink.target = '_blank';
          // document.body.appendChild(templink);
          // templink.click();
          // templink.remove();
        })
        buttons[3].addEventListener('click', function () {
          nodesInAndOutKit.copyToClipboard(conv.link);
          log("link_copied!");
        })
        function createTopicInput(conv, replacedtopicElem) {
          const input = document.createElement("input");
          input.type = "text";
          input.value = replacedtopicElem.innerText;
          input.addEventListener('blur', function () {
            const value = input.value;
            if (value.trim()) {
              const topicElem = document.createElement("h3");
              topicElem.innerText = value;
              conv.topic = value;
              topicElem.classList.add("topic");
              topicContainer.appendChild(topicElem);
              dbOperations.changeConversationDataTopic(conv.link, value)
            } else {
              const topicElem = document.createElement("h3");
              topicElem.innerText = conv.topic;
              topicElem.classList.add("topic");
              topicContainer.appendChild(topicElem);
            }
            input.remove();
          });
          topicContainer.replaceChild(input, replacedtopicElem);
          input.focus();
        }

        // 向 convElem 添加左和右容器
        topicContainer.style.overflow = 'hidden';

        convElem.appendChild(topicContainer);
        convElem.appendChild(optionsContainer);


        let categoriesContainer = document.createElement('div');
        categoriesContainer.className = 'categoriesContainer';
        categoriesContainer.id = "categoriesContainer_" + safeId;
        conv.categories.forEach(category => {

          // Add category
          const categoryElem = document.createElement("span");
          categoryElem.classList.add("category");
          categoryElem.innerText = `${category}`;


          // Add 'x' button for category
          const catDeleteBtn = document.createElement("span");
          catDeleteBtn.innerHTML = "&times;";
          catDeleteBtn.classList.add("delete-icon");
          catDeleteBtn.onclick = function () {
            deleteClassOrTag("category", categoryElem, conv, category)

            // categoryElem.remove();
            // conv.categories = conv.categories.filter(cat => cat !== category);
          };
          categoryElem.appendChild(catDeleteBtn);
          categoriesContainer.appendChild(categoryElem);

        });
        convElem.appendChild(categoriesContainer);
        // Add '+' button for adding new chatTreeTag or category
        const addClassBtn = document.createElement("span");
        addClassBtn.innerHTML = "+";
        addClassBtn.classList.add("add-icon");
        addClassBtn.onclick = function () {
          createClassOrTagInput(categoriesContainer, "category", addClassBtn, conv);
        };

        categoriesContainer.appendChild(addClassBtn);


        let tagContainers = document.createElement('div');
        tagContainers.className = 'tagContainers';
        tagContainers.id = "tagContainers_" + safeId;

        // Add chatTreeTags
        conv.chatTreeTags.forEach(chatTreeTag => {
          const chatTreeTagElem = document.createElement("span");
          chatTreeTagElem.classList.add("chatTreeTag");
          chatTreeTagElem.innerText = `${chatTreeTag}`;

          // Add 'x' button for chatTreeTag
          const chatTreeTagDeleteBtn = document.createElement("span");
          chatTreeTagDeleteBtn.innerHTML = "&times;";
          chatTreeTagDeleteBtn.classList.add("delete-icon");
          chatTreeTagDeleteBtn.onclick = function () {
            deleteClassOrTag("chatTreeTag", chatTreeTagElem, conv, chatTreeTag)
            // chatTreeTagElem.remove();
            // conv.chatTreeTags = conv.chatTreeTags.filter(tag => tag !== chatTreeTag);
          };
          chatTreeTagElem.appendChild(chatTreeTagDeleteBtn);

          tagContainers.appendChild(chatTreeTagElem);
        });
        convElem.appendChild(tagContainers);

        // Add '+' button for adding new chatTreeTag or category
        const addChatTreeTagBtn = document.createElement("span");
        addChatTreeTagBtn.innerHTML = "+";
        addChatTreeTagBtn.classList.add("add-icon");
        addChatTreeTagBtn.onclick = function () {
          createClassOrTagInput(tagContainers, "chatTreeTag", addChatTreeTagBtn, conv);
        };

        tagContainers.appendChild(addChatTreeTagBtn);

        function deleteClassOrTag(className, deletedTag, conv, value) {
          let operatingURL = conv.link;
          if (className === 'chatTreeTag') {
            dbOperations.addOrDeleteTagOrClassToURL(operatingURL, true, value, false);
            conv.chatTreeTags = conv.chatTreeTags.filter(tag => tag != value);
          }
          else{
            dbOperations.addOrDeleteTagOrClassToURL(operatingURL, false, value, false);
            conv.categories = conv.categories.filter(tag => tag != value);
          }
          deletedTag.remove();
        }

        function createClassOrTagInput(convElem, className, replacedButton, conv) {
          // let safeId = convElem.id.split("_")[1];
          // let foundObject = chatHistory.find(chat => chat.id === safeId);
          //
          // if (foundObject) {
          //   log("Found the object:", foundObject);
          // } else {
          //   log("Object not found");
          //   return;
          // }
          // log("conv:",conv);
          let operatingURL = conv.link;
          const input = document.createElement("input");
          input.type = "text";
          input.placeholder = `Enter new value`;
          convElem.replaceChild(input, replacedButton);
          input.focus();
          input.addEventListener('blur', function () {
            const value = input.value;
            if (value.trim()) {
              // 创建新的类别或标签
              const newElem = document.createElement("span");
              newElem.classList.add(className); // 使用合适的类名
              newElem.innerText = value;
              convElem.insertBefore(newElem, input);

              const catDeleteBtn = document.createElement("span");
              catDeleteBtn.innerHTML = "&times;";
              catDeleteBtn.classList.add("delete-icon");

              newElem.appendChild(catDeleteBtn);
              if (className === 'chatTreeTag') {
                conv.chatTreeTags.push(value);
                dbOperations.addOrDeleteTagOrClassToURL(operatingURL, true, value, true);
                catDeleteBtn.onclick = function () {
                  deleteClassOrTag(className, newElem, conv, value);
                };

              } else {

                conv.categories.push(value);
                dbOperations.addOrDeleteTagOrClassToURL(operatingURL, false, value, true);
                catDeleteBtn.onclick = function () {
                  deleteClassOrTag(className, newElem, conv, value);
                };
              }
            }

            let addedBtn;

            if (className === 'chatTreeTag') {
              // Add '+' button for adding new chatTreeTag or category
              addedBtn = document.createElement("span");
              addedBtn.innerHTML = "+";
              addedBtn.classList.add("add-icon");
              addedBtn.onclick = function () {
                createClassOrTagInput(convElem, "chatTreeTag", addedBtn, conv);
              }
            } else {
              // Add '+' button for adding new chatTreeTag or category
              addedBtn = document.createElement("span");
              addedBtn.innerHTML = "+";
              addedBtn.classList.add("add-icon");
              addedBtn.onclick = function () {
                createClassOrTagInput(convElem, "category", addedBtn, conv);
              };
            }
            if (input.nextSibling) {
              convElem.insertBefore(addedBtn, input.nextSibling);
            } else {
              convElem.appendChild(addedBtn);
            }
            input.remove();
          });
        }

        conversationContainer.appendChild(convElem);
      });
    },
  };
})();
