var toHTML = function(string){

      var ELEMENTS = [{

        patterns: 'strong',
            RegExp: /(\S*)\*{2}(\S*)\*{2}(\S*)/g,
            replacement: '$1<strong>$2</strong>$3'
     
        },{
            patterns: 'em',
            RegExp: /(\S*)\*{1}(\S*)\*{1}(\S*)/g,
            replacement: '$1<em>$2</em>$3'
        },{
           //--------------如何合并？？-----------------
           // var c = "cc 标题".match(/c/g);
         // alert(c?c.length:0)*/
            patterns: 'h6',
            RegExp: /\#{6} ([^\n^\#]*)*/g,
            replacement: '<h6>$1</h6>'
        },{
            patterns: 'h5',
            RegExp: /\#{5} ([^\n^\#]*)*/g,
            replacement: '<h5>$1</h5>'
        },{
            patterns: 'h4',
            RegExp: /\#{4} ([^\n^\#]*)*/g,
            replacement: '<h4>$1</h4>'

        },{
            patterns: 'h3',
            RegExp: /\#{3} ([^\n^\#]*)*/g,
            replacement: '<h3>$1</h3>'
        },{
            patterns: 'h2',
            RegExp: /\#{2} ([^\n^\#]*)*/g,
            replacement: '<h2>$1</h2>'
        },{
            patterns: 'h1',
            RegExp: /\#{1} ([^\n^\#]*)*/g,
            replacement: '<h1>$1</h1>'

         //-------------------------------------
        },{
       
            patterns: 'li',
            RegExp: /\+ ([^\n]*)*/g,
            replacement: '<li>$1</li>'
        },{

            patterns: 'codeblock',
            RegExp: /\`{3}([\s\S]*)\`{3}/g,
            replacement: '<recode>$1</recode>'
        },{
            patterns: 'norcodeblock',
            RegExp: /\`{2}([\s\S]*)\`{2}/g,
            replacement: '<pre><code>$1</recode></pre>'
        },{
            patterns: 'code',
            RegExp: /\`([^\n^\`]*)\`/g,
            replacement: '<code>$1</code>'
        },{
            patterns: 'hr',
            RegExp: /\<div\>\={3,}\<\/div\>/g,
            replacement: '<hr>'
        },{
            patterns: 'i',
            RegExp: /\[icon-([^\n]*)\]/g,
            replacement: "<i class='icon-$1'></i>"
        },{
            patterns: 'blockquote',
            //RegExp: /\<div\>> ([^\n^(\<\/div\>)]*)*(\<\/div\>)/g,
            RegExp: /> ([^\n]*)*/g,
            replacement: " <blockquote>$1</blockquote>"
            //.replace(/\> ([^\n]*)*/g," <blockquote>$1</blockquote>")
        },{
            patterns: 'img',
            RegExp: /\!\[([^\n\]]*)\]\(([^\s^\n]*)\s(\d*)\)/g,
            replacement: "<div><img src='$2'  alt='$1' width='$3'/></div>"
        },{
            patterns: 'a',//[web](www.qq.com title)
            RegExp: /\[([^\n\]]*)\]\(([^\s^\n]*)\s([^\n\)]*)\)/g,
            replacement: "<a href='$2' title='$3'>$1</a>"
       
         },{
            patterns: 'recode'
      }]
    //遍历string，逐个markdown语法替换
    for (var i = 0, len = ELEMENTS.length; i < len; i++) {
        if (typeof ELEMENTS[i].patterns === 'string') {

            string = replaceEls(string, {
                tag: ELEMENTS[i].patterns,
                replacement: ELEMENTS[i].replacement,
                RegExp: ELEMENTS[i].RegExp
            });
            
        } else {
            for (var j = 0, pLen = ELEMENTS[i].patterns.length; j < pLen; j++) {
                string = replaceEls(string, {
                    tag: ELEMENTS[i].patterns[j],
                    replacement: ELEMENTS[i].replacement,
                    RegExp: ELEMENTS[i].RegExp
                });
            }
        }
    }
   

    function replaceEls(string, elProperties){
        return string.replace(elProperties.RegExp,elProperties.replacement);
    }
    return string;
}
