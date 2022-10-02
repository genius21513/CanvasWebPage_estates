var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var EnumHelper = /** @class */ (function () {
            function EnumHelper() {
            }
            EnumHelper.GetNames = function (e) {
                return Object.keys(e).filter(function (v) { return isNaN(parseInt(v, 10)); });
            };
            EnumHelper.GetName = function (e, value) {
                var names = EnumHelper.GetNames(e);
                return (value < names.length) ? names[value] : "";
            };
            EnumHelper.GetValues = function (e) {
                var numberKeys = Object.keys(e).map(function (v) { return parseInt(v, 10); }).filter(function (v) { return !isNaN(v); });
                return numberKeys;
            };
            return EnumHelper;
        }());
        Web.EnumHelper = EnumHelper;

        var GraphDocking;
        (function (GraphDocking) {
            GraphDocking[GraphDocking["Background"] = 0] = "Background";
            GraphDocking[GraphDocking["Top"] = 1] = "Top";
            GraphDocking[GraphDocking["Bottom"] = 2] = "Bottom";
            GraphDocking[GraphDocking["Left"] = 3] = "Left";
            GraphDocking[GraphDocking["Right"] = 4] = "Right";
            GraphDocking[GraphDocking["Center"] = 5] = "Center";
            GraphDocking[GraphDocking["CenterTopLeft"] = 6] = "CenterTopLeft";
            GraphDocking[GraphDocking["CenterTopRight"] = 7] = "CenterTopRight";
            GraphDocking[GraphDocking["CenterBottomLeft"] = 8] = "CenterBottomLeft";
            GraphDocking[GraphDocking["CenterBottomRight"] = 9] = "CenterBottomRight";
            GraphDocking[GraphDocking["CenterLeft"] = 10] = "CenterLeft";
            GraphDocking[GraphDocking["CenterRight"] = 11] = "CenterRight";
            GraphDocking[GraphDocking["CenterTop"] = 12] = "CenterTop";
            GraphDocking[GraphDocking["CenterBottom"] = 13] = "CenterBottom";
            GraphDocking[GraphDocking["CenterNumpad7"] = 14] = "CenterNumpad7";
            GraphDocking[GraphDocking["CenterNumpad8"] = 15] = "CenterNumpad8";
            GraphDocking[GraphDocking["CenterNumpad9"] = 16] = "CenterNumpad9";
            GraphDocking[GraphDocking["CenterNumpad4"] = 17] = "CenterNumpad4";
            GraphDocking[GraphDocking["CenterNumpad5"] = 18] = "CenterNumpad5";
            GraphDocking[GraphDocking["CenterNumpad6"] = 19] = "CenterNumpad6";
            GraphDocking[GraphDocking["CenterNumpad1"] = 20] = "CenterNumpad1";
            GraphDocking[GraphDocking["CenterNumpad2"] = 21] = "CenterNumpad2";
            GraphDocking[GraphDocking["CenterNumpad3"] = 22] = "CenterNumpad3";
            GraphDocking[GraphDocking["Overlay"] = 23] = "Overlay";
        })(GraphDocking = Web.GraphDocking || (Web.GraphDocking = {}));
        
        var Align;
        (function (Align) {
            Align[Align["Floating"] = 0] = "Floating";
            Align[Align["TopLeft"] = 1] = "TopLeft";
            Align[Align["TopRight"] = 2] = "TopRight";
            Align[Align["BottomLeft"] = 3] = "BottomLeft";
            Align[Align["BottomRight"] = 4] = "BottomRight";
        })(Align = Web.Align || (Web.Align = {}));
        // context.font = "[font style] [font weight] [font size]px [font face]";
        var FontStyle;
        (function (FontStyle) {
            FontStyle[FontStyle["normal"] = 0] = "normal";
            FontStyle[FontStyle["italic"] = 1] = "italic";
            FontStyle[FontStyle["oblique"] = 2] = "oblique";
            FontStyle[FontStyle["inherit"] = 3] = "inherit";
        })(FontStyle = Web.FontStyle || (Web.FontStyle = {}));
        var FontWeight;
        (function (FontWeight) {
            FontWeight[FontWeight["normal"] = 0] = "normal";
            FontWeight[FontWeight["bold"] = 1] = "bold";
            FontWeight[FontWeight["bolder"] = 2] = "bolder";
            FontWeight[FontWeight["lighter"] = 3] = "lighter";
            FontWeight[FontWeight["auto"] = 4] = "auto";
            FontWeight[FontWeight["inherit"] = 5] = "inherit";
        })(FontWeight = Web.FontWeight || (Web.FontWeight = {}));
        var Requirement;
        (function (Requirement) {
            Requirement[Requirement["Mandatory"] = 0] = "Mandatory";
            Requirement[Requirement["NiceToHave"] = 1] = "NiceToHave";
            Requirement[Requirement["Optional"] = 2] = "Optional";
        })(Requirement = Web.Requirement || (Web.Requirement = {}));
        var TextBaseline;
        (function (TextBaseline) {
            TextBaseline[TextBaseline["top"] = 0] = "top";
            TextBaseline[TextBaseline["bottom"] = 1] = "bottom";
            TextBaseline[TextBaseline["middle"] = 2] = "middle";
            TextBaseline[TextBaseline["alphabetic"] = 3] = "alphabetic";
            TextBaseline[TextBaseline["hanging"] = 4] = "hanging";
        })(TextBaseline = Web.TextBaseline || (Web.TextBaseline = {}));
        var TextAlign;
        (function (TextAlign) {
            TextAlign[TextAlign["start"] = 0] = "start";
            TextAlign[TextAlign["end"] = 1] = "end";
            TextAlign[TextAlign["left"] = 2] = "left";
            TextAlign[TextAlign["right"] = 3] = "right";
            TextAlign[TextAlign["center"] = 4] = "center";
        })(TextAlign = Web.TextAlign || (Web.TextAlign = {}));
        // Cursor enum for names supported in HTML5 (http://www.w3schools.com/cssref/pr_class_cursor.asp)
        // the actual names are mapped when the Renderer is instantiated.
        var MouseCursor;
        (function (MouseCursor) {
            MouseCursor[MouseCursor["Alias"] = 0] = "Alias"; // The cursor indicates an alias of something is to be created
            MouseCursor[MouseCursor["AllScroll"] = 1] = "AllScroll"; // The cursor indicates that something can be scrolled in any direction
            MouseCursor[MouseCursor["Auto"] = 2] = "Auto"; // Default.The browser sets a cursor
            MouseCursor[MouseCursor["Cell"] = 3] = "Cell"; // The cursor indicates that a cell (or set of cells) may be selected
            MouseCursor[MouseCursor["ContextMenu"] = 4] = "ContextMenu"; // The cursor indicates that a context- menu is available
            MouseCursor[MouseCursor["ColumnResize"] = 5] = "ColumnResize"; // The cursor indicates that the column can be resized horizontally
            MouseCursor[MouseCursor["Copy"] = 6] = "Copy"; // The cursor indicates something is to be copied
            MouseCursor[MouseCursor["Crosshair"] = 7] = "Crosshair"; // The cursor render as a crosshair
            MouseCursor[MouseCursor["Default"] = 8] = "Default"; // The default cursor
            MouseCursor[MouseCursor["EastResize"] = 9] = "EastResize"; // The cursor indicates that an edge of a box is to be moved right (east)
            MouseCursor[MouseCursor["EastWestResize"] = 10] = "EastWestResize"; // Indicates a bidirectional resize cursor
            MouseCursor[MouseCursor["Grab"] = 11] = "Grab"; // The cursor indicates that something can be grabbed
            MouseCursor[MouseCursor["Grabbing"] = 12] = "Grabbing"; // The cursor indicates that something can be grabbed
            MouseCursor[MouseCursor["Help"] = 13] = "Help"; // The cursor indicates that help is available
            MouseCursor[MouseCursor["Move"] = 14] = "Move"; // The cursor indicates something is to be moved
            MouseCursor[MouseCursor["NorthResize"] = 15] = "NorthResize"; // The cursor indicates that an edge of a box is to be moved up (north)
            MouseCursor[MouseCursor["NorthEastResize"] = 16] = "NorthEastResize"; // The cursor indicates that an edge of a box is to be moved up and right (north / east)
            MouseCursor[MouseCursor["NorthEastSouthWestResize"] = 17] = "NorthEastSouthWestResize"; // Indicates a bidirectional resize cursor
            MouseCursor[MouseCursor["NorthSouthResize"] = 18] = "NorthSouthResize"; // Indicates a bidirectional resize cursor
            MouseCursor[MouseCursor["NorthWestResize"] = 19] = "NorthWestResize"; // The cursor indicates that an edge of a box is to be moved up and left (north / west)
            MouseCursor[MouseCursor["NorthWestSouthEastResize"] = 20] = "NorthWestSouthEastResize"; // Indicates a bidirectional resize cursor
            MouseCursor[MouseCursor["NoDrop"] = 21] = "NoDrop"; // The cursor indicates that the dragged item cannot be dropped here
            MouseCursor[MouseCursor["None"] = 22] = "None"; // No cursor is rendered for the element
            MouseCursor[MouseCursor["NotAllowed"] = 23] = "NotAllowed"; // The cursor indicates that the requested action will not be executed
            MouseCursor[MouseCursor["Pointer"] = 24] = "Pointer"; // The cursor is a pointer and indicates a link
            MouseCursor[MouseCursor["Progress"] = 25] = "Progress"; // The cursor indicates that the program is busy (in progress)
            MouseCursor[MouseCursor["RowResize"] = 26] = "RowResize"; // The cursor indicates that the row can be resized vertically
            MouseCursor[MouseCursor["SouthResize"] = 27] = "SouthResize"; // The cursor indicates that an edge of a box is to be moved down (south)
            MouseCursor[MouseCursor["SouthEastResize"] = 28] = "SouthEastResize"; // The cursor indicates that an edge of a box is to be moved down and right (south / east)
            MouseCursor[MouseCursor["SouthWestResize"] = 29] = "SouthWestResize"; // The cursor indicates that an edge of a box is to be moved down and left (south / west)
            MouseCursor[MouseCursor["Text"] = 30] = "Text"; // The cursor indicates text that may be selected
            MouseCursor[MouseCursor["URL"] = 31] = "URL"; // A comma separated list of URLs to custom cursors.Note: Always specify a generic cursor at the end of the list, in case none of the URL-defined cursors can be used
            MouseCursor[MouseCursor["VerticalText"] = 32] = "VerticalText"; // The cursor indicates vertical- text that may be selected
            MouseCursor[MouseCursor["WestResize"] = 33] = "WestResize"; // The cursor indicates that an edge of a box is to be moved left (west)
            MouseCursor[MouseCursor["Wait"] = 34] = "Wait"; // The cursor indicates that the program is busy
            MouseCursor[MouseCursor["ZoomIn"] = 35] = "ZoomIn"; // The cursor indicates that something can be zoomed in
            MouseCursor[MouseCursor["ZoomOut"] = 36] = "ZoomOut"; // The cursor indicates that something can be zoomed out
            MouseCursor[MouseCursor["Initial"] = 37] = "Initial"; // Sets this property to its default value.Read about initial
        })(MouseCursor = Web.MouseCursor || (Web.MouseCursor = {}));
        var SpecialKey;
        (function (SpecialKey) {
            SpecialKey[SpecialKey["Tab"] = 0] = "Tab";
            SpecialKey[SpecialKey["Esc"] = 1] = "Esc";
            SpecialKey[SpecialKey["Backspace"] = 2] = "Backspace";
            SpecialKey[SpecialKey["Del"] = 3] = "Del";
            SpecialKey[SpecialKey["Home"] = 4] = "Home";
            SpecialKey[SpecialKey["End"] = 5] = "End";
            SpecialKey[SpecialKey["Left"] = 6] = "Left";
            SpecialKey[SpecialKey["Right"] = 7] = "Right";
            SpecialKey[SpecialKey["Up"] = 8] = "Up";
            SpecialKey[SpecialKey["Down"] = 9] = "Down";
            SpecialKey[SpecialKey["Enter"] = 10] = "Enter";
            SpecialKey[SpecialKey["Return"] = 11] = "Return";
            SpecialKey[SpecialKey["Insert"] = 12] = "Insert";
        })(SpecialKey = Web.SpecialKey || (Web.SpecialKey = {}));
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));

var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Guid = /** @class */ (function () {
            function Guid(guid) {
                this.guid = guid;
            }
            Guid.prototype.ToString = function () {
                return this.guid;
            };
            Guid.NewGuid = function () {
                var result;
                var i;
                var j;
                result = "";
                for (j = 0; j < 32; j++) {
                    if (j == 8 || j == 12 || j == 16 || j == 20)
                        result = result + '-';
                    i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
                    result = result + i;
                }
                return new Guid(result);
            };
            return Guid;
        }());
        Web.Guid = Guid;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="../enums.ts" />
/// <reference path="../Guid.ts" />
/// <reference path="../Interfaces/IAutoDrawing.ts" />
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var AutoDrawingBase = /** @class */ (function () {
            function AutoDrawingBase(size, requirement, requiredReplacement) {
                if (requirement === void 0) { requirement = Web.Requirement.Mandatory; }
                if (requiredReplacement === void 0) { requiredReplacement = null; }
                this.guid = Web.Guid.NewGuid();
                this.dockStack = 0;
                this.layer = 0;
                this.alignedToCenter = false;
                this.visible = true;
                this.size = size;
                this.requirement = requirement;
                this.requiredReplacement = requiredReplacement;
            }
            Object.defineProperty(AutoDrawingBase.prototype, "Guid", {
                get: function () {
                    return this.guid;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoDrawingBase.prototype, "Dock", {
                get: function () {
                    return this.dock;
                },
                set: function (value) {
                    this.dock = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoDrawingBase.prototype, "DisplayName", {
                get: function () {
                    return this.displayName;
                },
                set: function (value) {
                    this.displayName = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoDrawingBase.prototype, "DockStack", {
                get: function () {
                    return this.dockStack;
                },
                set: function (value) {
                    this.dockStack = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoDrawingBase.prototype, "Layer", {
                get: function () {
                    return this.layer;
                },
                set: function (value) {
                    this.layer = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoDrawingBase.prototype, "AlignedToCenter", {
                get: function () {
                    return this.alignedToCenter;
                },
                set: function (value) {
                    this.alignedToCenter = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoDrawingBase.prototype, "Visible", {
                get: function () {
                    return this.visible;
                },
                set: function (value) {
                    this.visible = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoDrawingBase.prototype, "Requirement", {
                get: function () {
                    return this.requirement;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AutoDrawingBase.prototype, "RequiredReplacement", {
                get: function () {
                    return this.requiredReplacement;
                },
                set: function (value) {
                    this.requiredReplacement = value;
                },
                enumerable: true,
                configurable: true
            });
            AutoDrawingBase.prototype.MeasureDock = function (otherSize) {
                return this.size;
            };
            AutoDrawingBase.prototype.Render = function (width, height) {
                // Do nothing.
            };
            AutoDrawingBase.prototype.HitTest = function (width, height, mouseEvent) {
                return false;
            };
            return AutoDrawingBase;
        }());
        Web.AutoDrawingBase = AutoDrawingBase;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Color = /** @class */ (function () {
            function Color(red, green, blue, alpha) {
                if (alpha === void 0) { alpha = 1; }
                this.Red = red;
                this.Green = green;
                this.Blue = blue;
                this.Alpha = alpha;
            }
            Object.defineProperty(Color, "Transparent", {
                // Color values as defined in the .NET System.Drawing.Color
                // The colors returned are created each time since we use there definitions just to set the initial values, but each object needs a separate instance
                // so the can be changed dynamically without affecting other objects.
                get: function () { return new Color(0, 0, 0, 0); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "Black", {
                get: function () { return new Color(0, 0, 0, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "White", {
                get: function () { return new Color(255, 255, 255, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "DimGray", {
                get: function () { return new Color(105, 105, 105, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "Silver", {
                get: function () { return new Color(192, 192, 192, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "LightSlateGray", {
                get: function () { return new Color(119, 136, 153, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "Red", {
                get: function () { return new Color(255, 0, 0, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "Brown", {
                get: function () { return new Color(165, 42, 42, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "LightSalmon", {
                get: function () { return new Color(255, 160, 122, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "DarkRed", {
                get: function () { return new Color(139, 0, 0, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "PureGreen", {
                get: function () { return new Color(0, 255, 0, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "Green", {
                get: function () { return new Color(0, 128, 0, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "DarkOliveGreen", {
                get: function () { return new Color(85, 107, 47, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "DarkGreen", {
                get: function () { return new Color(0, 100, 0, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "Blue", {
                get: function () { return new Color(0, 0, 255, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "Yellow", {
                get: function () { return new Color(255, 255, 0, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "Cyan", {
                get: function () { return new Color(0, 255, 255, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "DarkCyan", {
                get: function () { return new Color(0, 139, 139, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "LightBlue", {
                get: function () { return new Color(173, 216, 230, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "GreenYellow", {
                get: function () { return new Color(173, 255, 47, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "CadetBlue", {
                get: function () { return new Color(95, 158, 160, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "CornflowerBlue", {
                get: function () { return new Color(100, 149, 237, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "Aqua", {
                get: function () { return new Color(0, 255, 255, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "Orange", {
                get: function () { return new Color(255, 165, 0, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "OrangeRed", {
                get: function () { return new Color(255, 69, 0, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "DarkSeaGreen", {
                get: function () { return new Color(143, 188, 143, 1); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color, "Aquamarine", {
                get: function () { return new Color(127, 255, 212, 1); },
                enumerable: true,
                configurable: true
            });
            Color.FromColor = function (color, alpha) {
                if (alpha === void 0) { alpha = 1; }
                return new Color(color.red, color.green, color.blue, color.Alpha * alpha);
            };
            Color.FromOpaqueColor = function (color, alpha) {
                if (alpha === void 0) { alpha = 1; }
                return new Color(color.red, color.green, color.blue, alpha);
            };
            Color.prototype.Clone = function () {
                return new Color(this.red, this.green, this.blue, this.alpha);
            };
            Color.prototype.Copy = function (colorFrom, colorTo) {
                colorTo.Red = colorFrom.Red;
                colorTo.Green = colorFrom.Green;
                colorTo.Blue = colorFrom.Blue;
                colorTo.Alpha = colorFrom.Alpha;
            };
            Color.prototype.Equals = function (color) {
                return this.red === color.Red && this.green === color.Green && this.blue === color.Blue && this.alpha === color.Alpha;
            };
            Color.prototype.RGB_Equals = function (color) {
                return this.red === color.Red && this.green === color.Green && this.blue === color.Blue;
            };
            Object.defineProperty(Color.prototype, "Value", {
                get: function () { return this.stringValue; },
                enumerable: true,
                configurable: true
            });
            Color.prototype.ValueWithNewAlpha = function (alpha) {
                if (alpha < 0) {
                    alpha = 0;
                }
                else if (alpha >= 1) {
                    return this.stringValue;
                }
                return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha * alpha + ")";
            };
            Object.defineProperty(Color.prototype, "Red", {
                get: function () { return this.red; },
                set: function (value) {
                    value = Math.round(value);
                    if (value >= 0 && value <= 255) {
                        this.red = value;
                        this.stringValue = "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")";
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color.prototype, "Green", {
                get: function () { return this.green; },
                set: function (value) {
                    value = Math.round(value);
                    if (value >= 0 && value <= 255) {
                        this.green = value;
                        this.stringValue = "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")";
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color.prototype, "Blue", {
                get: function () { return this.blue; },
                set: function (value) {
                    value = Math.round(value);
                    if (value >= 0 && value <= 255) {
                        this.blue = value;
                        this.stringValue = "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")";
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Color.prototype, "Alpha", {
                get: function () { return this.alpha; },
                set: function (value) {
                    if (value >= 0 && value <= 1) {
                        this.alpha = value;
                        this.stringValue = "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")";
                    }
                },
                enumerable: true,
                configurable: true
            });
            Color.prototype.ToString = function () {
                return this.stringValue;
            };
            Color.Interpolate = function (targetColor, oldColor, newColor, oldPercentage, newPercentage) {
                targetColor.Red = Color.InterpolateNumber(oldColor.Red, newColor.Red, oldPercentage, newPercentage);
                targetColor.Green = Color.InterpolateNumber(oldColor.Green, newColor.Green, oldPercentage, newPercentage);
                targetColor.Blue = Color.InterpolateNumber(oldColor.Blue, newColor.Blue, oldPercentage, newPercentage);
                targetColor.Alpha = Color.InterpolateNumber(oldColor.Alpha, newColor.Alpha, oldPercentage, newPercentage);
            };
            Color.InterpolateNumber = function (oldNumber, newNumber, oldPercentage, newPercentage) {
                return (oldNumber * oldPercentage) + (newNumber * newPercentage);
            };
            return Color;
        }());
        Web.Color = Color;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="Interfaces/IDictionary.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Dictionary = /** @class */ (function () {
            function Dictionary() {
                this.keys = [];
                this.values = [];
            }
            Object.defineProperty(Dictionary.prototype, "Keys", {
                get: function () {
                    return this.keys;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Dictionary.prototype, "Values", {
                get: function () {
                    return this.values;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Dictionary.prototype, "Count", {
                get: function () { return this.keys.length; },
                enumerable: true,
                configurable: true
            });
            Dictionary.prototype.Add = function (key, value) {
                if (!this.ContainsKey(key)) {
                    this.keys.push(key);
                    this.values.push(value);
                }
            };
            Dictionary.prototype.Remove = function (key) {
                var index = this.keys.indexOf(key, 0);
                this.keys.splice(index, 1);
                this.values.splice(index, 1);
            };
            Dictionary.prototype.ContainsKey = function (key) {
                var index = this.keys.indexOf(key, 0);
                if (index < 0) {
                    return false;
                }
                return true;
            };
            Dictionary.prototype.ValueOf = function (key) {
                var index = this.keys.indexOf(key, 0);
                if (index < 0) {
                    return null;
                }
                return this.values[index];
            };
            Dictionary.prototype.ToLookup = function () {
                return this;
            };
            return Dictionary;
        }());
        Web.Dictionary = Dictionary;
        var SortedDictionary = /** @class */ (function () {
            function SortedDictionary() {
                this.keys = [];
                this.values = [];
            }
            Object.defineProperty(SortedDictionary.prototype, "Keys", {
                get: function () {
                    return this.keys;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SortedDictionary.prototype, "Values", {
                get: function () {
                    return this.values;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SortedDictionary.prototype, "Count", {
                get: function () { return this.keys.length; },
                enumerable: true,
                configurable: true
            });
            SortedDictionary.prototype.Add = function (key, value) {
                if (!this.ContainsKey(key)) {
                    var inserted = false;
                    var maxIndex = this.keys.length - 1;
                    for (var iKey = maxIndex; iKey >= 0; iKey--) {
                        var existingKey = this.keys[iKey];
                        if (key > existingKey) {
                            if (iKey == maxIndex) {
                                break;
                            }
                            var firstPartKeys = this.keys.slice(0, iKey - 1);
                            var secondPartKeys = this.keys.slice(iKey, maxIndex);
                            firstPartKeys.push(key);
                            this.keys = firstPartKeys.concat(secondPartKeys);
                            var firstPartValues = this.values.slice(0, iKey - 1);
                            var secondPartValues = this.values.slice(iKey, maxIndex);
                            firstPartValues.push(value);
                            this.values = firstPartValues.concat(secondPartValues);
                            inserted = true;
                            break;
                        }
                    }
                    if (!inserted) {
                        this.keys.push(key);
                        this.values.push(value);
                    }
                }
            };
            SortedDictionary.prototype.Remove = function (key) {
                var index = this.keys.indexOf(key, 0);
                this.keys.splice(index, 1);
                this.values.splice(index, 1);
            };
            SortedDictionary.prototype.ContainsKey = function (key) {
                var index = this.keys.indexOf(key, 0);
                if (index < 0) {
                    return false;
                }
                return true;
            };
            SortedDictionary.prototype.ValueOf = function (key) {
                var index = this.keys.indexOf(key, 0);
                if (index < 0) {
                    return null;
                }
                return this.values[index];
            };
            SortedDictionary.prototype.ToLookup = function () {
                return this;
            };
            return SortedDictionary;
        }());
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var SortedDictionary = /** @class */ (function () {
            function SortedDictionary() {
                this.keys = [];
                this.values = [];
            }
            Object.defineProperty(SortedDictionary.prototype, "Keys", {
                get: function () {
                    return this.keys;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SortedDictionary.prototype, "Values", {
                get: function () {
                    return this.values;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SortedDictionary.prototype, "Count", {
                get: function () {
                    return this.keys.length;
                },
                enumerable: true,
                configurable: true
            });
            SortedDictionary.prototype.Add = function (key, value) {
                if (!this.ContainsKey(key)) {
                    var inserted = false;
                    var maxIndex = this.keys.length - 1;
                    for (var iKey = maxIndex; iKey >= 0; iKey--) {
                        var existingKey = this.keys[iKey];
                        if (key > existingKey) {
                            if (iKey == maxIndex) {
                                break;
                            }
                            var firstPartKeys = this.keys.slice(0, iKey - 1);
                            var secondPartKeys = this.keys.slice(iKey, maxIndex);
                            firstPartKeys.push(key);
                            this.keys = firstPartKeys.concat(secondPartKeys);
                            var firstPartValues = this.values.slice(0, iKey - 1);
                            var secondPartValues = this.values.slice(iKey, maxIndex);
                            firstPartValues.push(value);
                            this.values = firstPartValues.concat(secondPartValues);
                            inserted = true;
                            break;
                        }
                    }
                    if (!inserted) {
                        this.keys.push(key);
                        this.values.push(value);
                    }
                }
            };
            SortedDictionary.prototype.Remove = function (key) {
                var index = this.keys.indexOf(key, 0);
                this.keys.splice(index, 1);
                this.values.splice(index, 1);
            };
            SortedDictionary.prototype.ContainsKey = function (key) {
                var index = this.keys.indexOf(key, 0);
                if (index < 0) {
                    return false;
                }
                return true;
            };
            SortedDictionary.prototype.ValueOf = function (key) {
                var index = this.keys.indexOf(key, 0);
                if (index < 0) {
                    return null;
                }
                return this.values[index];
            };
            SortedDictionary.prototype.ToLookup = function () {
                return this;
            };
            return SortedDictionary;
        }());
        Web.SortedDictionary = SortedDictionary;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="SortedDictionary.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var DockSide = /** @class */ (function () {
            function DockSide() {
                this.dockStackDictionary = new Web.SortedDictionary();
                this.Dimensions = new Web.Rectangle(0, 0, 0, 0);
            }
            Object.defineProperty(DockSide.prototype, "DockStacks", {
                get: function () { return this.dockStackDictionary.Values; },
                enumerable: true,
                configurable: true
            });
            DockSide.prototype.DockStackOf = function (stack) {
                if (this.dockStackDictionary.ContainsKey(stack)) {
                    return this.dockStackDictionary.ValueOf(stack);
                }
                return null;
            };
            DockSide.prototype.Add = function (dockStack) {
                var newDockStack = new Web.DockStack();
                this.dockStackDictionary.Add(dockStack, newDockStack);
                return newDockStack;
            };
            DockSide.prototype.Contains = function (dockStack) {
                return this.dockStackDictionary.ContainsKey(dockStack);
            };
            DockSide.prototype.NextDockStack = function () {
                if (this.dockStackDictionary.Count == 0) {
                    return 0;
                }
                // Search a free (empty stack)
                for (var iKey = 0; iKey < this.dockStackDictionary.Count; iKey++) {
                    var dockStack = this.dockStackDictionary.Values[iKey];
                    if (dockStack.IsEmpty) {
                        return this.dockStackDictionary.Keys[iKey];
                    }
                }
                return this.dockStackDictionary.Keys[this.dockStackDictionary.Count - 1] + 1;
            };
            return DockSide;
        }());
        Web.DockSide = DockSide;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="Interfaces/IGuid.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var DockStack = /** @class */ (function () {
            function DockStack() {
                this.guid = Web.Guid.NewGuid();
                this.layerDictionary = new Web.SortedDictionary();
                this.Dimensions = new Web.Rectangle(0, 0, 0, 0);
            }
            Object.defineProperty(DockStack.prototype, "Guid", {
                get: function () { return this.guid; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DockStack.prototype, "AlignedToCenter", {
                get: function () { return this.alignedToCenter; },
                set: function (value) { this.alignedToCenter = value; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DockStack.prototype, "IsEmpty", {
                get: function () { return this.layerDictionary.Count == 0; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DockStack.prototype, "DockLayers", {
                get: function () {
                    return this.layerDictionary.Values;
                },
                enumerable: true,
                configurable: true
            });
            DockStack.prototype.Add = function (layer) {
                var dockLayer = new Web.DockLayer();
                this.layerDictionary.Add(layer, dockLayer);
                return dockLayer;
            };
            DockStack.prototype.DockLayerOf = function (layer) {
                if (this.layerDictionary.ContainsKey(layer)) {
                    return this.layerDictionary.ValueOf(layer);
                }
                return null;
            };
            DockStack.prototype.Contains = function (layer) {
                return this.layerDictionary.ContainsKey(layer);
            };
            DockStack.prototype.Remove = function (layer) {
                var found = false;
                var layerToRemove = 0;
                var values = this.layerDictionary.Values;
                var keys = this.layerDictionary.Keys;
                for (var i = 0; i < values.length; i++) {
                    var value = values[i];
                    if (value === layer) {
                        layerToRemove = keys[i];
                        found = true;
                        break;
                    }
                }
                if (found) {
                    this.layerDictionary.Remove(layerToRemove);
                }
            };
            DockStack.prototype.NextDockLayer = function () {
                var keys = this.layerDictionary.Keys;
                if (keys.length == 0) {
                    return 0;
                }
                for (var i = keys.length - 1; i >= 0; i--) {
                    var layer = keys[i];
                    if (layer < Number.MAX_VALUE) {
                        return layer + 1;
                    }
                }
                return keys[keys.length - 1] - 1;
            };
            return DockStack;
        }());
        Web.DockStack = DockStack;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var DockLayer = /** @class */ (function () {
            function DockLayer() {
                this.autoDrawings = new Web.Dictionary();
                this.Dimensions = new Web.Rectangle(0, 0, 0, 0);
            }
            Object.defineProperty(DockLayer.prototype, "AutoDrawings", {
                get: function () { return this.autoDrawings.Values; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DockLayer.prototype, "IsEmpty", {
                get: function () { return this.autoDrawings.Count == 0; },
                enumerable: true,
                configurable: true
            });
            DockLayer.prototype.AddAutoDrawing = function (autoDrawing) {
                this.autoDrawings.Add(autoDrawing.Guid, autoDrawing);
            };
            return DockLayer;
        }());
        Web.DockLayer = DockLayer;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="Interfaces/IEventHandler.ts" />
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var EventHandler = /** @class */ (function () {
            function EventHandler() {
                this.handlers = [];
            }
            EventHandler.prototype.On = function (handler) {
                this.Off(handler);
                this.handlers.push(handler);
            };
            EventHandler.prototype.Off = function (handler) {
                this.handlers = this.handlers.filter(function (h) { return h !== handler; });
            };
            EventHandler.prototype.Trigger = function (data) {
                this.handlers.slice(0).forEach(function (h) { return h(data); });
            };
            return EventHandler;
        }());
        Web.EventHandler = EventHandler;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="EventHandler.ts"/>
/// <reference path="Interfaces/IEventHandler.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var KeyInfo = /** @class */ (function () {
            function KeyInfo() {
                var _this = this;
                this.onKeyDown = new Web.EventHandler();
                this.ClearKeys = function () {
                    _this.F1 = false;
                    _this.Control = false;
                    _this.Alt = false;
                    _this.Shift = false;
                    _this.Tab = false;
                    _this.Escape = false;
                    _this.Backspace = false;
                    _this.Delete = false;
                    _this.Home = false;
                    _this.End = false;
                    _this.LeftArrow = false;
                    _this.RightArrow = false;
                    _this.UpArrow = false;
                    _this.DownArrow = false;
                    _this.Enter = false;
                    _this.Return = false;
                    _this.Insert = false;
                    _this.KeyChar = "";
                    _this.KeyCode = "";
                };
                this.TestSpecialKey = function (key) {
                    _this.ClearKeys();
                    _this.Tab = key === "Tab";
                    _this.Escape = key === "Esc";
                    _this.Backspace = key === "Backspace";
                    _this.Delete = key === "Del";
                    _this.Home = key === "Home";
                    _this.End = key === "End";
                    _this.LeftArrow = key === "Left";
                    _this.RightArrow = key === "Right";
                    _this.UpArrow = key === "Up";
                    _this.DownArrow = key === "Down";
                    _this.Enter = key === "Enter";
                    _this.Return = key === "Return";
                    _this.Insert = key === "Insert";
                };
                this.EventKeyDown = function (keyEvent) {
                    _this.Control = keyEvent.ctrlKey;
                    _this.Alt = keyEvent.altKey;
                    _this.Shift = keyEvent.shiftKey;
                    _this.TestSpecialKey(keyEvent.key);
                    _this.KeyCode = keyEvent.key;
                    var isF1 = keyEvent.key === "F1";
                    if (isF1) {
                        _this.F1 = true;
                    }
                    _this.KeyChar = keyEvent.key;
                    _this.TriggerKeyDown();
                };
                this.EventKeyUp = function (keyEvent) {
                    _this.Control = keyEvent.ctrlKey;
                    _this.Alt = keyEvent.altKey;
                    _this.Shift = keyEvent.shiftKey;
                    var isF1 = keyEvent.key === "F1";
                    if (isF1) {
                        _this.F1 = false;
                    }
                };
            }
            Object.defineProperty(KeyInfo.prototype, "KeyDown", {
                get: function () { return this.onKeyDown; },
                enumerable: true,
                configurable: true
            });
            KeyInfo.prototype.TriggerKeyDown = function () {
                this.onKeyDown.Trigger(this);
            };
            Object.defineProperty(KeyInfo.prototype, "IsSpecialKey", {
                get: function () {
                    return this.Enter || this.Return || this.Escape || this.Tab || this.LeftArrow || this.RightArrow || this.DownArrow || this.UpArrow || this.Insert || this.Home || this.Delete || this.Backspace;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(KeyInfo.prototype, "KeyChar", {
                get: function () { return this.keyChar; },
                set: function (value) {
                    if (value.length === 1) {
                        this.keyChar = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return KeyInfo;
        }());
        Web.KeyInfo = KeyInfo;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Point = /** @class */ (function () {
            function Point(x, y) {
                this.x = x;
                this.y = y;
            }
            Point.prototype.Equals = function (other) {
                var xDiff = this.x - other.x;
                if (Math.abs(xDiff) < Point.differenceTolerance) {
                    var yDiff = this.y - other.y;
                    return (Math.abs(yDiff) < Point.differenceTolerance);
                }
                return false;
            };
            Point.differenceTolerance = .000001;
            return Point;
        }());
        Web.Point = Point;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="Interfaces/IQueue.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var FifoQueue = /** @class */ (function () {
            function FifoQueue(length) {
                this.list = [];
                this.maxLength = length;
            }
            FifoQueue.prototype.Push = function (value) {
                if (this.list.length == this.maxLength) {
                    this.Pop();
                }
                this.list.push(value);
                return this.list.length;
            };
            FifoQueue.prototype.Pop = function () {
                if (this.list.length > 0) {
                    var firstValue = this.list[0];
                    this.list.splice(0, 1);
                    return firstValue;
                }
                return null;
            };
            FifoQueue.prototype.Peek = function () {
                if (this.list.length > 0) {
                    var firstValue = this.list[0];
                    return firstValue;
                }
                return null;
            };
            FifoQueue.prototype.Clear = function () {
                this.list = [];
            };
            Object.defineProperty(FifoQueue.prototype, "Count", {
                get: function () { return this.list.length; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FifoQueue.prototype, "IsEmpty", {
                get: function () { return this.list.length == 0; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FifoQueue.prototype, "Any", {
                get: function () { return this.list.length != 0; },
                enumerable: true,
                configurable: true
            });
            return FifoQueue;
        }());
        Web.FifoQueue = FifoQueue;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Queue = /** @class */ (function () {
            function Queue() {
                this.list = [];
            }
            Queue.prototype.Push = function (value) {
                this.list.push(value);
                return this.list.length;
            };
            Queue.prototype.Pop = function () {
                if (this.list.length > 0) {
                    var firstValue = this.list[0];
                    this.list.splice(0, 1);
                    return firstValue;
                }
                return null;
            };
            Queue.prototype.Peek = function () {
                if (this.list.length > 0) {
                    var firstValue = this.list[0];
                    return firstValue;
                }
                return null;
            };
            Queue.prototype.Clear = function () {
                this.list = [];
            };
            Object.defineProperty(Queue.prototype, "Count", {
                get: function () { return this.list.length; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Queue.prototype, "IsEmpty", {
                get: function () { return this.list.length == 0; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Queue.prototype, "Any", {
                get: function () { return this.list.length != 0; },
                enumerable: true,
                configurable: true
            });
            return Queue;
        }());
        Web.Queue = Queue;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Rectangle = /** @class */ (function () {
            function Rectangle(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.Width = width;
                this.Height = height;
            }
            Object.defineProperty(Rectangle.prototype, "X", {
                get: function () { return this.x; },
                set: function (value) {
                    this.x = value;
                    this.right = this.x + this.width;
                    this.centerX = this.x + this.width * .5;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "Y", {
                get: function () { return this.y; },
                set: function (value) {
                    this.y = value;
                    this.bottom = this.y + this.height;
                    this.centerY = this.y + this.height * .5;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "Width", {
                get: function () { return this.width; },
                set: function (value) {
                    if (value >= 0) {
                        this.width = value;
                        this.right = this.x + this.width;
                        this.centerX = this.x + this.width * .5;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "Height", {
                get: function () { return this.height; },
                set: function (value) {
                    if (value >= 0) {
                        this.height = value;
                        this.bottom = this.y + this.height;
                        this.centerY = this.y + this.height * .5;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "Left", {
                get: function () { return this.x; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "Right", {
                get: function () { return this.right; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "Top", {
                get: function () { return this.y; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "Bottom", {
                get: function () { return this.bottom; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "CenterX", {
                get: function () { return this.centerX; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "CenterY", {
                get: function () { return this.centerY; },
                enumerable: true,
                configurable: true
            });
            Rectangle.prototype.Clone = function () {
                var clone = new Rectangle(this.X, this.Y, this.Width, this.Height);
                return clone;
            };
            Rectangle.prototype.PointInside = function (x, y) {
                return x >= this.x && x <= this.right && y >= this.y && y <= this.bottom;
            };
            Rectangle.prototype.PointNearby = function (x, y, margin) {
                return x >= this.x - margin && x <= this.right + margin && y >= this.y - margin && y <= this.bottom + margin;
            };
            return Rectangle;
        }());
        Web.Rectangle = Rectangle;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="Point.ts" />
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Size = /** @class */ (function () {
            function Size(width, height) {
                this.Width = width;
                this.Height = height;
            }
            Size.prototype.Equals = function (other) {
                var widthDiff = this.Width - other.Width;
                if (Math.abs(widthDiff) < Web.Point.differenceTolerance) {
                    var heightDiff = this.Height - other.Height;
                    return (Math.abs(heightDiff) < Web.Point.differenceTolerance);
                }
                return false;
            };
            Size.differenceTolerance = .000001;
            return Size;
        }());
        Web.Size = Size;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="Color.ts"/>
/// <reference path="Font.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Theme = /** @class */ (function () {
            function Theme(backgroundColor, backgroundColorHighlight, sectionBackgroundColor, titleColor, 
                selectedColor, frameColor, actionColor, mouseClickColor, progressColor, glossColor, 
                messageColor, tracingColor, pageTitleFont, artTitleFont, menuFont, messageFont, 
                tracingFont, startThemeAction) {
                if (startThemeAction === void 0) { startThemeAction = null; }
                this.BackgroundColor = backgroundColor;
                this.BackgroundColorHighlight = backgroundColorHighlight;
                this.SectionBackgroundColor = sectionBackgroundColor;
                this.TitleColor = titleColor;
                this.SelectedColor = selectedColor;
                this.FrameColor = frameColor;
                this.ActionColor = actionColor;
                this.MouseClickColor = mouseClickColor;
                this.ProgressColor = progressColor;
                this.GlossColor = glossColor;
                this.MessageColor = messageColor;
                this.TracingColor = tracingColor;
                this.PageTitleFont = pageTitleFont;
                this.ArtTitleFont = artTitleFont;
                this.MenuFont = menuFont;
                this.MessageFont = messageFont;
                this.TracingFont = tracingFont;
                this.StartThemeAction = startThemeAction;
            }
            Theme.prototype.Clone = function () {
                var clone = new Theme(this.BackgroundColor.Clone(), this.BackgroundColorHighlight.Clone(), this.SectionBackgroundColor.Clone(), this.TitleColor.Clone(), this.SelectedColor.Clone(), this.FrameColor.Clone(), this.ActionColor.Clone(), this.MouseClickColor.Clone(), this.ProgressColor.Clone(), this.GlossColor.Clone(), this.MessageColor.Clone(), this.TracingColor.Clone(), this.PageTitleFont.Clone(), this.ArtTitleFont.Clone(), this.MenuFont.Clone(), this.MessageFont.Clone(), this.TracingFont.Clone(), this.StartThemeAction);
                return clone;
            };
            Theme.prototype.StartThemeTransition = function (newTheme) {
                this.newTheme = newTheme;
                this.oldTheme = this.Clone();
                if (newTheme.StartThemeAction != null) {
                    newTheme.StartThemeAction();
                }
            };
            Theme.prototype.ThemeTransition = function (frame, nrOfFrames) {
                if (this.oldTheme != null && this.newTheme != null) {
                    var newPercentage = frame / nrOfFrames;
                    var oldPercentage = (nrOfFrames - frame) / nrOfFrames;
                    Web.Color.Interpolate(this.BackgroundColor, this.oldTheme.BackgroundColor, this.newTheme.BackgroundColor, oldPercentage, newPercentage);
                    Web.Color.Interpolate(this.BackgroundColorHighlight, this.oldTheme.BackgroundColorHighlight, this.newTheme.BackgroundColorHighlight, oldPercentage, newPercentage);
                    Web.Color.Interpolate(this.SectionBackgroundColor, this.oldTheme.SectionBackgroundColor, this.newTheme.SectionBackgroundColor, oldPercentage, newPercentage);
                    Web.Color.Interpolate(this.TitleColor, this.oldTheme.TitleColor, this.newTheme.TitleColor, oldPercentage, newPercentage);
                    Web.Color.Interpolate(this.SelectedColor, this.oldTheme.SelectedColor, this.newTheme.SelectedColor, oldPercentage, newPercentage);
                    Web.Color.Interpolate(this.FrameColor, this.oldTheme.FrameColor, this.newTheme.FrameColor, oldPercentage, newPercentage);
                    Web.Color.Interpolate(this.ActionColor, this.oldTheme.ActionColor, this.newTheme.ActionColor, oldPercentage, newPercentage);
                    Web.Color.Interpolate(this.MouseClickColor, this.oldTheme.MouseClickColor, this.newTheme.MouseClickColor, oldPercentage, newPercentage);
                    Web.Color.Interpolate(this.ProgressColor, this.oldTheme.ProgressColor, this.newTheme.ProgressColor, oldPercentage, newPercentage);
                    Web.Color.Interpolate(this.GlossColor, this.oldTheme.GlossColor, this.newTheme.GlossColor, oldPercentage, newPercentage);
                    Web.Color.Interpolate(this.MessageColor, this.oldTheme.MessageColor, this.newTheme.MessageColor, oldPercentage, newPercentage);
                    Web.Color.Interpolate(this.TracingColor, this.oldTheme.TracingColor, this.newTheme.TracingColor, oldPercentage, newPercentage);
                    if (frame == 0) {
                        this.PageTitleFont = this.newTheme.PageTitleFont;
                        this.ArtTitleFont = this.newTheme.ArtTitleFont;
                        this.MenuFont = this.newTheme.MenuFont;
                        this.MessageFont = this.newTheme.MessageFont;
                        this.TracingFont = this.newTheme.TracingFont;
                        this.StartThemeAction = this.newTheme.StartThemeAction;
                    }
                }
            };
            return Theme;
        }());
        Web.Theme = Theme;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="Dictionary.ts"/>
/// <reference path="Theme.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var ThemeManager = /** @class */ (function () {
            function ThemeManager(currentTheme) {
                this.CurrentThemeName = ThemeManager.ThemeDefault;
                this.themeDictionary = new Web.Dictionary();
                this.TransitionNrOfFrames = 180;
                this.transitionFrame = this.TransitionNrOfFrames + 1;
                this.CurrentTheme = currentTheme;
                this.themeDictionary.Add(ThemeManager.ThemeDefault, currentTheme.Clone());
            }
            ThemeManager.prototype.AddTheme = function (themeName, theme) {
                if (!this.themeDictionary.ContainsKey(themeName)) {
                    this.themeDictionary.Add(themeName, theme);
                }
            };
            ThemeManager.prototype.ChangeTheme = function (themeName) {
                if (themeName != this.CurrentThemeName && this.themeDictionary.ContainsKey(themeName)) {
                    this.transitionFrame = 0;
                    var newTheme = this.themeDictionary.ValueOf(themeName);
                    this.CurrentTheme.StartThemeTransition(newTheme);
                    this.CurrentThemeName = themeName;
                }
            };
            ThemeManager.prototype.PerformThemeTransition = function () {
                if (this.transitionFrame <= this.TransitionNrOfFrames) {
                    this.CurrentTheme.ThemeTransition(this.transitionFrame, this.TransitionNrOfFrames);
                    this.transitionFrame++;
                }
            };
            ThemeManager.ThemeDefault = "Default";
            return ThemeManager;
        }());
        Web.ThemeManager = ThemeManager;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="Color.ts"/>
/// <reference path="Dictionary.ts"/>
/// <reference path="DockSide.ts"/>
/// <reference path="DockStack.ts"/>
/// <reference path="DockLayer.ts"/>
/// <reference path="enums.ts"/>
/// <reference path="KeyInfo.ts"/>
/// <reference path="Point.ts"/>
/// <reference path="FifoQueue.ts"/>
/// <reference path="Queue.ts"/>
/// <reference path="Rectangle.ts"/>
/// <reference path="Size.ts"/>
/// <reference path="ThemeManager.ts"/>
/// <reference path="Interfaces/IAutoDrawing.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Font = /** @class */ (function () {
            function Font(name, size, style, weight) {
                if (style === void 0) { style = Web.FontStyle.normal; }
                if (weight === void 0) { weight = Web.FontWeight.normal; }
                this.name = name;
                this.size = size;
                this.style = style;
                this.weight = weight;
                this.fontString = Web.Renderer.GetFontByNameStyleWeightSize(this.name, this.style, this.weight, this.size);
            }
            Object.defineProperty(Font, "DefaultFontString", {
                get: function () { return "Arial"; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Font, "DefaultFont", {
                get: function () { return new Font("Arial", 12); },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Font.prototype, "Name", {
                get: function () { return this.name; },
                set: function (value) {
                    this.name = value;
                    this.fontString = Web.Renderer.GetFontByNameStyleWeightSize(this.name, this.style, this.weight, this.size);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Font.prototype, "Style", {
                get: function () { return this.style; },
                set: function (value) {
                    this.style = value;
                    this.fontString = Web.Renderer.GetFontByNameStyleWeightSize(this.name, this.style, this.weight, this.size);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Font.prototype, "Weight", {
                get: function () { return this.weight; },
                set: function (value) {
                    this.weight = value;
                    this.fontString = Web.Renderer.GetFontByNameStyleWeightSize(this.name, this.style, this.weight, this.size);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Font.prototype, "Size", {
                get: function () { return this.size; },
                set: function (value) {
                    this.size = value;
                    this.fontString = Web.Renderer.GetFontByNameStyleWeightSize(this.name, this.style, this.weight, this.size);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Font.prototype, "FontString", {
                get: function () { return this.fontString; },
                enumerable: true,
                configurable: true
            });
            Font.prototype.Clone = function () {
                return new Font(this.name, this.size, this.Style, this.weight);
            };
            return Font;
        }());
        Web.Font = Font;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="AutoDrawingBase.ts"/>
/// <reference path="../Color.ts"/>
/// <reference path="../Font.ts"/>
/// <reference path="../enums.ts"/>
/// <reference path="../Interfaces/Func.ts"/>

var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Digit = /** @class */ (function () {
            function Digit() {
            }
            return Digit;
        }());

        var BinaryRain = /** @class */ (function (_super) {
            __extends(BinaryRain, _super);
            function BinaryRain(requirement, minSpeed, maxSpeed, nrOfDigits, minFontSize, maxFontSize, getFont, getColor) {
                var _this = _super.call(this, 0, requirement) || this;
                _this.fading = false;
                _this.active = false;
                _this.animatingDigits = new Web.List();
                _this.minSpeed = minSpeed;
                _this.maxSpeed = maxSpeed;
                _this.nrOfDigits = nrOfDigits;
                _this.minFontSize = minFontSize;
                _this.maxFontSize = maxFontSize;
                _this.getFont = getFont;
                _this.getColor = getColor;
                return _this;
            }
            Object.defineProperty(BinaryRain.prototype, "Active", {
                get: function () { return this.active; },
                set: function (value) {
                    if (value != this.active) {
                        this.active = value;
                        this.fading = true;
                        if (this.active) {
                            // Was inactive, is now active => fade in.
                            this.fadeAlpha = 0;
                            this.fadeStep = .01;
                        }
                        else {
                            // Was active, is now inactive => fade out.
                            this.fadeAlpha = 1;
                            this.fadeStep = -.01;
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            BinaryRain.prototype.FillDigits = function (width) {
                for (var iDigit = 0; iDigit < this.nrOfDigits; iDigit++) {
                    var digit = new Digit();
                    this.FillDigit(digit, width);
                    this.animatingDigits.Add(digit);
                }
            };
            BinaryRain.prototype.FillDigit = function (digit, width) {
                var rnd = Math.random();
                digit.text = (rnd < .5) ? "0" : "1";
                rnd = Math.random();
                digit.filled = (rnd < .5);
                rnd = Math.random();
                digit.alpha = Math.max(.05, rnd);
                rnd = Math.random();
                digit.speed = Math.max(this.minSpeed, rnd * this.maxSpeed);
                rnd = Math.random();
                digit.xPos = rnd * width;
                rnd = Math.random();
                digit.fontSize = Math.max(this.minFontSize, rnd * this.maxFontSize);
                digit.yPos = -digit.fontSize;
            };
            BinaryRain.prototype.Render = function (width, height) {
                if (this.Active || this.fading) {
                    if (this.animatingDigits.Count == 0) {
                        this.FillDigits(width);
                    }
                    var font = this.getFont();
                    var color = this.getColor();
                    var fade = (this.fading) ? this.fadeAlpha : 1;
                    for (var iDigit = 0; iDigit < this.nrOfDigits; iDigit++) {
                        var digit = this.animatingDigits.Index(iDigit);
                        font.Size = digit.fontSize;
                        color.Alpha = digit.alpha * fade;
                        Web.Renderer.DrawText(digit.text, font, digit.xPos, digit.yPos, color, digit.filled, Web.TextBaseline.middle);
                        digit.yPos = digit.yPos + digit.speed;
                        if (digit.yPos > height) {
                            this.FillDigit(digit, width);
                        }
                    }
                    if (this.fading) {
                        this.fadeAlpha += this.fadeStep;
                        if (this.fadeAlpha < 0 || this.fadeAlpha > 1) {
                            this.fading = false;
                        }
                    }
                }
            };
            return BinaryRain;
        }(Web.AutoDrawingBase));
        Web.BinaryRain = BinaryRain;

        var ProgressCircle = /** @class */ (function (_super) {
            __extends(ProgressCircle, _super);
            function ProgressCircle(requirement, centerX, centerY, innerRadius, outerRadius, backgroundColor, foregroundColor) {
                var _this = _super.call(this, outerRadius * 2, requirement) || this;
                _this.centerX = centerX;
                _this.centerY = centerY;
                _this.innerRadius = innerRadius;
                _this.outerRadius = outerRadius;
                _this.backgroundColor = backgroundColor;
                _this.foregroundColor = foregroundColor;
                return _this;
            }
            ProgressCircle.prototype.Render = function (width, height) {
                // Render background
                var outerPoints = Web.Renderer.CircleSegmentPoints(this.centerX, this.centerY, this.outerRadius, 450, 90);
                var innerPoints = Web.Renderer.CircleSegmentPoints(this.centerX, this.centerY, this.innerRadius, 450, 90);
                for (var iPoint = innerPoints.length - 1; iPoint >= 0; iPoint--) {
                    outerPoints.push(innerPoints[iPoint]);
                }
                Web.Renderer.FillPolygon(outerPoints, this.backgroundColor);
                // Render progress
                if (this.runningValue > 0) {
                    var startAngle = this.PercentageToAngle(0);
                    var endAngle;
                    if (this.runningValue >= this.endValue) {
                        endAngle = startAngle + 360;
                    }
                    else {
                        var endPercentage = this.runningValue / this.endValue;
                        endAngle = this.PercentageToAngle(endPercentage);
                    }
                    outerPoints = Web.Renderer.CircleSegmentPoints(this.centerX, this.centerY, this.outerRadius, endAngle, startAngle);
                    innerPoints = Web.Renderer.CircleSegmentPoints(this.centerX, this.centerY, this.innerRadius, endAngle, startAngle);
                    for (iPoint = innerPoints.length - 1; iPoint >= 0; iPoint--) {
                        outerPoints.push(innerPoints[iPoint]);
                    }
                    Web.Renderer.FillPolygon(outerPoints, this.foregroundColor);
                }
            };
            ProgressCircle.prototype.PercentageToAngle = function (precentage) {
                // A 'normal' circle begins at 3 o'clock and goes counter clockwise,
                //   - we reverse the order (360 - ... ) 
                //   - and adjust the starting point (12'O clock = 90°) 
                var angle = 360 - (precentage * 360 - 90);
                if (angle < 0) {
                    angle += 360;
                }
                else if (angle >= 360) {
                    angle -= 360;
                }
                return angle;
            };
            return ProgressCircle;
        }(Web.AutoDrawingBase));
        Web.ProgressCircle = ProgressCircle;

        var Fps = /** @class */ (function (_super) {
            __extends(Fps, _super);
            function Fps(requirement, x, y, getColor, align, getFont) {
                var _this = _super.call(this, 0, requirement) || this;
                _this.xStart = 0;
                _this.getColor = getColor;
                _this.getFont = getFont;
                _this.x = x;
                _this.y = y;
                _this.align = align;
                return _this;
            }
            Fps.prototype.Render = function (width, height) {
                var color = this.getColor();
                this.font = this.getFont();
                var fontString = this.font.FontString;
                var frameRate = Web.Renderer.AverageFrameRate.toString();
                if (this.align == Web.Align.Floating || this.align == Web.Align.TopLeft) {
                    Web.Renderer.DrawText(frameRate, this.font, this.x, this.y, color, true);
                }
                else {
                    var textWidth = Web.Renderer.MeasureText(frameRate, this.font).Width;
                    var xPosition;
                    var yPosition;
                    if (this.align == Web.Align.BottomLeft) {
                        yPosition = height - this.font.Size - this.y;
                        Web.Renderer.DrawText(frameRate, this.font, this.x, yPosition, color, true);
                    }
                    else if (this.align == Web.Align.TopRight) {
                        xPosition = width - textWidth - this.x;
                        Web.Renderer.DrawText(frameRate, this.font, xPosition, this.y, color, true);
                    }
                    else if (this.align == Web.Align.BottomRight) {
                        xPosition = width - textWidth - this.x;
                        yPosition = height - this.font.Size - this.y;
                        Web.Renderer.DrawText(frameRate, this.font, xPosition, yPosition, color, true);
                    }
                }
            };
            return Fps;
        }(Web.AutoDrawingBase));
        Web.Fps = Fps;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="AutoDrawingBase.ts"/>





var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Wave = /** @class */ (function () {
            function Wave() {
            }
            return Wave;
        }());
        var Waves = /** @class */ (function (_super) {
            __extends(Waves, _super);
            function Waves(requirement, minSpeed, maxSpeed, nrOfWaves, getColor, paralax) {
                if (paralax === void 0) { paralax = false; }
                var _this = _super.call(this, 0, requirement) || this;
                _this.fading = false;
                _this.active = false;
                _this.Paralax = false;
                _this.animatingWaves = new Web.List();
                _this.maxFrequency = 8;
                _this.minAlpha = .05;
                _this.prevHeight = 0;
                _this.prevParalax = false;
                _this.minSpeed = minSpeed;
                _this.maxSpeed = maxSpeed;
                _this.nrOfWaves = nrOfWaves;
                _this.getColor = getColor;
                _this.Paralax = paralax;
                return _this;
            }
            Object.defineProperty(Waves.prototype, "Active", {
                get: function () { return this.active; },
                set: function (value) {
                    if (value != this.active) {
                        this.active = value;
                        this.fading = true;
                        if (this.active) {
                            // Was inactive, is now active => fade in.
                            this.fadeAlpha = 0;
                            this.fadeStep = .01;
                        }
                        else {
                            // Was active, is now inactive => fade out.
                            this.fadeAlpha = 1;
                            this.fadeStep = -.01;
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Waves.prototype.FillWaves = function (width, height) {
                this.animatingWaves.Clear();
                if (this.Paralax) {
                    var yStep = height / (this.nrOfWaves + 1);
                    var yPos = height - yStep;
                    var speed = this.maxSpeed;
                    var speedStep = speed * .33;
                    var minAmplitude = height / (3 * (this.nrOfWaves + 1));
                    var maxAmplitude = height / (this.nrOfWaves + 1);
                    var amplitude = maxAmplitude;
                    var amplitudeStep = (maxAmplitude - minAmplitude) / (this.nrOfWaves + 1);
                    var alpha = 1;
                    var alphaStep = (1 - this.minAlpha) / (this.nrOfWaves + 1);
                    var frequency = this.maxFrequency;
                    var frequencyStep = (this.maxFrequency - 2) / (this.nrOfWaves + 1);
                    var rnd;
                    for (var i = 0; i < this.nrOfWaves; i++) {
                        var paralaxWave = new Wave();
                        rnd = Math.random();
                        paralaxWave.startAngle = 360 * rnd;
                        paralaxWave.yPos = yPos;
                        paralaxWave.speed = speed;
                        paralaxWave.yAmplitude = amplitude;
                        paralaxWave.frequency = frequency;
                        paralaxWave.alpha = alpha;
                        this.animatingWaves.Add(paralaxWave);
                        yPos -= yStep;
                        speed -= speedStep;
                        speedStep *= .3;
                        amplitude -= amplitudeStep;
                        alpha -= alphaStep;
                        frequency -= frequencyStep;
                    }
                }
                else {
                    for (var iWave = 0; iWave < this.nrOfWaves; iWave++) {
                        var wave = new Wave();
                        this.FillWave(wave, width, height);
                        this.animatingWaves.Add(wave);
                    }
                }
            };
            Waves.prototype.FillWave = function (wave, width, height) {
                var rnd = Math.random();
                wave.startAngle = 360 * rnd;
                rnd = Math.random();
                wave.yPos = height * rnd;
                var minAmplitude = height / 12;
                var maxAmplitude = height / 6;
                rnd = Math.random();
                wave.yAmplitude = Math.max(minAmplitude, maxAmplitude * rnd);
                rnd = Math.random();
                wave.frequency = Math.max(2, rnd * this.maxFrequency);
                rnd = Math.random();
                wave.speed = Math.max(this.minSpeed, rnd * this.maxSpeed);
                rnd = Math.random();
                wave.alpha = Math.max(this.minAlpha, rnd);
            };
            Waves.prototype.Render = function (width, height) {
                if (this.Active || this.fading) {
                    var framerateRatio = 1 / Web.Renderer.LastFrameRate;
                    if (this.animatingWaves.Count == 0 || height != this.prevHeight || this.Paralax != this.prevParalax) {
                        this.FillWaves(width, height);
                        this.prevHeight = height;
                        this.prevParalax = this.Paralax;
                    }
                    var color = this.getColor();
                    var fade = (this.fading) ? this.fadeAlpha : 1;
                    for (var iWave = 0; iWave < this.nrOfWaves; iWave++) {
                        var wave = this.animatingWaves.Index(iWave);
                        color.Alpha = wave.alpha * fade;
                        Web.Renderer.DrawSine(0, width, wave.yPos, wave.yAmplitude, wave.frequency, wave.startAngle, Math.floor(width / 5), color);
                        wave.startAngle += (wave.speed * framerateRatio);
                        if (wave.startAngle > 360) {
                            wave.startAngle -= 360;
                        }
                    }
                    if (this.fading) {
                        this.fadeAlpha += this.fadeStep;
                        if (this.fadeAlpha < 0 || this.fadeAlpha > 1) {
                            this.fading = false;
                        }
                    }
                }
            };
            return Waves;
        }(Web.AutoDrawingBase));
        Web.Waves = Waves;

        var Radiate = /** @class */ (function (_super) {
            __extends(Radiate, _super);
            function Radiate(size, requirement, getColor, beams, speed) {
                var _this = _super.call(this, size, requirement) || this;
                _this.beamPoints = [];
                _this.animationStartAngle = 0;
                _this.getColor = getColor;
                if (beams < 2 || beams > 90) {
                    beams = 10;
                }
                _this.beamAngle = 360 / (beams * 2);
                _this.beams = beams;
                _this.speed = speed;
                // Each beam has 3 points, which we use over and over again.
                _this.beamPoints.push(new Web.Point(0, 0));
                _this.beamPoints.push(new Web.Point(0, 0));
                _this.beamPoints.push(new Web.Point(0, 0));
                return _this;
            }
            Radiate.prototype.Render = function (width, height) {
                var centerWidth = width * .5;
                var centerHeight = height * .5;
                var radius = Math.max(width, height);
                var centerPoint = this.beamPoints[0];
                centerPoint.x = Web.Renderer.MouseX;
                centerPoint.y = Web.Renderer.MouseY;
                var angle = this.animationStartAngle;
                var color = this.getColor();
                for (var iBeam = 0; iBeam < this.beams; iBeam++) {
                    var angleRadians = Web.Renderer.ToRadians * angle;
                    var x = centerWidth + (radius * Math.cos(angleRadians));
                    var y = centerHeight - (radius * Math.sin(angleRadians));
                    var radiusPoint1 = this.beamPoints[1];
                    radiusPoint1.x = x;
                    radiusPoint1.y = y;
                    angle += this.beamAngle;
                    angleRadians = Web.Renderer.ToRadians * angle;
                    x = centerWidth + (radius * Math.cos(angleRadians));
                    y = centerHeight - (radius * Math.sin(angleRadians));
                    var radiusPoint2 = this.beamPoints[2];
                    radiusPoint2.x = x;
                    radiusPoint2.y = y;
                    Web.Renderer.FillPolygon(this.beamPoints, color);
                    angle += this.beamAngle;
                }
                var angleStep = this.speed * Web.Renderer.RenderDelta;
                this.animationStartAngle += angleStep;
            };
            return Radiate;
        }(Web.AutoDrawingBase));
        Web.Radiate = Radiate;

        var Area = /** @class */ (function (_super) {
            __extends(Area, _super);
            function Area(size, requirement, getColor) {                
                var _this = _super.call(this, size, requirement) || this;                
                _this.getColor = getColor;
                _this.maxSize = size;
                return _this;
            }
            Area.prototype.MeasureDock = function (otherSize) {
                if (this.Dock == Web.GraphDocking.Bottom || this.Dock == Web.GraphDocking.Top) {
                    var maxHeight = Web.Renderer.Height * .05;
                    if (maxHeight < this.maxSize) {
                        return maxHeight;
                    }
                }
                else if (this.Dock == Web.GraphDocking.Left || this.Dock == Web.GraphDocking.Right) {
                    var maxWidth = Web.Renderer.Width * .05;
                    if (maxWidth < this.maxSize) {
                        return maxWidth;
                    }
                }
                return this.maxSize;
            };
            Area.prototype.Render = function (width, height) {     
                var color = this.getColor();
                Web.Renderer.FillArea(0, 0, width, height, color);
                // Web.Renderer.DrawRoundedRectangle(1, 1, width - 2, height - 2, 5, 2, false, true, color, Web.Renderer.ColorWhite);
            };
            return Area;
        }(Web.AutoDrawingBase));
        Web.Area = Area;

        var Side = /** @class */ (function (_super) {
            __extends(Side, _super);
            function Side() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(Side.prototype, "FillColor", {
                get: function () { return this.fillColor; },
                set: function (value) { this.fillColor = value; },
                enumerable: true,
                configurable: true
            });
            Side.prototype.MeasureDock = function (otherSize) {
                return 25;
            };
            Side.prototype.Render = function (width, height) {
                Web.Renderer.FillArea(0, 0, width, height, this.fillColor);
            };
            return Side;
        }(Web.AutoDrawingBase));
        Web.Side = Side;        


        var XYText = /** @class */ (function (_super) {
            __extends(XYText, _super);
            function XYText(requirement, text, x, y, getColor, align, getFont, filled) {
                var _this = _super.call(this, 0, requirement) || this;
                _this.xStart = 0;
                _this.getColor = getColor;
                _this.Text = text;
                _this.getFont = getFont;
                _this.filled = filled;
                _this.x = x;
                _this.y = y;
                _this.align = align;
                return _this;
            }
            XYText.prototype.Render = function (width, height) {
                var font = this.getFont();
                var color = this.getColor();
                if (this.align == Web.Align.Floating || this.align == Web.Align.TopLeft) {
                    Web.Renderer.DrawText(this.Text, font, this.x, this.y, color, this.filled);
                }
                else {
                    var textWidth = Web.Renderer.MeasureText(this.Text, font).Width;
                    var xPosition;
                    var yPosition;
                    if (this.align == Web.Align.BottomLeft) {
                        yPosition = height - font.Size - this.y;
                        Web.Renderer.DrawText(this.Text, font, this.x, yPosition, color, this.filled);
                    }
                    else if (this.align == Web.Align.TopRight) {
                        xPosition = width - textWidth - this.x;
                        Web.Renderer.DrawText(this.Text, font, xPosition, this.y, color, this.filled);
                    }
                    else if (this.align == Web.Align.BottomRight) {
                        xPosition = width - textWidth - this.x;
                        yPosition = height - font.Size - this.y;
                        Web.Renderer.DrawText(this.Text, font, xPosition, yPosition, color, this.filled);
                    }
                }
            };
            return XYText;
        }(Web.AutoDrawingBase));
        Web.XYText = XYText;
    
        var XYImage = /** @class */ (function (_super) {
            __extends(XYImage, _super);
            function XYImage(size, requirement, imagePath, x, y, align) {
                var _this = _super.call(this, size, requirement) || this;
                _this.xStart = 0;
                _this.x = x;
                _this.y = y;
                _this.align = align;
                _this.image = new Image();
                _this.image.src = imagePath;
                return _this;
            }
            XYImage.prototype.Render = function (width, height) {
                // Image loaded => imageWidth > 0
                if (this.image.width > 0) {
                    if (this.align == Web.Align.Floating || this.align == Web.Align.TopLeft) {
                        Web.Renderer.DrawImage(this.image, this.x, this.y);
                    }
                    else {
                        var xPosition;
                        var yPosition;
                        if (this.align == Web.Align.BottomLeft) {
                            yPosition = height - this.image.height - this.y;
                            Web.Renderer.DrawImage(this.image, this.x, yPosition);
                        }
                        else if (this.align == Web.Align.TopRight) {
                            xPosition = width - this.image.width - this.x;
                            Web.Renderer.DrawImage(this.image, xPosition, this.y);
                        }
                        else if (this.align == Web.Align.BottomRight) {
                            xPosition = width - this.image.width - this.x;
                            yPosition = height - this.image.height - this.y;
                            Web.Renderer.DrawImage(this.image, xPosition, yPosition);
                        }
                    }
                }
            };
            return XYImage;
        }(Web.AutoDrawingBase));
        Web.XYImage = XYImage;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="AutoDrawingBase.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Slideshow = /** @class */ (function (_super) {
            __extends(Slideshow, _super);
            function Slideshow(size, requirement, numberOfSeconds, progressCircle, nextImage, nextMenuItem, color, getFont) {
                var _this = _super.call(this, size) || this;
                _this.running = false;
                _this.playPauseX = 15;
                _this.playPauseY = 13;
                _this.playPauseWidth = 25;
                _this.playPauseHeight = 26;
                _this.playPauseRectangle = new Web.Rectangle(_this.playPauseX - 10, _this.playPauseY - 10, _this.playPauseWidth + 20, _this.playPauseHeight + 20); // fuzzy test for mobile device. 
                _this.playPoint1 = new Web.Point(_this.playPauseX, _this.playPauseY);
                _this.playPoint2 = new Web.Point(_this.playPauseX, _this.playPauseY + _this.playPauseHeight);
                _this.playPoint3 = new Web.Point(_this.playPauseX + _this.playPauseWidth, _this.playPauseY + _this.playPauseHeight * .5);
                _this.playPolygon = [_this.playPoint1, _this.playPoint2, _this.playPoint3];
                _this.pauseRectangle = new Web.Rectangle(_this.playPauseX, _this.playPauseY, _this.playPauseWidth, _this.playPauseHeight);
                _this.numberOfMilliSeconds = numberOfSeconds * 1000;
                _this.progressCircle = progressCircle;
                _this.progressCircle.Visible = false;
                _this.nextImage = nextImage;
                _this.nextMenuItem = nextMenuItem;
                _this.color = color;
                _this.getFont = getFont;
                _this.font = getFont();
                return _this;
            }
            Object.defineProperty(Slideshow.prototype, "Color", {
                get: function () { return this.color; },
                set: function (value) { this.color = value; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Slideshow.prototype, "Running", {                
                get: function () { return this.running; },
                enumerable: true,
                configurable: true
            });
            Slideshow.prototype.Start = function () {
                this.startedAt = Date.now();
                this.running = true;
                this.progressCircle.runningValue = 0;
                this.progressCircle.endValue = this.numberOfMilliSeconds;
                this.progressCircle.Visible = true;
            };
            Slideshow.prototype.Stop = function () {
                this.running = false;
                this.progressCircle.Visible = false;
            };
            Slideshow.prototype.Render = function (width, height) {                
                this.font = this.getFont();
                Web.Renderer.DrawText("Slideshow", this.font, this.playPauseX, this.progressCircle.centerY + this.progressCircle.outerRadius + 5, this.Color, true, Web.TextBaseline.hanging);
                if (this.running) {
                    var now = Date.now();
                    var difference = now - this.startedAt;
                    this.progressCircle.runningValue = difference;
                    if (difference > this.numberOfMilliSeconds) {
                        if (!Web.SetupControl.ImageStrip.AnimationInProgress) {
                            var nextImageSelected = this.nextImage(Web.SetupControl.ImageStrip);
                            if (!nextImageSelected) {
                                this.nextMenuItem(Web.SetupControl.Menu);
                            }
                            this.progressCircle.runningValue = 0;
                            this.startedAt = now;
                        }
                    }
                    // Render pause button
                    var barWidth = this.pauseRectangle.Width * .5 - 4;
                    Web.Renderer.FillArea(this.pauseRectangle.X, this.pauseRectangle.Y, barWidth, this.pauseRectangle.Height, this.Color);
                    Web.Renderer.FillArea(this.pauseRectangle.CenterX + 4, this.pauseRectangle.Y, barWidth, this.pauseRectangle.Height, this.Color);
                }
                else {
                    // Render play button.
                    Web.Renderer.FillTriangle(this.playPoint1, this.playPoint2, this.playPoint3, this.color);
                }
            };
            Slideshow.prototype.HitTest = function (width, height, mouseEvent) {
                var mousePoint = Web.Renderer.MouseToAutoDrawing(this);
                if (this.running) {
                    // Test pause button
                    if (this.pauseRectangle.PointInside(mousePoint.x, mousePoint.y)) {
                        var barWidth = this.pauseRectangle.Width * .5 - 5;
                        Web.Renderer.FillArea(this.pauseRectangle.X, this.pauseRectangle.Y, barWidth, this.pauseRectangle.Height, Web.Renderer.HighlightColor);
                        Web.Renderer.FillArea(this.pauseRectangle.CenterX + 5, this.pauseRectangle.Y, barWidth, this.pauseRectangle.Height, Web.Renderer.HighlightColor);
                        if (Web.Renderer.MouseClicked) {
                            this.Stop();
                        }
                    }
                    else if (Web.Renderer.MouseClicked && this.playPauseRectangle.PointInside(mousePoint.x, mousePoint.y)) {
                        this.Stop();
                    }
                }
                else {
                    // Test play button
                    if (Web.Renderer.PointInsidePolygon(mousePoint, this.playPolygon)) {
                        Web.Renderer.FillTriangle(this.playPoint1, this.playPoint2, this.playPoint3, Web.Renderer.HighlightColor);
                        if (Web.Renderer.MouseClicked) {
                            this.Start();
                        }
                    }
                    else if (Web.Renderer.MouseClicked && this.playPauseRectangle.PointInside(mousePoint.x, mousePoint.y)) {
                        this.Start();
                    }
                }
                return false;
            };
            return Slideshow;
        }(Web.AutoDrawingBase));
        Web.Slideshow = Slideshow;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="AutoDrawingBase.ts"/>

var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var MenuItem = /** @class */ (function () {
            function MenuItem(menuText, subMenuItems, clickedMenu) {
                this.parentMenu = null;
                this.menuText = menuText;
                this.subMenuItems = subMenuItems;
                this.clickedMenu = clickedMenu;
                if (subMenuItems.length > 0) {
                    for (var sub = 0; sub < subMenuItems.length; sub++) {
                        subMenuItems[sub].parentMenu = this;
                    }
                }
            }
            return MenuItem;
        }());
        Web.MenuItem = MenuItem;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="AutoDrawingBase.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Menu = /** @class */ (function (_super) {
            __extends(Menu, _super);
            function Menu(size, requirement, getFont, getFontColor, getSelectedFontColor, menuItems) {
                var _this = _super.call(this, size, requirement) || this;
                _this.selectedMenuIndex = 0;
                _this.selectedSubMenuIndex = 0;
                _this.startY = 2;
                _this.maxMenuSpacing = 20;
                _this.prevRenderWidth = 0;
                _this.prevRenderHeight = 0;
                _this.hitTestRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.getFont = getFont;
                _this.getFontColor = getFontColor;
                _this.getSelectedFontColor = getSelectedFontColor;
                _this.menuItems = menuItems;
                return _this;
            }
            Menu.prototype.PrevMenuItem = function (menu) {
                var mainMenuItem = menu.menuItems[menu.selectedMenuIndex];
                if (mainMenuItem.subMenuItems.length > 0) {
                    menu.selectedSubMenuIndex--;
                    if (menu.selectedSubMenuIndex < 0) {
                        menu.SetPrevSelectedMenuIndex();
                    }
                }
                else {
                    menu.SetPrevSelectedMenuIndex();
                }
                menu.ActivateSelectedMenuItem();
            };
            Menu.prototype.NextMenuItem = function (menu) {
                var mainMenuItem = menu.menuItems[menu.selectedMenuIndex];
                if (mainMenuItem.subMenuItems.length > 0) {
                    menu.selectedSubMenuIndex++;
                    if (menu.selectedSubMenuIndex > mainMenuItem.subMenuItems.length - 1) {
                        menu.SetNextSelectedMenuIndex();
                    }
                }
                else {
                    menu.SetNextSelectedMenuIndex();
                }
                menu.ActivateSelectedMenuItem();
            };
            Menu.prototype.SetPrevSelectedMenuIndex = function () {
                this.selectedMenuIndex--;
                if (this.selectedMenuIndex < 0) {
                    this.selectedMenuIndex = this.menuItems.length - 1;
                }
                this.selectedSubMenuIndex = 0;
            };
            Menu.prototype.SetNextSelectedMenuIndex = function () {
                this.selectedMenuIndex++;
                if (this.selectedMenuIndex > this.menuItems.length - 1) {
                    this.selectedMenuIndex = 0;
                }
                this.selectedSubMenuIndex = 0;
            };
            Menu.prototype.ActivateSelectedMenuItem = function () {
                var mainMenu = this.menuItems[this.selectedMenuIndex];
                if (mainMenu.subMenuItems.length > 0) {
                    var subMenuItem = mainMenu.subMenuItems[this.selectedSubMenuIndex];
                    subMenuItem.clickedMenu(subMenuItem);
                }
                else {
                    mainMenu.clickedMenu(mainMenu);
                }
            };
            Menu.prototype.SetSelectedMenu = function (menuItem) {
                this.selectedMenuIndex = 0;
                this.selectedSubMenuIndex = 0;
                for (var iMenu = 0; iMenu < this.menuItems.length; iMenu++) {
                    var mainMenuItem = this.menuItems[iMenu];
                    if (menuItem == mainMenuItem) {
                        this.selectedMenuIndex = iMenu;
                        break;
                    }
                    var found = false;
                    for (var iSubMenu = 0; iSubMenu < mainMenuItem.subMenuItems.length; iSubMenu++) {
                        var subMenuItem = mainMenuItem.subMenuItems[iSubMenu];
                        if (menuItem == subMenuItem) {
                            this.selectedMenuIndex = iMenu;
                            this.selectedSubMenuIndex = iSubMenu;
                            found = true;
                            break;
                        }
                    }
                    if (found) {
                        break;
                    }
                }
            };
            Menu.prototype.Render = function (width, height) {
                this.font = this.getFont();
                this.SetMenuCanvasAndFontSize(width, height);
                Web.Renderer.DrawCanvas(this.menuCanvas, 0, 0);
                var y = this.startY;
                this.RenderMenuItems(width, this.menuItems, y, this.selectedMenuIndex, true);
                var selectedMenu = this.menuItems[this.selectedMenuIndex];
                y += this.font.Size;
                this.RenderMenuItems(width, selectedMenu.subMenuItems, y, this.selectedSubMenuIndex, true);
            };
            Menu.prototype.RenderMenuItems = function (width, menuItems, menuY, selectedIndex, selectedOnes) {
                if (selectedOnes === void 0) { selectedOnes = false; }
                var selectedFontColor = this.getSelectedFontColor();
                var fontColor = this.getFontColor();
                var menuWidth = this.MeasureMenuItems(menuItems);
                var runningX = (width * .5) - (menuWidth * .5);
                for (var iMenu = 0; iMenu < menuItems.length; iMenu++) {
                    var menuItem = menuItems[iMenu];
                    if (selectedOnes) {
                        if (iMenu == selectedIndex) {
                            Web.Renderer.DrawText(menuItem.menuText, this.font, runningX, menuY, selectedFontColor, true);
                        }
                    }
                    else {
                        Web.Renderer.DrawText(menuItem.menuText, this.font, runningX, menuY, fontColor, true, Web.TextBaseline.top, Web.TextAlign.left, this.menuContext);
                    }
                    var textWidth = Web.Renderer.MeasureText(menuItem.menuText, this.font).Width;
                    runningX += textWidth;
                    runningX += this.menuXSpacing;
                }
            };
            Menu.prototype.SetMenuCanvasAndFontSize = function (renderWidth, renderHeight) {
                this.menuXSpacing = this.maxMenuSpacing;
                var mainMenuWidth = this.MeasureMenuItems(this.menuItems);
                var selectedMenu = this.menuItems[this.selectedMenuIndex];
                var subMenuWidth = this.MeasureMenuItems(selectedMenu.subMenuItems);
                var menuWidth = Math.max(mainMenuWidth, subMenuWidth);
                if (menuWidth > renderWidth) {
                    var ratio = renderWidth / menuWidth;
                    this.font.Size = ratio * this.font.Size;
                    this.menuXSpacing = 8;
                }
                //if (renderWidth != this.prevRenderWidth || renderHeight != this.prevRenderHeight)
                //{
                var canvasContext = Web.Renderer.GetNewCanvasAndContext(renderWidth, renderHeight);
                this.menuCanvas = canvasContext.canvas;
                this.menuContext = canvasContext.context;
                this.prevRenderWidth = renderWidth;
                this.prevRenderHeight = renderHeight;
                // Render menu once
                var y = this.startY;
                this.RenderMenuItems(renderWidth, this.menuItems, y, this.selectedMenuIndex, false);
                y += this.font.Size;
                this.RenderMenuItems(renderWidth, selectedMenu.subMenuItems, y, this.selectedSubMenuIndex, false);
                //}
            };
            Menu.prototype.MeasureMenuItems = function (menuItems) {
                var width = 0;
                for (var iMenu = 0; iMenu < menuItems.length; iMenu++) {
                    var menuItem = menuItems[iMenu];
                    width += Web.Renderer.MeasureText(menuItem.menuText, this.font).Width;
                }
                width += (this.menuXSpacing * (menuItems.length - 1));
                return width;
            };
            Menu.prototype.HitTest = function (width, height, mouseEvent) {
                if (!Web.SetupControl.SlideshowRunning && this.menuItems.length > 0) {
                    var mousePoint = Web.Renderer.MouseToAutoDrawing(this);
                    var y = this.startY;
                    var hitMenu = this.HitTestMenuItems(mousePoint, width, this.menuItems, y);
                    if (hitMenu) {
                        return true;
                    }
                    var selectedMenu = this.menuItems[this.selectedMenuIndex];
                    y += this.font.Size;
                    hitMenu = this.HitTestMenuItems(mousePoint, width, selectedMenu.subMenuItems, y);
                    if (hitMenu) {
                        return true;
                    }
                }
                return false;
            };
            Menu.prototype.HitTestMenuItems = function (mousePoint, width, menuItems, menuY) {
                var menuWidth = this.MeasureMenuItems(menuItems);
                var runningX = (width * .5) - (menuWidth * .5);
                for (var iMenu = 0; iMenu < menuItems.length; iMenu++) {
                    var menuItem = menuItems[iMenu];
                    var textWidth = Web.Renderer.MeasureText(menuItem.menuText, this.font).Width;
                    this.hitTestRectangle.X = runningX;
                    this.hitTestRectangle.Y = menuY;
                    this.hitTestRectangle.Width = textWidth;
                    this.hitTestRectangle.Height = this.font.Size;
                    if (this.hitTestRectangle.PointInside(mousePoint.x, mousePoint.y)) {
                        Web.Renderer.FillRectangle(this.hitTestRectangle, Web.Renderer.HighlightColor);
                        if (Web.Renderer.MouseClicked) {
                            var nrOfSubMenus = menuItem.subMenuItems.length;
                            if (nrOfSubMenus > 0) {
                                var subMenu = menuItem.subMenuItems[0];
                                this.SetSelectedMenu(subMenu);
                                subMenu.clickedMenu(subMenu);
                                return true;
                            }
                            else {
                                menuItem.clickedMenu(menuItem);
                                this.SetSelectedMenu(menuItem);
                            }
                        }
                    }
                    runningX += textWidth;
                    runningX += this.menuXSpacing;
                }
                return false;
            };
            return Menu;
        }(Web.AutoDrawingBase));
        Web.Menu = Menu;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="AutoDrawingBase.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Clock = /** @class */ (function (_super) {
            __extends(Clock, _super);
            function Clock(requirement, radius, positionX, positionY, getBackgroundColor, getHighlightColor, getHandColor, getSecondsHandColor, getRingColor, getCenterColor, getDivisionColor, getSubDivisionColor, positionOnSideOf) {
                var _this = _super.call(this, radius * 2, requirement) || this;
                _this.gradientPoint1 = new Web.Point(0, 0);
                _this.gradientPoint2 = new Web.Point(0, 0);
                _this.prevBackgroundRadius = 0;
                _this.radius = radius;
                _this.centerX = positionX + radius;
                _this.centerY = positionY + radius;
                _this.offsetX = positionX;
                _this.offsetY = positionY;
                _this.getBackgroundColor = getBackgroundColor;
                _this.getHighlightColor = getHighlightColor;
                _this.getHandColor = getHandColor;
                _this.getSecondsHandColor = getSecondsHandColor;
                _this.getRingColor = getRingColor;
                _this.getCenterColor = getCenterColor;
                _this.getDivisionColor = getDivisionColor;
                _this.getSubDivisionColor = getSubDivisionColor;
                _this.positionOnSideOf = positionOnSideOf;
                return _this;
            }
            Clock.prototype.Render = function (width, height) {
                this.backgroundColor = this.getBackgroundColor();
                this.highlightColor = this.getHighlightColor();
                this.handColor = this.getHandColor();
                this.secondsHandColor = this.getSecondsHandColor();
                this.ringColor = this.getRingColor();
                this.centerColor = this.getCenterColor();
                this.divisionColor = this.getDivisionColor();
                this.subDivisionColor = this.getSubDivisionColor();
                var transparentColor = this.highlightColor.Clone();
                transparentColor.Alpha = 0;
                var windowSize = Math.min(Web.Renderer.Width, Web.Renderer.Height);
                var maxRadius = windowSize * .05;
                var radius = (this.radius > maxRadius) ? maxRadius : this.radius;
                if (radius > 15) {
                    if (this.prevBackgroundRadius != radius) {
                        var backgroundSize = 2 + 2 * radius;
                        var canvasContext = Web.Renderer.GetNewCanvasAndContext(backgroundSize, backgroundSize);
                        this.backgroundCanvas = canvasContext.canvas;
                        this.backgroundContext = canvasContext.context;
                        this.DrawBackground(radius);
                        this.prevBackgroundRadius = radius;
                    }
                    var centerX = this.centerX;
                    var centerY = this.centerY;
                    if (this.positionOnSideOf == Web.GraphDocking.Bottom) {
                        var dimensions = Web.Renderer.DimensionsOf(this.positionOnSideOf);
                        centerY = dimensions.Y;
                        centerX = dimensions.Width - radius - this.offsetX;
                    }
                    Web.Renderer.DrawCanvas(this.backgroundCanvas, centerX - radius, centerY - radius);
                    var hourOuterRadius = radius - 1;
                    // Seconds hand
                    var now = new Date();
                    var seconds = now.getSeconds();
                    var secondsAngle = seconds * 6;
                    secondsAngle -= 90;
                    var secondsPoint = Web.Renderer.AngleToPositionCW(secondsAngle, hourOuterRadius, centerX, centerY);
                    Web.Renderer.DrawLine(secondsPoint.x, secondsPoint.y, centerX, centerY, 1, this.secondsHandColor);
                    // Minutes hand
                    var minutes = now.getMinutes();
                    var minutesAngle = minutes * 6;
                    minutesAngle -= 90;
                    var minutesPoint = Web.Renderer.AngleToPositionCW(minutesAngle, hourOuterRadius - 2, centerX, centerY);
                    Web.Renderer.DrawLine(minutesPoint.x, minutesPoint.y, centerX, centerY, 2, this.handColor);
                    // Hour hand.
                    var hours = now.getHours();
                    if (hours >= 12) {
                        hours -= 12;
                    }
                    hours += minutes / 60;
                    hourOuterRadius -= (radius * .5);
                    var hoursAngle = hours * 30;
                    hoursAngle -= 90;
                    var hoursPoint = Web.Renderer.AngleToPositionCW(hoursAngle, hourOuterRadius, centerX, centerY);
                    Web.Renderer.DrawLine(hoursPoint.x, hoursPoint.y, centerX, centerY, 2, this.handColor);
                    // Center
                    Web.Renderer.FillCircle(centerX, centerY, 5, this.centerColor);
                    Web.Renderer.DrawCircle(centerX, centerY, 5, 1, Web.Renderer.ColorBlack);
                    // Gloss
                    var glossCenterY = centerY - radius / 3;
                    var glossRadiusX = radius * .85;
                    var glossRadiusY = radius - (centerY - glossCenterY);
                    this.gradientPoint1.x = centerX;
                    this.gradientPoint1.y = glossCenterY - glossRadiusY;
                    this.gradientPoint2.x = centerX;
                    this.gradientPoint2.y = glossCenterY + glossRadiusY;
                    Web.Renderer.FillEllipseGradient(centerX, glossCenterY, glossRadiusX, glossRadiusY, this.highlightColor, transparentColor, this.gradientPoint1, this.gradientPoint2);
                }
            };
            Clock.prototype.DrawBackground = function (radius) {
                var center = radius + 1;
                Web.Renderer.FillCircle(center, center, radius, this.backgroundColor, this.backgroundContext);
                Web.Renderer.DrawCircle(center, center, radius, 1, this.ringColor, this.backgroundContext);
                // Draw Divisions
                var hourStep = 30; //    360/12
                var hourAngle = -60; // Circle starts at 3'o clock, -90 is hour 12, hour 1 is 360/12 more
                var hourOuterRadius = radius - 1;
                var hourInnerRadius = hourOuterRadius - 3;
                for (var iHour = 1; iHour <= 12; iHour++) {
                    var hourOuterPoint = Web.Renderer.AngleToPositionCW(hourAngle, hourOuterRadius, center, center);
                    var hourInnerPoint = Web.Renderer.AngleToPositionCW(hourAngle, hourInnerRadius, center, center);
                    Web.Renderer.DrawLine(hourOuterPoint.x, hourOuterPoint.y, hourInnerPoint.x, hourInnerPoint.y, 1, this.divisionColor, this.backgroundContext);
                    for (var iSecond = 1; iSecond <= 4; iSecond++) {
                        var hour = iHour - 1;
                        var secondAngle = -90 + (hour * hourStep) + (iSecond * 6);
                        var secondOuterPoint = Web.Renderer.AngleToPositionCW(secondAngle, hourOuterRadius, center, center);
                        var secondInnerPoint = Web.Renderer.AngleToPositionCW(secondAngle, hourInnerRadius, center, center);
                        Web.Renderer.DrawLine(secondOuterPoint.x, secondOuterPoint.y, secondInnerPoint.x, secondInnerPoint.y, 1, this.subDivisionColor, this.backgroundContext);
                    }
                    hourAngle += hourStep;
                }
            };
            return Clock;
        }(Web.AutoDrawingBase));
        Web.Clock = Clock;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="AutoDrawingBase.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Title = /** @class */ (function (_super) {
            __extends(Title, _super);
            function Title(size, requirement, getColor, text, getFont, filled, marginY, spacing, speed) {
                var _this = _super.call(this, size, requirement) || this;
                _this.marginY = 0;
                _this.smallerFontSet = false;
                _this.startAlpha = .35;
                _this.animationProgress = 1;
                _this.animationStopped = false;
                _this.maxSize = size;
                _this.getColor = getColor;
                _this.text = text;
                _this.getFont = getFont;
                _this.font = getFont();
                _this.fontSizeRatio = (size != 0) ? _this.font.Size / size : 5;
                _this.filled = filled;
                _this.marginY = marginY;
                _this.spacing = spacing;
                _this.speed = speed;
                return _this;
            }
            Object.defineProperty(Title.prototype, "Text", {
                get: function () { return this.text; },
                set: function (value) {
                    this.text = value;
                    this.animationProgress = 1;
                    this.animationStopped = false;
                },
                enumerable: true,
                configurable: true
            });
            Title.prototype.MeasureDock = function (otherSize) {
                if (this.Dock == Web.GraphDocking.Bottom || this.Dock == Web.GraphDocking.Top) {
                    var maxHeight = Web.Renderer.Height * .05;
                    if (maxHeight < this.maxSize) {
                        this.font.Size = maxHeight * this.fontSizeRatio;
                        this.smallerFontSet = true;
                        return maxHeight;
                    }
                    else if (this.smallerFontSet) {
                        this.smallerFontSet = false;
                    }
                }
                else if (this.Dock == Web.GraphDocking.Left || this.Dock == Web.GraphDocking.Right) {
                    var maxWidth = Web.Renderer.Width * .05;
                    if (maxWidth < this.maxSize) {
                        this.font.Size = maxWidth * this.fontSizeRatio;
                        this.smallerFontSet = true;
                        return maxWidth;
                    }
                    else if (this.smallerFontSet) {
                        this.smallerFontSet = false;
                    }
                }
                return this.marginY + this.font.Size + this.marginY;
            };
            Title.prototype.Render = function (width, height) {
                this.font = this.getFont();
                var centerX = width * .5;
                var centerY = height * .5;
                var leftX = centerX;
                var rightX = centerX;
                var leftIndex;
                var rightIndex;
                var color = this.getColor();
                color.Alpha = Web.Renderer.Interpolate(this.startAlpha, 1, this.animationProgress);
                var evenNumberOfLetters = (this.text.length % 2 == 0);
                if (evenNumberOfLetters) {
                    rightIndex = this.text.length / 2;
                    leftIndex = rightIndex - 1;
                }
                else {
                    var centerIndex = (this.text.length + 1) / 2;
                    var centerLetter = this.text[centerIndex];
                    var centerLetterHalfWidth = .5 * Web.Renderer.MeasureText(centerLetter, this.font).Width;
                    Web.Renderer.DrawText(centerLetter, this.font, centerX - centerLetterHalfWidth, centerY, color, this.filled, Web.TextBaseline.middle);
                    leftX -= centerLetterHalfWidth;
                    rightX += centerLetterHalfWidth;
                    leftIndex = centerIndex - 1;
                    rightIndex = centerIndex + 1;
                }
                var spacing = Web.Renderer.Interpolate(0, this.spacing, this.animationProgress);
                for (var iLeft = leftIndex; iLeft >= 0; iLeft--) {
                    if (iLeft == leftIndex && evenNumberOfLetters) {
                        leftX -= (spacing * .5);
                    }
                    else {
                        leftX -= spacing;
                    }
                    var leftLetter = this.text[iLeft];
                    var leftWidth = Web.Renderer.MeasureText(leftLetter, this.font).Width;
                    leftX -= leftWidth;
                    Web.Renderer.DrawText(leftLetter, this.font, leftX, centerY, color, this.filled, Web.TextBaseline.middle);
                }
                for (var iRight = rightIndex; iRight < this.text.length; iRight++) {
                    if (iRight == rightIndex && evenNumberOfLetters) {
                        rightX += (spacing * .5);
                    }
                    else {
                        rightX += spacing;
                    }
                    var rightLetter = this.text[iRight];
                    var rightWidth = Web.Renderer.MeasureText(rightLetter, this.font).Width;
                    Web.Renderer.DrawText(rightLetter, this.font, rightX, centerY, color, this.filled, Web.TextBaseline.middle);
                    rightX += rightWidth;
                }
                // Stop animation when going off screen
                if (leftX < 0 || rightX > width) {
                    this.animationProgress += this.speed;
                    this.animationStopped = true;
                }
                else if (!this.animationStopped) {
                    var speed = this.speed - Web.Renderer.InterpolateXFastSlow(this.speed, 0, this.animationProgress);
                    this.animationProgress -= speed;
                    if (this.animationProgress < 0) {
                        this.animationProgress = 0;
                    }
                }
            };
            return Title;
        }(Web.AutoDrawingBase));
        Web.Title = Title;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="AutoDrawingBase.ts"/>

var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var MouseClicks = /** @class */ (function (_super) {
            __extends(MouseClicks, _super);
            function MouseClicks(size, requirement, color, speed) {
                var _this = _super.call(this, size) || this;
                _this.clickedPoints = [];
                _this.animationProgress = [];
                _this.clickMaxRadius = 100;
                _this.color = color;
                _this.speed = speed;
                return _this;
            }
            Object.defineProperty(MouseClicks.prototype, "Color", {
                get: function () { return this.color; },
                set: function (value) { this.color = value; },
                enumerable: true,
                configurable: true
            });
            MouseClicks.prototype.Render = function (width, height) {
                //this.speed * Renderer.RenderDelta;
                var animatingColor = this.color.Clone();
                for (var iPoint = 0; iPoint < this.clickedPoints.length; iPoint++) {
                    var centerPoint = this.clickedPoints[iPoint];
                    var animProgress = this.animationProgress[iPoint];
                    var radius = Web.Renderer.Interpolate(0, this.clickMaxRadius, animProgress);
                    animatingColor.Alpha = Web.Renderer.Interpolate(1, 0, animProgress);
                    Web.Renderer.DrawCircle(centerPoint.x, centerPoint.y, radius, 2, animatingColor);
                    animProgress -= this.speed;
                    if (animProgress < 0) {
                        this.clickedPoints.splice(iPoint, 1);
                        this.animationProgress.splice(iPoint, 1);
                        iPoint--; // the next index will be the same as this one, since this one is deleted.
                    }
                    else {
                        this.animationProgress[iPoint] = animProgress;
                    }
                }
            };
            MouseClicks.prototype.HitTest = function (width, height, mouseEvent) {
                if (mouseEvent.buttons > 0 && mouseEvent.which == 1) {
                    var newPoint = new Web.Point(Web.Renderer.MouseX, Web.Renderer.MouseY);
                    if (this.clickedPoints.length == 0 || !this.clickedPoints[this.clickedPoints.length - 1].Equals(newPoint)) {
                        // Start a animation, when the animationProgress reaches 0 the corresponding point and progress are removed.
                        this.clickedPoints.push(newPoint);
                        this.animationProgress.push(1);
                    }
                }
                return false;
            };
            return MouseClicks;
        }(Web.AutoDrawingBase));
        Web.MouseClicks = MouseClicks;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="AutoDrawingBase.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var ScrollImage = /** @class */ (function (_super) {
            __extends(ScrollImage, _super);
            function ScrollImage(size, requirement, imagePath, yCenterPositionPerctange, speed) {
                var _this = _super.call(this, size, requirement) || this;
                _this.imageWidth = 0;
                _this.xStart = 0;
                _this.yCenterPositionPerctange = (yCenterPositionPerctange >= 0 && yCenterPositionPerctange <= 1) ? yCenterPositionPerctange : .5;
                _this.speed = speed;
                _this.image = new Image();
                _this.image.onload = function () { return _this.ImageReady(); };
                _this.image.src = imagePath;
                return _this;
            }
            ScrollImage.prototype.ImageReady = function () {
                this.imageWidth = this.image.width;
            };
            ScrollImage.prototype.Render = function (width, height) {
                // Image loaded => imageWidth > 0
                if (this.imageWidth > 0) {
                    var centerY = height * this.yCenterPositionPerctange;
                    var halfWidth = this.imageWidth * .5;
                    var yPosition = centerY - halfWidth;
                    var x = width - this.xStart;
                    Web.Renderer.DrawImage(this.image, x, yPosition);
                    var xStep = this.speed * Web.Renderer.RenderDelta;
                    this.xStart += xStep;
                    x = width - this.xStart;
                    if (x + this.imageWidth < 0) {
                        this.xStart = 0; // Scroll went off screen and can restart
                    }
                }
            };
            return ScrollImage;
        }(Web.AutoDrawingBase));
        Web.ScrollImage = ScrollImage;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="AutoDrawingBase.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var ScrollText = /** @class */ (function (_super) {
            __extends(ScrollText, _super);
            function ScrollText(size, requirement, getColor, text, getFont, filled, yPositionPercentage, speed) {
                var _this = _super.call(this, size, requirement) || this;
                _this.smallerFontSet = false;
                _this.xStart = 0;
                _this.maxSize = size;
                _this.getColor = getColor;
                _this.text = text;
                _this.getFont = getFont;
                _this.font = getFont();
                _this.originalFontSize = _this.font.Size;
                _this.fontSizeRatio = (size != 0) ? _this.font.Size / size : 5;
                _this.filled = filled;
                _this.yPositionPercentage = (yPositionPercentage >= 0 && yPositionPercentage <= 1) ? yPositionPercentage : .5;
                _this.speed = speed;
                return _this;
            }
            ScrollText.prototype.MeasureDock = function (otherSize) {
                if (this.Dock == Web.GraphDocking.Bottom || this.Dock == Web.GraphDocking.Top) {
                    var maxHeight = Web.Renderer.Height * .05;
                    if (maxHeight < this.maxSize) {
                        this.font.Size = maxHeight * this.fontSizeRatio;
                        this.smallerFontSet = true;
                        return maxHeight;
                    }
                    else if (this.smallerFontSet) {
                        this.font.Size = this.originalFontSize;
                        this.smallerFontSet = false;
                    }
                }
                else if (this.Dock == Web.GraphDocking.Left || this.Dock == Web.GraphDocking.Right) {
                    var maxWidth = Web.Renderer.Width * .05;
                    if (maxWidth < this.maxSize) {
                        this.font.Size = maxWidth * this.fontSizeRatio;
                        this.smallerFontSet = true;
                        return maxWidth;
                    }
                    else if (this.smallerFontSet) {
                        this.font.Size = this.originalFontSize;
                        this.smallerFontSet = false;
                    }
                }
                return this.font.Size;
            };
            ScrollText.prototype.Render = function (width, height) {
                var x = width - this.xStart;
                var y = height * .5;
                var color = this.getColor();
                var textWidth = Web.Renderer.MeasureText(this.text, this.font).Width;
                Web.Renderer.DrawText(this.text, this.font, x, y, color, this.filled, Web.TextBaseline.middle);
                var xStep = this.speed * Web.Renderer.RenderDelta;
                this.xStart += xStep;
                if (x + textWidth < 0) {
                    this.xStart = 0; // Scroll went off screen and can restart
                }
            };
            return ScrollText;
        }(Web.AutoDrawingBase));
        Web.ScrollText = ScrollText;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));







var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var ArrayHelper = /** @class */ (function () {
            function ArrayHelper() {
            }
            ArrayHelper.Sum = function (values) {
                var total = 0;
                for (var iValue = 0; iValue < values.length; iValue++) {
                    total += values[iValue];
                }
                return total;
            };
            ArrayHelper.SumOf = function (values, getValue) {
                var total = 0;
                for (var iValue = 0; iValue < values.length; iValue++) {
                    total += getValue(values[iValue]);
                }
                return total;
            };
            ArrayHelper.Any = function (values, check) {
                for (var iValue = 0; iValue < values.length; iValue++) {
                    if (check(values[iValue])) {
                        return true;
                    }
                }
                return false;
            };
            ArrayHelper.Reverse = function (values) {
                var returnValues = [];
                for (var iValue = values.length - 1; iValue >= 0; iValue--) {
                    returnValues.push(values[iValue]);
                }
                return returnValues;
            };
            ArrayHelper.Copy = function (values) {
                var returnValues = [];
                for (var iValue = 0; iValue < values.length; iValue++) {
                    returnValues.push(values[iValue]);
                }
                return returnValues;
            };
            return ArrayHelper;
        }());
        Web.ArrayHelper = ArrayHelper;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var QuickSort = /** @class */ (function () {
            function QuickSort() {
            }
            QuickSort.Sort = function (array, less) {
                function Swap(i, j) {
                    var t = array[i];
                    array[i] = array[j];
                    array[j] = t;
                }
                function Quicksort(left, right) {
                    if (left < right) {
                        var pivot = array[left + Math.floor((right - right) / 2)];
                        var left_new = left;
                        var right_new = right;
                        do {
                            while (less(array[left_new], pivot)) {
                                left_new += 1;
                            }
                            while (less(pivot, array[right_new])) {
                                right_new -= 1;
                            }
                            if (left_new <= right_new) {
                                Swap(left_new, right_new);
                                left_new += 1;
                                right_new -= 1;
                            }
                        } while (left_new <= right_new);
                        Quicksort(left, right_new);
                        Quicksort(left_new, right);
                    }
                }
                Quicksort(0, array.length - 1);
            };
            QuickSort.SortDictionaryKeys = function (dictionary, less) {
                function Swap(i, j) {
                    var tkey = keys[i];
                    keys[i] = keys[j];
                    keys[j] = tkey;
                    var tvalue = values[i];
                    values[i] = values[j];
                    values[j] = tvalue;
                }
                function Quicksort(left, right) {
                    if (left < right) {
                        var pivot = keys[left + Math.floor((right - right) / 2)];
                        var left_new = left;
                        var right_new = right;
                        do {
                            while (less(keys[left_new], pivot)) {
                                left_new += 1;
                            }
                            while (less(pivot, keys[right_new])) {
                                right_new -= 1;
                            }
                            if (left_new <= right_new) {
                                Swap(left_new, right_new);
                                left_new += 1;
                                right_new -= 1;
                            }
                        } while (left_new <= right_new);
                        Quicksort(left, right_new);
                        Quicksort(left_new, right);
                    }
                }
                var keys = dictionary.Keys;
                var values = dictionary.Values;
                Quicksort(0, keys.length - 1);
            };
            QuickSort.SortDictionaryValues = function (dictionary, less) {
                function Swap(i, j) {
                    var tkey = keys[i];
                    keys[i] = keys[j];
                    keys[j] = tkey;
                    var tvalue = values[i];
                    values[i] = values[j];
                    values[j] = tvalue;
                }
                function Quicksort(left, right) {
                    if (left < right) {
                        var pivot = values[left + Math.floor((right - right) / 2)];
                        var left_new = left;
                        var right_new = right;
                        do {
                            while (less(values[left_new], pivot)) {
                                left_new += 1;
                            }
                            while (less(pivot, values[right_new])) {
                                right_new -= 1;
                            }
                            if (left_new <= right_new) {
                                Swap(left_new, right_new);
                                left_new += 1;
                                right_new -= 1;
                            }
                        } while (left_new <= right_new);
                        Quicksort(left, right_new);
                        Quicksort(left_new, right);
                    }
                }
                var keys = dictionary.Keys;
                var values = dictionary.Values;
                Quicksort(0, values.length - 1);
            };
            return QuickSort;
        }());
        Web.QuickSort = QuickSort;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="ArrayHelper.ts" />
/// <reference path="QuickSort.ts" />
/// <reference path="Interfaces/Action.ts"/>
var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var List = /** @class */ (function () {
            function List() {
                this.values = [];
            }
            Object.defineProperty(List.prototype, "Count", {
                get: function () { return this.values.length; },
                enumerable: true,
                configurable: true
            });
            List.prototype.ToArray = function () {
                return Web.ArrayHelper.Copy(this.values);
            };
            List.prototype.Index = function (i) {
                return (i >= 0 && i < this.values.length) ? this.values[i] : null;
            };
            List.prototype.Add = function (value) {
                this.values.push(value);
            };
            List.prototype.AddRange = function (values) {
                for (var iValue = 0; iValue < values.length; iValue++) {
                    this.values.push(values[iValue]);
                }
            };
            List.prototype.Remove = function (value) {
                var index = this.values.indexOf(value, 0);
                if (index >= 0) {
                    this.values.splice(index, 1);
                }
            };
            List.prototype.Last = function () {
                return (this.values.length > 0) ? this.values[this.values.length - 1] : null;
            };
            List.prototype.Clear = function () {
                this.values = [];
            };
            List.prototype.Contains = function (value) {
                var index = this.values.indexOf(value, 0);
                return (index >= 0);
            };
            List.prototype.Sum = function (selector) {
                var total = 0;
                for (var iValue = 0; iValue < this.values.length; iValue++) {
                    total += selector(this.values[iValue]);
                }
                return total;
            };
            List.prototype.Sort = function (less) {
                Web.QuickSort.Sort(this.values, less);
            };
            List.prototype.Exists = function (check) {
                for (var iValue = 0; iValue < this.values.length; iValue++) {
                    var value = this.values[iValue];
                    if (check(value)) {
                        return true;
                    }
                }
                return false;
            };
            List.prototype.First = function (check) {
                for (var iValue = 0; iValue < this.values.length; iValue++) {
                    var value = this.values[iValue];
                    if (check(value)) {
                        return value;
                    }
                }
                return null;
            };
            List.prototype.Where = function (check) {
                var matchedValues = [];
                for (var iValue = 0; iValue < this.values.length; iValue++) {
                    var value = this.values[iValue];
                    if (check(value)) {
                        matchedValues.push(value);
                    }
                }
                return matchedValues;
            };
            List.prototype.Any = function (check) {
                for (var iValue = 0; iValue < this.values.length; iValue++) {
                    var value = this.values[iValue];
                    if (check(value)) {
                        return true;
                    }
                }
                return false;
            };
            List.prototype.ForEach = function (action) {
                for (var iValue = 0; iValue < this.values.length; iValue++) {
                    var value = this.values[iValue];
                    action(value);
                }
            };
            return List;
        }());
        Web.List = List;

        var Vector = /** @class */ (function () {
            function Vector(x, y) {
                this.DegreesToRadians = Math.PI / 180.0;
                this.x = x;
                this.y = y;
            }
            Vector.prototype.Add = function (v) {
                this.x = this.x + v.x;
                this.y = this.y + v.y;
            };
            Vector.Add = function (v1, v2) {
                return new Vector(v1.x + v2.x, v1.y + v2.y);
            };
            Vector.prototype.Subtract = function (v) {
                this.x = this.x - v.x;
                this.y = this.y - v.y;
            };
            Vector.Subtract = function (v1, v2) {
                return new Vector(v1.x - v2.x, v1.y - v2.y);
            };
            Vector.prototype.Multiply = function (n) {
                this.x = this.x * n;
                this.y = this.y * n;
            };
            Vector.Mulitply = function (v, n) {
                return new Vector(v.x * n, v.y * n);
            };
            Vector.prototype.Divide = function (n) {
                this.x = this.x / n;
                this.y = this.y / n;
            };
            Vector.prototype.Magnitude = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            };
            Vector.prototype.Normalize = function () {
                var m = this.Magnitude();
                if (m != 0) {
                    this.Divide(m);
                }
            };
            Vector.Normalize = function (v) {
                var m = v.Magnitude();
                if (m != 0) {
                    return new Vector(v.x / m, v.y / m);
                }
                return v;
            };
            Vector.prototype.Limit = function (max) {
                var m = this.Magnitude();
                if (m > max) {
                    this.Normalize();
                    this.Multiply(max);
                }
            };
            Vector.Equals = function (a, b) {
                return a.x == b.x && a.y == b.y;
            };
            Vector.prototype.Rotate = function (degrees) {
                this.RotateRadians(degrees * this.DegreesToRadians);
            };
            Vector.prototype.RotateRadians = function (radians) {
                var cosAngle = Math.cos(radians);
                var sinAngle = Math.sin(radians);
                this.x = cosAngle * this.x - sinAngle * this.y;
                this.y = sinAngle * this.x + cosAngle * this.y;
            };
            Vector.DotProduct = function (v1, v2) {
                return (v1.x * v2.x + v1.y * v2.y);
            };
            Vector.prototype.DotProduct = function (other) {
                return Vector.DotProduct(this, other);
            };
            Vector.Angle = function (v1, v2) {
                if (Vector.Equals(v1, v2)) {
                    return 0;
                }
                return Math.acos(Math.min(1.0, Vector.Normalize(v1).DotProduct(Vector.Normalize(v2))));
            };
            Vector.prototype.Angle = function (other) {
                return Vector.Angle(this, other);
            };
            // Linear interpolation, widely known as Lerp.
            Vector.Lerp = function (start, end, percent) {
                var endMinusStart = Vector.Subtract(end, start);
                var multiplied = Vector.Mulitply(endMinusStart, percent);
                return Vector.Add(start, multiplied);
            };
            return Vector;
        }());
        Web.Vector = Vector;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));

var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var BackgroundImage = /** @class */ (function (_super) {
            __extends(BackgroundImage, _super);
            function BackgroundImage(size, requirement, imagePath, xPosition, yPosition) {
                var _this = _super.call(this, size, requirement) || this;
                _this.backgroundImage = null;
                _this.xPosition = xPosition;
                _this.yPosition = yPosition;
                _this.backgroundImage = new Image();
                _this.backgroundImage.src = imagePath;
                return _this;
            }
            BackgroundImage.prototype.Render = function (width, height) {
                if (this.backgroundImage.width > 0) {
                    var targetWidth = this.backgroundImage.width;
                    var targetHeight = this.backgroundImage.height;
                    var availableWidth = width - this.xPosition;
                    var availableHeight = height - this.yPosition;
                    if (targetWidth > availableWidth || targetHeight > availableHeight) {
                        var widthRatio = availableWidth / targetWidth;
                        var heightRatio = availableHeight / targetHeight;
                        var sizeRatio = Math.min(widthRatio, heightRatio);
                        targetWidth *= sizeRatio;
                        targetHeight *= sizeRatio;
                    }
                    Web.Renderer.DrawImageToSize(this.backgroundImage, this.xPosition, this.yPosition, targetWidth, targetHeight, 1);
                }
            };
            return BackgroundImage;
        }(Web.AutoDrawingBase));
        Web.BackgroundImage = BackgroundImage;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="AutoDrawingBase.ts"/>