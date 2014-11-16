module Rise {
    export class Opacity {
        private _opacity:Number;

        constructor(opacity:Opacity);
        constructor(opacity:number) {
            if (opacity instanceof Opacity) {
                return opacity;
            } else if (isFinite(opacity)) {
                this.opacity = opacity;
            }
        }

        get opacity() {
            return this._opacity;
        }

        set opacity(opacity:Number) {
            if (Rise.Opacity.isDecimal01Value(opacity)) {
                this._opacity = Rise.Opacity.convertCssToPercentage(opacity);
            } else if (Rise.Opacity.isPercentageValue(opacity)) {
                this._opacity = opacity;
            } else {
                this._opacity = 0;
            }
        }

        toString() {
            return Rise.Opacity.convertPercentageToCss(this.opacity);
        }

        static isPercentageValue(value:Number) {
            return (
            value >= 0 &&
            value <= 100 &&
            value === Math.floor(value)
            );
        }

        static isDecimal01Value(value:Number) {
            return (
            value >= 0 &&
            value <= 1 &&
            value !== Math.floor(value)
            );
        }

        static convertCssToPercentage(value) {
            return (100 - (value * 100.0).toFixed(0));
        }

        static convertPercentageToCss(value) {
            return (100 - value) / 100.0;
        }
    }
}