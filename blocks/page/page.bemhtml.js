/*global block,tag,attrs,mix,bem,match*/
block('page').wrap()(function() {
    return [
        this.ctx.doctype || '<!DOCTYPE html>',
        {
            tag: 'html',
            cls: 'ua_js_no',
            content: [
                {
                    elem: 'head',
                    content: [
                        { tag: 'meta', attrs: { charset: 'utf-8' } },
                        { tag: 'meta', attrs: { name: 'format-detection', content: 'telephone=no' } },
                        { tag: 'title', content: this.ctx.title },
                        {
                            elem: 'js',
                            content: '(function(e,c){e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");})(document.documentElement,"className");'
                        },
                        {
                            elem: 'js',
                            content: '(function(){/Android|iPhone/i.test(navigator.userAgent)&&(document.documentElement.className += \' mobile\')})()'
                        },
                        this.ctx.head,
                        this.ctx.favicon ? { elem: 'favicon', url: this.ctx.favicon } : ''
                    ]
                },
                this.ctx
            ]
        }
    ];
});

block('page')(
    tag()('body'),
    mix()(function() {
        return {
            block: 'font',
            mods: { face: 'textbook-new' }
        };
    })
);

block('page').elem('head')(
    tag()('head'),
    bem()(false)
);

block('page').elem('meta')(
    tag()('meta'),
    bem()(false)
);

block('page').elem('link')(
    tag()('link'),
    bem()(false)
);

block('page').elem('favicon')(
    tag()('link'),
    bem()(false),
    attrs()(function() {
        return {
            rel: 'shortcut icon',
            href: this.ctx.url
        };
    })
);

block('page').elem('js')(
    tag()('script'),
    bem()(false),
    attrs()(function() {
        return {
            src: this.ctx.url
        };
    })
);

block('page').elem('css')(
    tag()('style'),
    bem()(false),
    match(function() { return this.ctx.url; })(
        tag()('link'),
        attrs()(function() {
            return {
                rel: 'stylesheet',
                href: this.ctx.url
            };
        })
    )
);
