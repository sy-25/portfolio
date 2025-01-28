new Vue({
    el: '#mercari',

    data: {
        brand: [
            {
                title:'ナイキ',
                url:'/',
                img:'./assets/images/popularity_nike.png',
            },
            {
                title:'アップル',
                url:'/',
                img:'./assets/images/popularity_apple.png',
            },
            {
                title:'ニンテンドースイッチ',
                url:'/',
                img:'./assets/images/popularity_switch.png',
            },
            {
                title:'ソニー',
                url:'/',
                img:'./assets/images/popularity_sony.png',
            },
            {
                title:'ポケモン',
                url:'/',
                img:'./assets/images/popularity_pokemon.png',
            },
            {
                title:'ユニクロ',
                url:'/',
                img:'./assets/images/popularity_uniqlo.png',
            },
        ],

        category: [
            {
                title:'おもちゃ',
                url:'/',
                img:'./assets/images/popularity_toy.png',
            },
            {
                title:'本',
                url:'/',
                img:'./assets/images/popularity_book.png',
            },
            {
                title:'バッグ',
                url:'/',
                img:'./assets/images/popularity_bag.png',
            },
            {
                title:'トレーディングカード',
                url:'/',
                img:'./assets/images/popularity_tradingcard.png',
            },
            {
                title:'CD/DVD',
                url:'/',
                img:'./assets/images/popularity_dvd.png',
            },
            {
                title:'コミック/アニメグッズ',
                url:'/',
                img:'./assets/images/popularity_animegoods.png',
            },
        ],

        recommend: [
            {
                title:'ホワイトジョーラ　レイヤード風ブラウス　シフォン　レース　きれいめ　通勤　M〜L',
                img:'./assets/images/goods/goods_01.jpg',
                price:'30,000',
                sold: true,
            },
            {
                title:'【BEAMS LIGHTS】(38) 毛 チェック柄 ノーカラージャケット',
                img:'./assets/images/goods/goods_02.jpg',
                price:'15,000',
                sold: false,
            },
            {
                title:'1 / 6五等分の花嫁　二乃　タペストリー　まとめ売り　6点セット',
                img:'./assets/images/goods/goods_03.jpg',
                price:'21,000',
                sold: false,
            },
            {
                title:'【長袖シャツ　透け感　ヨーロピアン　アイボリー　黒　水色　古着】',
                img:'./assets/images/goods/goods_04.jpg',
                price:'2,000',
                sold: false,
            },
            {
                title:'ティファニー ナロー 1837 バンド リング 指輪 12号 ey2',
                img:'./assets/images/goods/goods_05.jpg',
                price:'120,000',
                sold: false,
            },
            {
                title:'【新作】サングラス　黒　ブラック　木目　ウッド　カラー　スクエア',
                img:'./assets/images/goods/goods_06.jpg',
                price:'1,500',
                sold: false,
            },
            {
                title:'9657【希少Lサイズ】シュプリーム☆刺繍アーチロゴ半袖デニムシャツ 美品',
                img:'./assets/images/goods/goods_07.jpg',
                price:'5,600',
                sold: true,
            },
            {
                title:'【新品・未使用 ・未開封】IMPACTors 佐藤新アクリルスタンド2023',
                img:'./assets/images/goods/goods_08.jpg',
                price:'3,500',
                sold: true,
            },
            {
                title:'多様性を活かすダイバーシティ経営 実践編　日本規格協会／荒金雅子',
                img:'./assets/images/goods/goods_09.jpg',
                price:'2,000',
                sold: false,
            },
            {
                title:'細川知栄子　紙製下敷き　王家の紋章　プリンセス　２枚セット　昭和レトロ　２',
                img:'./assets/images/goods/goods_10.jpg',
                price:'30,000',
                sold: false,
            },
            {
                title:'✨美品✨ネクタイ ストライプ 縦ライン ポリエステル ウォッシャブル加工 紳士',
                img:'./assets/images/goods/goods_11.jpg',
                price:'15,000',
                sold: false,
            },
            {
                title:'まっぷる　由布院　別府　日田　旅行ガイドブック',
                img:'./assets/images/goods/goods_12.jpg',
                price:'100',
                sold: false,
            },
            {
                title:'MURUA ニット おしゃれニット　袖フレア　サイズF',
                img:'./assets/images/goods/goods_13.jpg',
                price:'1,600',
                sold: false,
            },
            {
                title:'【ヒロコビス】トレンチコート 　スプリングコート　黒　Ⅼ　ステンカラーコート',
                img:'./assets/images/goods/goods_14.jpg',
                price:'3,500',
                sold: false,
            },
            {
                title:'2個セット　ペルソナ5　指輪　ペアリング　フリーサイズ　新品　人気☆',
                img:'./assets/images/goods/goods_15.jpg',
                price:'3,000',
                sold: false,
            },
            {
                title:'新品未使用　Wedge Leathers　FLAT-BAR　マスクレスト',
                img:'./assets/images/goods/goods_16.jpg',
                price:'2,500',
                sold: false,
            },
            {
                title:'【新品】　サンリオ　ハローキティ　50周年　チャーム　シナモロール　クロミ',
                img:'./assets/images/goods/goods_17.jpg',
                price:'70,000',
                sold: false,
            },
            {
                title:'◆新品◆ハート型ピアス キャッチ式 レディース アクセサリー シルバー',
                img:'./assets/images/goods/goods_18.png',
                price:'2,000',
                sold: false,
            },
            {
                title:'ユニクロ Tシャツ UT マトリックス Lサイズ',
                img:'./assets/images/goods/goods_19.png',
                price:'1,500',
                sold: true,
            },
            {
                title:'良品 REGAL 23.5 レザースリッポン シューズ ローファー',
                img:'./assets/images/goods/goods_20.jpg',
                price:'50,000',
                sold: false,
            },
        ],

        history: [
        ],

        modalOpen: false,

        toggleAbout: true,
        toggleHelp: true,
        togglePrivacy: true,
    },

    methods: {
        addHistory: function(event) {
            const historyLink = event.target.closest('.js-listItemLink');
            const historyItemText = historyLink.querySelector('.js-listItemText').textContent;
            const historyItemImg = historyLink.querySelector('.js-listItemImg').getAttribute('src');
            const historyItemPrice = historyLink.querySelector('.js-listItemPrice').textContent.substring(1);
            const historyItemSold = historyLink.querySelector('.js-listItemSold').style.display;
            this.history.unshift({ title: historyItemText, img: historyItemImg, price: historyItemPrice, sold: !historyItemSold});
            this.historyKey += 1;
        },

        deleteHistory: function() {
            this.history.splice(0);
            this.modalOpen = !this.modalOpen;
        },

        toggleModal: function() {
            this.modalOpen = !this.modalOpen;
        }
    },
})

const scrollRootElement = document.querySelector('.js-history')
const scrollWrap = scrollRootElement.querySelector('.js-listWrapper');
const scrollContent = scrollRootElement.querySelector('.js-scrollContent');
const scrollPrevButton = scrollRootElement.querySelector('.js-buttonPrev');
const scrollNextButton = scrollRootElement.querySelector('.js-buttonNext');
const isActive = 'is-active'
const scrollValue = 300;

const observer = new MutationObserver(() => {
    const scrollWrapWidth = scrollWrap.offsetWidth;
    const scrollContentWidth = scrollContent.offsetWidth;

    if (scrollContentWidth > scrollWrapWidth) {
        scrollNextButton.classList.add(isActive);
    } else {
        scrollNextButton.classList.remove(isActive);
    }
});

observer.observe(scrollContent, {
    childList: true,
    subtree: true
});

scrollPrevButton.addEventListener('click', () => {
    const newScrollValue = Math.floor((scrollWrap.scrollLeft) / scrollValue) * scrollValue - scrollValue;
    scrollWrap.scrollTo({
        left: Math.max(0, newScrollValue),
        behavior: 'smooth'
    });
});

scrollNextButton.addEventListener('click', () => {
    const newScrollValue = Math.ceil((scrollWrap.scrollLeft) / scrollValue) * scrollValue + scrollValue;
    scrollWrap.scrollTo({
        left: newScrollValue,
        behavior: 'smooth'
    });
});

scrollWrap.addEventListener('scroll', () => {
    const maxScroll = scrollContent.offsetWidth - scrollWrap.offsetWidth;

    if (scrollWrap.scrollLeft === 0) {
        scrollPrevButton.classList.remove(isActive);
    } else {
        scrollPrevButton.classList.add(isActive);
    }

    if (Math.ceil(scrollWrap.scrollLeft) >= maxScroll) {
        scrollNextButton.classList.remove(isActive);
    } else {
        scrollNextButton.classList.add(isActive);
    }
});