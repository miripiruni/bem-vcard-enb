block('card').elem('logo').content()(function() {
    return [
        {
            tag: 'a',
            attrs: {
                href: this.ctx.site
            },
            content:
                {
                    tag: 'span',
                    content: this.json.name,
                    attrs: {
                        itemprop: 'affiliation'
                    }
                }

        }
    ];
});
