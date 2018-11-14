class PlayerEngine {

    constructor(canvas, url) {
        this.VERTICAL = 'V';
        this.HORIZONTAL = 'H';
        this.$viewport = $(canvas);

        if (!this.$viewport) {
            throw 'REQUIRED_CANVAS';
        } else if (url.length <= 0) {
            throw 'REQUIRED_URL';
        }

        this.arSettings = {
            Player: {
                canvas: this.$viewport[0],
                audio: false,
                videoBufferSize: (512 * 1024) * 2,
                onVideoDecode: $.proxy(function () {
                    this.setViewport()
                }, this)
            }
        };
        this.getSizes(); // start sizes
        this.Play(url, this.arSettings.Player);
    }

    getSizes() {
        this.arSizes = {
            window: {
                width: $(window).width(),
                height: $(window).height()
            }
        };
    }

    Play(url, arConfigs) {
        try {
            this.$core = new JSMpeg.Player(url, arConfigs);
            //this.setViewport();
        } catch (e) {
            console.error(e);
        }
    }

    setViewport() {

        this.getSizes();

        if (this.getOrientation() === this.HORIZONTAL) {

            this.$viewport.height('auto');
            this.$viewport.width(this.arSizes.window.width);

            let marginTop = Math.ceil((this.$viewport.height() - this.arSizes.window.height) / 2) * -1;

            this.$viewport.css({
                top: marginTop + 'px',
                left: 0
            });

        } else {
            this.$viewport.width('auto');
            this.$viewport.height(this.arSizes.window.height);

            let marginLeft = Math.ceil((this.$viewport.width() - this.arSizes.window.width) / 2) * -1;

            this.$viewport.css({
                left: marginLeft + 'px',
                top: 0
            });
        }
    }

    getOrientation() {

        let height = this.arSizes.window.height;
        let width = this.arSizes.window.width;

        if (height >= width || width <= 1410) {
            return this.VERTICAL;
        } else {
            return this.HORIZONTAL;
        }

    }
}