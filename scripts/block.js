jq = jQuery.noConflict(true);

jq.expr[':'].contains = function(a, i, m) {
    return jq(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

function detect(kv) {
	
    var count = 0;
    if (window.location.href.indexOf(kv) > -1) {
        count = count + 4;
    }
    if (window.jq) {
		
        jq('meta').each(function(index) {
            if (jq(this).attr('content')) {
                if (jq(this).attr('content').indexOf(kv) != -1) count = count + 2;
            }
        });
		
        var found = jq("html:contains(" + kv + ")");
		
        if (found.length) {
			
            var content_count = 0;

				 if (kv == "porn") content_count = (found.text().match(/porn/gi) || []).length;
            else if (kv == "fuck") content_count = (found.text().match(/fuck/gi) || []).length;
            else if (kv == "sex") content_count = (found.text().match(/sex/gi) || []).length;
			
            else if (kv == "секс") content_count = (found.text().match(/секс/gi) || []).length;
            else if (kv == "порно") content_count = (found.text().match(/порно/gi) || []).length;
            else if (kv == "трахн") content_count = (found.text().match(/трахн/gi) || []).length;
            else if (kv == "траха") content_count = (found.text().match(/траха/gi) || []).length;
			
            else if (kv == "ебать") content_count = (found.text().match(/ебать/gi) || []).length;
            else if (kv == "дрочить") content_count = (found.text().match(/дрочить/gi) || []).length;
            else if (kv == "минет") content_count = (found.text().match(/минет/gi) || []).length;
            else if (kv == "лесбиянки") content_count = (found.text().match(/лесбиянки/gi) || []).length;
            else if (kv == "сиськи") content_count = (found.text().match(/сиськи/gi) || []).length;
            else if (kv == "сперма") content_count = (found.text().match(/сперма/gi) || []).length;
            else if (kv == "анальное") content_count = (found.text().match(/анальное/gi) || []).length;
            else if (kv == "групповуха") content_count = (found.text().match(/групповуха/gi) || []).length;
            else if (kv == "футфетиш") content_count = (found.text().match(/футфетиш/gi) || []).length;
            else if (kv == "оргазм") content_count = (found.text().match(/оргазм/gi) || []).length;
            else if (kv == "писающие") content_count = (found.text().match(/писающие/gi) || []).length;
            else if (kv == "кугудтгшус") content_count = (found.text().match(/кугудтгшус/gi) || []).length;
            else if (kv == "фистинг") content_count = (found.text().match(/фистинг/gi) || []).length;
            else if (kv == "мастурбация") content_count = (found.text().match(/мастурбация/gi) || []).length;
            else if (kv == "камшот") content_count = (found.text().match(/камшот/gi) || []).length;
            else if (kv == "brazzers") content_count = (found.text().match(/brazzers/gi) || []).length;
            else if (kv == "twistys") content_count = (found.text().match(/twistys/gi) || []).length;
			
            else if (kv == "色情") content_count = (found.text().match(/色情/gi) || []).length;
            else if (kv == "性别") content_count = (found.text().match(/性别/gi) || []).length;
            else if (kv == "他妈的") content_count = (found.text().match(/他妈的/gi) || []).length;
            else if (kv == "seks") content_count = (found.text().match(/seks/gi) || []).length;
            else if (kv == "kahretsin") content_count = (found.text().match(/kahretsin/gi) || []).length;
            else if (kv == "sexo") content_count = (found.text().match(/sexo/gi) || []).length;
            else if (kv == "porra") content_count = (found.text().match(/porra/gi) || []).length;
            else if (kv == "pierdolić") content_count = (found.text().match(/pierdolić/gi) || []).length;
            else if (kv == "kjønn") content_count = (found.text().match(/kjønn/gi) || []).length;
            else if (kv == "knulle") content_count = (found.text().match(/knulle/gi) || []).length;
            else if (kv == "neuken") content_count = (found.text().match(/neuken/gi) || []).length;
            else if (kv == "포르노") content_count = (found.text().match(/포르노/gi) || []).length;
            else if (kv == "섹스") content_count = (found.text().match(/섹스/gi) || []).length;
            else if (kv == "씨발") content_count = (found.text().match(/씨발/gi) || []).length;
            else if (kv == "ポルノ") content_count = (found.text().match(/ポルノ/gi) || []).length;
            else if (kv == "セックス") content_count = (found.text().match(/セックス/gi) || []).length;
            else if (kv == "くそ") content_count = (found.text().match(/くそ/gi) || []).length;
            else if (kv == "ファック") content_count = (found.text().match(/ファック/gi) || []).length;
            else if (kv == "sesso") content_count = (found.text().match(/sesso/gi) || []).length;
            else if (kv == "cazzo") content_count = (found.text().match(/cazzo/gi) || []).length;
            else if (kv == "joder") content_count = (found.text().match(/joder/gi) || []).length;
            else if (kv == "szex") content_count = (found.text().match(/szex/gi) || []).length;
            else if (kv == "fasz") content_count = (found.text().match(/fasz/gi) || []).length;
            else if (kv == "sexe") content_count = (found.text().match(/sexe/gi) || []).length;
            else if (kv == "baise") content_count = (found.text().match(/baise/gi) || []).length;
            else if (kv == "scheiße") content_count = (found.text().match(/scheiße/gi) || []).length;
            else if (kv == "fick") content_count = (found.text().match(/fick/gi) || []).length;
            else if (kv == "لإباحية") content_count = (found.text().match(/لإباحية/gi) || []).length;
            else if (kv == "جنس") content_count = (found.text().match(/جنس/gi) || []).length;
			
            var count = count + content_count;
        }
    }
    return count;
}

function blockAccess() {
    chrome.runtime.sendMessage({
        method: "blockAccess"
    }, function(response) {});

    document.title = "This page is not available! Prohibited content!";
	
    jq("a").off("click");
	
    var docHeight = jq(document).height();
    jq("body").html('')
        .append(`<div id='block-overlay'><div id='block-message'><img alt='X' src='${chrome.extension.getURL("/icons/xxx.png")}' /></div></div>`);

    jq("#block-overlay")
        .height(docHeight)
        .css({
            'opacity': 1,
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'background-color': '#ff3d35',
            'width': '100%',
            'height': '100%',
            'overflow': 'hidden',
            'z-index': '999999999'
        });

    jq("#block-message")
        .css({
            'position': 'absolute',
            'left': '50%',
            'top': '50%',
            'width': '640px',
            'margin': '-128px 0 0 -320px'
        });

    jq("#block-message img").css({
        'float': 'left'
    });
}

if (
		detect("секс") > 5 || 
		detect("ебать") > 5 || 
		detect("дрочить") > 5 || 
		detect("минет") > 3 || 
		detect("лесбиянки") > 5 || 
		detect("сиськи") > 5 || 
		detect("сперма") > 5 || 
		detect("анальное") > 5 || 
		detect("групповуха") > 5 || 
		detect("футфетиш") > 5 || 
		detect("оргазм") > 10 || 
		detect("писающие") > 10 || 
		detect("кугудтгшус") > 5 || 
		detect("фистинг") > 5 || 
		detect("мастурбация") > 5 || 
		detect("камшот") > 5 || 
		detect("brazzers") > 5 || 
		detect("porn") > 3 || 
		detect("fuck") > 10 || 
		detect("sex") > 20
	) 
	{
    var whitelist_url = false;
    var whitelist = ["google.", "facebook.com", "youtube.com", "baidu.com", "yahoo.",
        "amazon.", "wikipedia.com", "qq.com", "twitter.com", "taobao.com",
        "live.com", "weibo.com", "ebay.com", "yandex.ru", "hao123.com",
        "vk.com", "ok.ru", "bing.com", "t.co", "msn.com", "instagram.com", "aliexpress.",
        "apple.com", "ask.com", "pinterest.com", "wordpress.com", "tmall.com",
        "reddit.com", "mail.ru", "onclickads.net", "paypal.com", "sohu.com",
        "tumblr.com", "imgur.com", "microsoft.com", "gmw.cn", "imdb.com",
        "netflix.com", "360.cn", "go.com", "stackoverflow.com", "alibaba.com",
        "craiglist.org", "tianya.cn", "rakuten.co.jp", "blogger.com", "blogspot.com",
        "naver.com", "espn.go.com", "cnn.com", "outbrain.com", "soso.com",
        "kat.cr", "nicovideo.jp", "xinhuanet.com", "bbc.co.uk", "flipkart.com",
        "diply.com", "dropbox.com", "github.com", "googleusercontent.com", "adcash.com",
        "popads.com", "dailymotion.com", "pixnet.net", "nytimes.com", "jd.com",
        "sogou.com", "booking.com", "agoda.com", "hotels.com", "dx.com", "snapdeal.com"
    ];
    for (x = 0; x < whitelist.length; x++) {
        if (window.location.href.indexOf(whitelist[x]) > -1) {
            whitelist_url = true;
        }
    }
    if (whitelist_url == false) {
        blockAccess();
    }
}

chrome.runtime.sendMessage({
    method: "changeIconDefault"
}, function(response) {});
