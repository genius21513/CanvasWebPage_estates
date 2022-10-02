var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var Renderer = /** @class */ (function () {
            function Renderer() {
            }
            Object.defineProperty(Renderer, "Phi", {
                // Phi also known as the Golden Ratio
                get: function () {
                    return 1.6108;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "ColorBlack", {
                get: function () {
                    return Renderer.colorBlack.Clone();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "ColorWhite", {
                get: function () {
                    return Renderer.colorWhite.Clone();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "BackgroundColor", {
                get: function () {                    
                    return Renderer.themeManager.CurrentTheme.BackgroundColor;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "ThemeManager", {
                get: function () {
                    return Renderer.themeManager;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "HighlightColor", {
                get: function () {
                    return Renderer.highlightColor;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "Canvas", {
                get: function () {
                    return Renderer.canvas;
                },
                enumerable: true,
                configurable: true
            });
            Renderer.AddAutoDrawing = function (autoDrawing) {
                var dockSide;
                if (Renderer.drawingDictionary.ContainsKey(autoDrawing.Dock)) {
                    dockSide = Renderer.drawingDictionary.ValueOf(autoDrawing.Dock);
                }
                else {
                    dockSide = new Web.DockSide();
                    Renderer.drawingDictionary.Add(autoDrawing.Dock, dockSide);
                }
                var dockStack;
                if (!dockSide.Contains(autoDrawing.DockStack)) {
                    dockStack = dockSide.Add(autoDrawing.DockStack);
                    dockStack.AlignedToCenter = autoDrawing.AlignedToCenter;
                }
                else {
                    dockStack = dockSide.DockStackOf(autoDrawing.DockStack);
                }
                var dockLayer;
                if (!dockStack.Contains(autoDrawing.Layer)) {
                    dockLayer = dockStack.Add(autoDrawing.Layer);
                }
                else {
                    dockLayer = dockStack.DockLayerOf(autoDrawing.Layer);
                }
                dockLayer.AddAutoDrawing(autoDrawing);
            };
            Renderer.MousePointForControlInAutoDrawing = function (dock) {
                var mousePoint = new Web.Point(Renderer.MouseX, Renderer.MouseY);
                var dimensions = Renderer.DimensionsOf(dock);
                mousePoint.x = mousePoint.x - dimensions.X;
                mousePoint.y = mousePoint.y - dimensions.Y;
                return mousePoint;
            };
            Renderer.DimensionsOf = function (dock) {
                if (Renderer.drawingDictionary.ContainsKey(dock)) {
                    var dockSide = Renderer.drawingDictionary.ValueOf(dock);
                    return dockSide.Dimensions;
                }
                return new Web.Rectangle(0, 0, 0, 0);
            };
            Renderer.MouseToAutoDrawing = function (autoDrawing) {
                if (Renderer.drawingDictionary.ContainsKey(autoDrawing.Dock)) {
                    var dockSide = Renderer.drawingDictionary.ValueOf(autoDrawing.Dock);
                    if (dockSide.Contains(autoDrawing.DockStack)) {
                        var dockStack = dockSide.DockStackOf(autoDrawing.DockStack);
                        var dimensions = dockStack.Dimensions;
                        return new Web.Point(Renderer.MouseX - dimensions.X, Renderer.MouseY - dimensions.Y);
                    }
                }
                return new Web.Point(Renderer.MouseX, Renderer.MouseY);
            };
            Renderer.NextDockStack = function (autoDrawing) {
                var dockSide = Renderer.drawingDictionary.ValueOf(autoDrawing.Dock);
                if (dockSide != null) {
                    return dockSide.NextDockStack();
                }
                return 0;
            };
            Renderer.Initialize = function (document, window, canvas, themeManager) {                
                Renderer.document = document;
                Renderer.window = window;
                Renderer.canvas = canvas;
                Renderer.context = canvas.getContext("2d");
                Renderer.themeManager = themeManager;
                var numberKeys = Web.EnumHelper.GetValues(Web.GraphDocking);
                for (var iNumber = 0; iNumber < numberKeys.length; iNumber++) {
                    var nr = numberKeys[iNumber];
                    Renderer.drawingDictionary.Add(nr, new Web.DockSide());
                }
                canvas.addEventListener("mousedown", Renderer.MouseDown, false);
                canvas.addEventListener("mouseup", Renderer.MouseUp, false);
                canvas.addEventListener("mousemove", Renderer.MouseAction, false);
                canvas.addEventListener("touchstart", Renderer.TouchStart, false);
                canvas.addEventListener("touchmove", Renderer.TouchMove, false);
                canvas.addEventListener("touchend", Renderer.TouchEnd, false);
                var keyInfo = Renderer.KeyInfo;
                //window.addEventListener("keypress", keyInfo.EventKeyPress, false);
                window.addEventListener("keydown", keyInfo.EventKeyDown, false);
                window.addEventListener("keyup", keyInfo.EventKeyUp, false);
            };
            Renderer.PressSpecialKey = function (specialKey) {
                var key = Web.EnumHelper.GetName(Web.SpecialKey, specialKey);
                Renderer.KeyInfo.TestSpecialKey(key);
                Renderer.KeyInfo.TriggerKeyDown();
            };
            Renderer.PressKey = function (key) {
                if (key.length === 1) {
                    var keyInfo = Renderer.KeyInfo;
                    keyInfo.ClearKeys();
                    keyInfo.KeyChar = key;
                    keyInfo.KeyCode = key;
                    keyInfo.TriggerKeyDown();
                }
            };
            Object.defineProperty(Renderer, "MouseEvent", {
                get: function () {
                    return Renderer.mouseEvent;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "TouchEvent", {
                get: function () {
                    return Renderer.touchEvent;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "SwipingRight", {
                get: function () {
                    return Renderer.swipingRight;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "SwipingLeft", {
                get: function () {
                    return Renderer.swipingLeft;
                },
                enumerable: true,
                configurable: true
            });
            Renderer.MouseAction = function (mouseEvent) {
                Renderer.mouseEvent = mouseEvent;
                Renderer.mouseX = mouseEvent.pageX;
                Renderer.mouseY = mouseEvent.pageY;
                var ellapsed = Date.now() - Renderer.mouseDownTime;
                if (ellapsed > Renderer.mouseClickedTreshold) {
                    Renderer.mouseClicked = false;
                }
            };
            Renderer.TouchStart = function (touchEvent) {
                Renderer.touchEvent = touchEvent;
                Renderer.swipedLeft = false;
                Renderer.swipedRight = false;
                if (touchEvent.touches.length == 1) {
                    var touch = touchEvent.touches[0];
                    Renderer.touchStartX = touch.pageX;
                }
            };
            Renderer.TouchMove = function (touchEvent) {
                Renderer.touchEvent = touchEvent;
                if (touchEvent.touches.length == 1) {
                    var touch = touchEvent.touches[0];
                    var moveX = touch.pageX - Renderer.touchStartX;
                    if (moveX == 0) {
                        Renderer.swipingLeft = false;
                        Renderer.swipingRight = false;
                    }
                    else if (moveX < 0) {
                        Renderer.swipingLeft = false;
                        Renderer.swipingRight = true;
                    }
                    else {
                        Renderer.swipingLeft = true;
                        Renderer.swipingRight = false;
                    }
                }
            };
            Renderer.TouchEnd = function (touchEvent) {
                Renderer.touchEvent = touchEvent;
                Renderer.swipedLeft = Renderer.swipingLeft;
                Renderer.swipedRight = Renderer.swipingRight;
                Renderer.swipingLeft = false;
                Renderer.swipingRight = false;
            };
            Renderer.MouseUp = function (mouseEvent) {
                Renderer.mouseEvent = mouseEvent;
                Renderer.mouseX = mouseEvent.pageX;
                Renderer.mouseY = mouseEvent.pageY;
                var ellapsed = Date.now() - Renderer.mouseDownTime;
                if (ellapsed < Renderer.mouseClickedTreshold) {
                    Renderer.mouseClicked = true;
                }
                else {
                    Renderer.mouseClicked = false;
                }
                Renderer.firstMouseDown = true;
            };
            Renderer.MouseDown = function (mouseEvent) {
                if (Renderer.firstMouseDown) {
                    Renderer.mouseDownTime = Date.now();
                }
                Renderer.mouseEvent = mouseEvent;
                Renderer.mouseX = mouseEvent.pageX;
                Renderer.mouseY = mouseEvent.pageY;
                Renderer.mouseClicked = false;
                Renderer.firstMouseDown = false;
            };
            Object.defineProperty(Renderer, "MouseX", {
                get: function () {
                    return Renderer.mouseX;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "MouseY", {
                get: function () {
                    return Renderer.mouseY;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "MouseClicked", {
                get: function () {
                    return this.mouseClicked;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "Width", {
                get: function () {
                    return Renderer.width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "Height", {
                get: function () {
                    return Renderer.height;
                },
                enumerable: true,
                configurable: true
            });
            Renderer.ResizeCanvas = function (width, height) {
                Renderer.canvas.width = width;
                Renderer.canvas.height = height;
                Renderer.width = width;
                Renderer.height = height;
            };
            // Translates and clips the canvas so that any following drawing operations are done on this 'new' canvas, which is part of the big canvas
            Renderer.SetRenderTarget = function (dimensions) {
                var context = Renderer.context;
                // Save context (restored in EndDraw()).
                context.save();
                // Clip to the desired dimensions
                context.beginPath();
                context.rect(dimensions.X, dimensions.Y, dimensions.Width, dimensions.Height);
                context.clip();
                // Translate so that all following drawing operations are relative to the new clipping region.
                context.translate(dimensions.X, dimensions.Y);
            };
            Renderer.EndDraw = function () {
                Renderer.context.restore();
            };
            Renderer.GetFontByName = function (fontname) {
                return "normal normal 12px " + fontname;
            };
            Renderer.GetFontByNameAndSize = function (fontname, size) {
                return "normal normal " + size + "px " + fontname;
            };
            Renderer.GetFontByNameWeightSize = function (fontname, weight, size) {
                return "normal " + weight + " " + size + "px " + fontname;
            };
            Renderer.GetFontByNameStyleWeightSize = function (fontname, style, weight, size) {
                var fontStyle = Web.EnumHelper.GetName(Web.FontStyle, style);
                var fontWeight = Web.EnumHelper.GetName(Web.FontWeight, weight);
                return fontStyle + " " + fontWeight + " " + size + "px " + fontname;
            };
            Renderer.MeasureText = function (text, font) {
                var context = Renderer.context;
                context.font = font.FontString;
                return new Web.Size(context.measureText(text).width, font.Size);
            };
            Renderer.MeasureTextWidth = function (text, font) {
                var context = Renderer.context;
                context.font = font.FontString;
                return context.measureText(text).width;
            };
            Renderer.DrawText = function (text, font, x, y, color, filled, baseLine, textAlign, otherContext) {
                if (filled === void 0) { filled = true; }
                if (baseLine === void 0) { baseLine = Web.TextBaseline.top; }
                if (textAlign === void 0) { textAlign = Web.TextAlign.left; }
                if (otherContext === void 0) { otherContext = null; }
                var context = (otherContext == null) ? Renderer.context : otherContext;
                context.font = font.FontString;
                context.textAlign = Web.EnumHelper.GetName(Web.TextAlign, textAlign);
                context.textBaseline = Web.EnumHelper.GetName(Web.TextBaseline, baseLine);
                if (filled) {
                    context.fillStyle = color.Value;
                    context.fillText(text, x, y);
                }
                else {
                    context.strokeStyle = color.Value;
                    context.strokeText(text, x, y);
                }
            };
            Renderer.DrawTextMultiLine = function (text, font, x, y, w, h, color, filled, baseLine, textAlign, otherContext) {
                if (filled === void 0) { filled = true; }
                if (baseLine === void 0) { baseLine = Web.TextBaseline.top; }
                if (textAlign === void 0) { textAlign = Web.TextAlign.left; }
                if (otherContext === void 0) { otherContext = null; }
                var context = (otherContext == null) ? Renderer.context : otherContext;
                context.font = font.FontString;
                context.textAlign = Web.EnumHelper.GetName(Web.TextAlign, textAlign);
                context.textBaseline = Web.EnumHelper.GetName(Web.TextBaseline, baseLine);
                if (filled) {
                    context.fillStyle = color.Value;
                    // context.fillText(text, x, y);

                    //f-i add below lines
                    var lineHeight = Web.Renderer.MeasureText("M", font).Width * 1.5;
                    var lines = text.split("\n");
                    for (var i = 0; lines.length > 0 && i < lines.length; ++i) {
                        context.fillText(lines[i], x, y);
                        y += lineHeight;
                    }
                }
                else {
                    context.strokeStyle = color.Value;
                    context.strokeText(text, x, y);
                }
            };
            Renderer.DrawTextCenteredOnXAndY = function (text, font, x, y, color, baseLine, textAlign, fill, alpha) {
                if (baseLine === void 0) { baseLine = Web.TextBaseline.top; }
                if (textAlign === void 0) { textAlign = Web.TextAlign.left; }
                if (fill === void 0) { fill = true; }
                if (alpha === void 0) { alpha = 1; }
                var context = Renderer.context;
                context.font = font.FontString;
                var textWidth = context.measureText(text).width;
                x -= (textWidth * .5);
                var halfFontHeight = font.Size * .5;
                y -= halfFontHeight;
                context.font = font.FontString;
                context.textAlign = Web.EnumHelper.GetName(Web.TextAlign, textAlign);
                context.textBaseline = Web.EnumHelper.GetName(Web.TextBaseline, baseLine);
                if (fill) {
                    context.fillStyle = color.ValueWithNewAlpha(alpha);
                    context.fillText(text, x, y);
                }
                else {
                    context.strokeStyle = color.ValueWithNewAlpha(alpha);
                    context.strokeText(text, x, y);
                }
            };
            Renderer.DrawLine = function (x1, y1, x2, y2, lineWidth, color, otherContext) {
                if (otherContext === void 0) { otherContext = null; }
                var context = (otherContext == null) ? Renderer.context : otherContext;
                context.beginPath();
                context.moveTo(x1, y1);
                context.lineTo(x2, y2);
                context.lineWidth = lineWidth;
                context.strokeStyle = color.Value;
                context.stroke();
            };
            Renderer.DrawLines = function (points, color, lineWidth) {
                if (lineWidth === void 0) { lineWidth = 1; }
                var context = Renderer.context;
                context.beginPath();
                var firstPoint = points[0];
                context.moveTo(firstPoint.x, firstPoint.y);
                for (var iPoint = 1; iPoint < points.length; iPoint++) {
                    var point = points[iPoint];
                    context.lineTo(point.x, point.y);
                }
                context.lineWidth = lineWidth;
                context.strokeStyle = color.Value;
                context.stroke();
            };
            Renderer.DrawSine = function (xStart, xEnd, yAxis, yAmplitude, frequency, startAngle, nrOfSegments, color, lineWidth) {
                if (lineWidth === void 0) { lineWidth = 1; }
                if (frequency > 0 && nrOfSegments > 1) {
                    var context = Renderer.context;
                    context.beginPath();
                    var width = xEnd - xStart + 1;
                    var nrSegmentPerRotation = Math.floor(nrOfSegments / frequency);
                    var angleStep = Renderer.TwoPi / nrSegmentPerRotation;
                    var angle = Renderer.ToRadians * startAngle;
                    var x = xStart;
                    var xStep = width / (nrSegmentPerRotation * frequency);
                    var y = yAxis + yAmplitude * Math.sin(angle);
                    context.moveTo(x, y);
                    angle += angleStep;
                    x += xStep;
                    for (var segment = 0; segment < nrOfSegments; segment++) {
                        y = yAxis + yAmplitude * Math.sin(angle);
                        context.lineTo(x, y);
                        angle += angleStep;
                        x += xStep;
                    }
                    context.lineWidth = lineWidth;
                    context.strokeStyle = color.Value;
                    context.stroke();
                }
            };
            Renderer.DrawArea = function (x, y, width, height, color) {
                var context = Renderer.context;
                context.strokeStyle = color.Value;
                context.strokeRect(x, y, width, height);
            };
            Renderer.FillArea = function (x, y, width, height, color) {
                var context = Renderer.context;
                context.fillStyle = color.Value;
                context.fillRect(x, y, width, height);
            };
            Renderer.DrawRectangle = function (rectangle, color, lineWidth) {
                if (lineWidth === void 0) { lineWidth = 1; }
                var context = Renderer.context;
                context.lineWidth = lineWidth;
                context.strokeStyle = color.Value;
                context.strokeRect(rectangle.X, rectangle.Y, rectangle.Width, rectangle.Height);
            };
            Renderer.FillRectangle = function (rectangle, color) {
                var context = Renderer.context;
                context.fillStyle = color.Value;
                context.fillRect(rectangle.X, rectangle.Y, rectangle.Width, rectangle.Height);
            };
            Renderer.FillEllipseGradient = function (centerX, centerY, radiusX, radiusY, color1, color2, point1, point2) {
                var context = Renderer.context;
                context.save(); // save state
                context.beginPath();
                context.translate(centerX - radiusX, centerY - radiusY);
                context.scale(radiusX, radiusY);
                context.arc(1, 1, 1, 0, Renderer.TwoPi, false);
                context.restore(); // restore to original state
                var gradient = context.createLinearGradient(point1.x, point1.y, point2.x, point2.y);
                gradient.addColorStop(0, color1.Value);
                gradient.addColorStop(1, color2.Value);
                context.fillStyle = gradient;
                context.fill();
            };
            Renderer.FillEllipseGradientXY = function (centerX, centerY, radiusX, radiusY, color1, color2, x1, y1, x2, y2) {
                var context = Renderer.context;
                context.save(); // save state
                context.beginPath();
                context.translate(centerX - radiusX, centerY - radiusY);
                context.scale(radiusX, radiusY);
                context.arc(1, 1, 1, 0, Renderer.TwoPi, false);
                context.restore(); // restore to original state
                //var gradient = context.createLinearGradient(x1, y1, x2, y2);
                var gradient = context.createRadialGradient(x1, y1, radiusX, x2, y2, radiusY);
                gradient.addColorStop(0, color1.Value);
                gradient.addColorStop(1, color2.Value);
                context.fillStyle = gradient;
                context.fill();
            };
            Renderer.DrawCircle = function (centerX, centerY, radius, lineWidth, color, otherContext) {
                if (otherContext === void 0) { otherContext = null; }
                var context = (otherContext == null) ? Renderer.context : otherContext;
                context.beginPath();
                context.arc(centerX, centerY, radius, 0, Renderer.TwoPi, false);
                context.strokeStyle = color.Value;
                context.closePath();
                context.lineWidth = lineWidth;
                context.stroke();
            };
            Renderer.FillCircle = function (centerX, centerY, radius, color, otherContext) {
                if (otherContext === void 0) { otherContext = null; }
                var context = (otherContext == null) ? Renderer.context : otherContext;
                context.beginPath();
                context.arc(centerX, centerY, radius, 0, Renderer.TwoPi, false);
                context.fillStyle = color.Value;
                context.closePath();
                context.fill();
            };
            Renderer.DrawStar = function (centerX, centerY, innerRadius, outerRadius, lineWidth, color, angle) {
                var points = [];
                var innerAngle = angle + 180;
                points.push(Renderer.PointOnCircle(centerX, centerY, outerRadius, angle));
                points.push(Renderer.PointOnCircle(centerX, centerY, innerRadius, innerAngle + 216));
                points.push(Renderer.PointOnCircle(centerX, centerY, outerRadius, angle + 72));
                points.push(Renderer.PointOnCircle(centerX, centerY, innerRadius, innerAngle + 288));
                points.push(Renderer.PointOnCircle(centerX, centerY, outerRadius, angle + 144));
                points.push(Renderer.PointOnCircle(centerX, centerY, innerRadius, innerAngle));
                points.push(Renderer.PointOnCircle(centerX, centerY, outerRadius, angle + 216));
                points.push(Renderer.PointOnCircle(centerX, centerY, innerRadius, innerAngle + 72));
                points.push(Renderer.PointOnCircle(centerX, centerY, outerRadius, angle + 288));
                points.push(Renderer.PointOnCircle(centerX, centerY, innerRadius, innerAngle + 144));
                Renderer.DrawPolygon(points, color, lineWidth);
            };
            Renderer.FillTriangleInCircle = function (centerX, centerY, radius, color, angle) {
                var points = [];
                points.push(Renderer.PointOnCircle(centerX, centerY, radius, angle));
                points.push(Renderer.PointOnCircle(centerX, centerY, radius, angle + 120));
                points.push(Renderer.PointOnCircle(centerX, centerY, radius, angle + 240));
                this.FillPolygon(points, color);
            };
            Renderer.DrawTriangleInCircle = function (centerX, centerY, radius, lineWidth, color, angle) {
                var point1 = Renderer.PointOnCircle(centerX, centerY, radius, angle);
                var point2 = Renderer.PointOnCircle(centerX, centerY, radius, angle + 120);
                var point3 = Renderer.PointOnCircle(centerX, centerY, radius, angle + 240);
                this.DrawLine(point1.x, point1.y, point2.x, point2.y, lineWidth, color);
                this.DrawLine(point2.x, point2.y, point3.x, point3.y, lineWidth, color);
                this.DrawLine(point3.x, point3.y, point1.x, point1.y, lineWidth, color);
            };
            Renderer.DrawTriangleMine = function (centerX, centerY, circleRadius, spikeRadius, spikeAngle, lineWidth, color, angle) {
                var trianglePoint1 = Renderer.PointOnCircle(centerX, centerY, spikeRadius, angle);
                var trianglePoint2 = Renderer.PointOnCircle(centerX, centerY, spikeRadius, angle + 120);
                var trianglePoint3 = Renderer.PointOnCircle(centerX, centerY, spikeRadius, angle + 240);
                var points = [];
                points.push(trianglePoint1);
                var nrOfPointsInSegment = 20;
                var startAngle = angle + spikeAngle * .5;
                var anglePerSegment = ((120 - spikeAngle) / nrOfPointsInSegment);
                for (var iPoint = 0; iPoint <= nrOfPointsInSegment; iPoint++) {
                    var pointAngle = startAngle + anglePerSegment * iPoint;
                    var circlePoint = Renderer.PointOnCircle(centerX, centerY, circleRadius, pointAngle);
                    points.push(circlePoint);
                }
                points.push(trianglePoint2);
                startAngle = angle + 120 + spikeAngle * .5;
                for (iPoint = 0; iPoint <= nrOfPointsInSegment; iPoint++) {
                    pointAngle = startAngle + anglePerSegment * iPoint;
                    circlePoint = Renderer.PointOnCircle(centerX, centerY, circleRadius, pointAngle);
                    points.push(circlePoint);
                }
                points.push(trianglePoint3);
                startAngle = angle + 240 + spikeAngle * .5;
                for (iPoint = 0; iPoint <= nrOfPointsInSegment; iPoint++) {
                    pointAngle = startAngle + anglePerSegment * iPoint;
                    circlePoint = Renderer.PointOnCircle(centerX, centerY, circleRadius, pointAngle);
                    points.push(circlePoint);
                }
                Renderer.DrawPolygon(points, color, lineWidth);
            };
            Renderer.DrawRoundedRectangle = function (x, y, width, height, radius, lineWidth, fill, stroke, fillColor, strokeColor) {
                var context = Renderer.context;
                context.fillStyle = fillColor.Value;
                context.strokeStyle = strokeColor.Value;
                context.beginPath();
                context.moveTo(x + radius, y);
                context.lineTo(x + width - radius, y);
                context.quadraticCurveTo(x + width, y, x + width, y + radius);
                context.lineTo(x + width, y + height - radius);
                context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                context.lineTo(x + radius, y + height);
                context.quadraticCurveTo(x, y + height, x, y + height - radius);
                context.lineTo(x, y + radius);
                context.quadraticCurveTo(x, y, x + radius, y);
                context.closePath();
                if (fill) {
                    context.fill();
                }
                if (stroke) {
                    context.lineWidth = lineWidth;
                    context.stroke();
                }
            };
            Renderer.FillRoundedRectangle = function (x, y, width, height, radius, fillColor) {
                var context = Renderer.context;
                context.fillStyle = fillColor.Value;
                context.beginPath();
                context.moveTo(x + radius, y);
                context.lineTo(x + width - radius, y);
                context.quadraticCurveTo(x + width, y, x + width, y + radius);
                context.lineTo(x + width, y + height - radius);
                context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                context.lineTo(x + radius, y + height);
                context.quadraticCurveTo(x, y + height, x, y + height - radius);
                context.lineTo(x, y + radius);
                context.quadraticCurveTo(x, y, x + radius, y);
                context.closePath();
                context.fill();
            };
            Renderer.PointInsidePolygon = function (point, polygonPoints) {
                for (var c = false, i = -1, l = polygonPoints.length, j = l - 1; ++i < l; j = i)
                    ((polygonPoints[i].y <= point.y && point.y < polygonPoints[j].y)
                        || (polygonPoints[j].y <= point.y && point.y < polygonPoints[i].y))
                        && (point.x < (polygonPoints[j].x - polygonPoints[i].x) * (point.y - polygonPoints[i].y) / (polygonPoints[j].y - polygonPoints[i].y) + polygonPoints[i].x) && (c = !c);
                return c;
            };
            Renderer.CircleCircumference = function (radius) {
                return radius * Renderer.TwoPi;
            };
            Renderer.ArcDistanceOfOneDegreeAngle = function (radius) {
                var circumference = Renderer.CircleCircumference(radius);
                return circumference / 360;
            };
            Renderer.PointOnCircle = function (centerX, centerY, radius, angle) {
                var alphaRadians = Renderer.ToRadians * angle;
                var pointX = centerX + (radius * Math.cos(alphaRadians));
                var pointY = centerY - (radius * Math.sin(alphaRadians));
                return new Web.Point(pointX, pointY);
            };
            Renderer.CircleSegmentPoints = function (centerX, centerY, radius, startAngle, endAngle) {
                if (endAngle < startAngle) {
                    endAngle += 360;
                    if (startAngle == endAngle) {
                        // Complete circle.
                        startAngle -= 360;
                    }
                }
                var alphaRadians;
                var pointX;
                var pointY;
                if (startAngle == endAngle) {
                    alphaRadians = Renderer.ToRadians * startAngle;
                    pointX = centerX + (radius * Math.cos(alphaRadians));
                    pointY = centerY - (radius * Math.sin(alphaRadians));
                    return [new Web.Point(pointX, pointY)];
                }
                var arcAngleSpan = endAngle - startAngle;
                var nrOfSegments = Math.max(3, (Math.max(32, (radius * .666)) * (arcAngleSpan / 360)));
                var alphaStep = arcAngleSpan / nrOfSegments;
                var alpha = startAngle;
                var points = [];
                while (alpha < endAngle) {
                    alphaRadians = Renderer.ToRadians * alpha;
                    pointX = centerX + (radius * Math.cos(alphaRadians));
                    pointY = centerY - (radius * Math.sin(alphaRadians));
                    points.push(new Web.Point(pointX, pointY));
                    alpha += alphaStep;
                }
                alphaRadians = Renderer.ToRadians * endAngle;
                pointX = centerX + (radius * Math.cos(alphaRadians));
                pointY = centerY - (radius * Math.sin(alphaRadians));
                points.push(new Web.Point(pointX, pointY));
                return points;
            };
            Renderer.DrawPolygon = function (points, color, lineWidth) {
                if (points.length > 2) {
                    var context = Renderer.context;
                    context.fillStyle = color.Value;
                    context.beginPath();
                    var firstPoint = points[0];
                    context.moveTo(firstPoint.x, firstPoint.y);
                    for (var iPoint = 1; iPoint < points.length; iPoint++) {
                        var point = points[iPoint];
                        context.lineTo(point.x, point.y);
                    }
                    context.closePath();
                    context.lineWidth = lineWidth;
                    context.strokeStyle = color.Value;
                    context.stroke();
                }
            };
            Renderer.FillPolygon = function (points, color) {
                if (points.length > 2) {
                    var context = Renderer.context;
                    context.fillStyle = color.Value;
                    context.beginPath();
                    var firstPoint = points[0];
                    context.moveTo(firstPoint.x, firstPoint.y);
                    for (var iPoint = 1; iPoint < points.length; iPoint++) {
                        var point = points[iPoint];
                        context.lineTo(point.x, point.y);
                    }
                    context.closePath();
                    context.fill();
                }
            };
            Renderer.FillTriangle = function (point1, point2, point3, color) {
                var context = Renderer.context;
                context.fillStyle = color.Value;
                context.beginPath();
                context.moveTo(point1.x, point1.y);
                context.lineTo(point2.x, point2.y);
                context.lineTo(point3.x, point3.y);
                context.closePath();
                context.fill();
            };
            Renderer.FillTriangleByXY = function (point1X, point1Y, point2X, point2Y, point3X, point3Y, color) {
                var context = Renderer.context;
                context.fillStyle = color.Value;
                context.beginPath();
                context.moveTo(point1X, point1Y);
                context.lineTo(point2X, point2Y);
                context.lineTo(point3X, point3Y);
                context.closePath();
                context.fill();
            };
            Renderer.GetNewCanvasAndContext = function (width, height) {
                var canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                var context = canvas.getContext("2d");
                return { canvas: canvas, context: context };
            };
            Renderer.DrawCanvas = function (canvas, x, y) {
                Renderer.context.drawImage(canvas, x, y);
            };
            Renderer.DrawImage = function (image, x, y) {
                Renderer.context.drawImage(image, x, y);
            };
            Renderer.DrawImageToSize = function (image, x, y, targetWidth, targetHeight, alpha) {
                x = Math.round(x);
                y = Math.round(y);
                targetWidth = Math.round(targetWidth);
                targetHeight = Math.round(targetHeight);
                var context = Renderer.context;
                var saveAlpha = context.globalAlpha;
                context.globalAlpha = alpha;
                context.drawImage(image, x, y, targetWidth, targetHeight);
                context.globalAlpha = saveAlpha;
            };
            Renderer.AngleToPositionCW = function (angle, radius, centerX, centerY) {
                var angleRadians = Renderer.ToRadians * angle;
                return new Web.Point((centerX + radius * Math.cos(angleRadians)), (centerY + radius * Math.sin(angleRadians)));
            };
            Renderer.DrawCurveThroughPoints = function (points, color, lineWidth, isClosed, tension) {
                if (lineWidth === void 0) { lineWidth = 1; }
                if (isClosed === void 0) { isClosed = false; }
                if (tension === void 0) { tension = .5; }
                var context = Renderer.context;
                context.beginPath();
                var numOfSegments = 16;
                var clonePoints = [];
                var result = [];
                var x;
                var y;
                var cardinal1;
                var cardinal2;
                var cardinal3;
                var cardinal4;
                // clone array so we don't change the original
                clonePoints = points.slice(0);
                if (isClosed) {
                    clonePoints.unshift(points[points.length - 1]);
                    clonePoints.unshift(points[points.length - 1]);
                    clonePoints.push(points[0]);
                }
                else {
                    clonePoints.unshift(points[0]);
                    clonePoints.push(points[points.length - 1]);
                }
                for (var i = 1; i < (clonePoints.length - 2); i++) {
                    var currPoint = clonePoints[i];
                    var prevPoint = clonePoints[i - 1];
                    var nextPoint = clonePoints[i + 1];
                    var nextNextPoint = clonePoints[i + 2];
                    for (var t = 0; t <= numOfSegments; t++) {
                        // calc tension vectors
                        var t1x = (nextPoint.x - prevPoint.x) * tension;
                        var t1y = (nextPoint.y - prevPoint.y) * tension;
                        var t2x = (nextNextPoint.x - currPoint.x) * tension;
                        var t2y = (nextNextPoint.y - currPoint.y) * tension;
                        // calc step
                        var step = t / numOfSegments;
                        var step2 = Math.pow(step, 2);
                        var step3 = Math.pow(step, 3);
                        // calc cardinals
                        cardinal1 = 2 * step3 - 3 * step2 + 1;
                        cardinal2 = -(2 * step3) + 3 * step2;
                        cardinal3 = step3 - 2 * step2 + step;
                        cardinal4 = step3 - step2;
                        // calc x and y coords with common control vectors
                        x = cardinal1 * currPoint.x + cardinal2 * nextPoint.x + cardinal3 * t1x + cardinal4 * t2x;
                        y = cardinal1 * currPoint.y + cardinal2 * nextPoint.y + cardinal3 * t1y + cardinal4 * t2y;
                        //store points in array
                        result.push(new Web.Point(x, y));
                    }
                }
                Renderer.DrawLines(result, color, lineWidth);
            };
            Renderer.DrawBezier = function (start, controlPoint1, controlPoint2, end, nrOfPoints, color, lineWidth) {
                if (lineWidth === void 0) { lineWidth = 1; }
                var points = Renderer.BezierPoints(start, controlPoint1, controlPoint2, end, nrOfPoints);
                Renderer.DrawLines(points, color, lineWidth);
            };
            Renderer.BezierPoints = function (a, b, c, d, nrOfPoints) {
                var points = [];
                var divider = nrOfPoints - 1;
                for (var iPoint = 0; iPoint < nrOfPoints; iPoint++) {
                    var step = iPoint / divider;
                    points.push(this.PointOnBezierCurve(a, b, c, d, step));
                }
                return points;
            };
            Renderer.PointOnBezierCurve = function (a, b, c, d, step) {
                var ab = this.LinearInterpolation(a, b, step);
                var bc = this.LinearInterpolation(b, c, step);
                var cd = this.LinearInterpolation(c, d, step);
                var abbc = this.LinearInterpolation(ab, bc, step);
                var bccd = this.LinearInterpolation(bc, cd, step);
                return this.LinearInterpolation(abbc, bccd, step);
            };
            Renderer.LinearInterpolation = function (p1, p2, step) {
                return new Web.Point(p1.x + (p2.x - p1.x) * step, p1.y + (p2.y - p1.y) * step);
            };
            Renderer.Interpolate = function (n1, n2, percent) {
                var otherPercent = 1 - percent;
                return n1 * percent + n2 * otherPercent;
            };
            Renderer.InterpolateXFastSlow = function (x1, x2, percent) {
                var pointIndex = Math.round(percent * 1000);
                if (pointIndex >= 0 && pointIndex <= 1000) {
                    var point = Renderer.fastSlowPoints[pointIndex];
                    return Renderer.Interpolate(x1, x2, point.y * .01);
                }
                return x2;
            };
            Object.defineProperty(Renderer, "AverageFrameRateOk", {
                get: function () {
                    return Renderer.AverageFrameRate > Renderer.DesiredMinimumFrameRate;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Renderer, "LastFrameRateOk", {
                get: function () {
                    return (this.frameRates.Count < Renderer.trackLastNFrames || Renderer.LastFrameRate > Renderer.DesiredMinimumFrameRate);
                },
                enumerable: true,
                configurable: true
            });
            Renderer.CheckFrameRate = function () {
                var now = Date.now();
                var renderDelta = now - Renderer.lastRender;
                Renderer.RenderDelta = renderDelta;
                Renderer.lastRender = now;
                Renderer.LastFrameRate = Math.round(1000 / renderDelta);
                if (this.frameRates.Count == Renderer.trackLastNFrames) {
                    var oldestFrameRate = this.frameRates.Pop();
                    this.frameRates.Push(renderDelta);
                    Renderer.totalFrameRate += renderDelta - oldestFrameRate;
                    Renderer.AverageFrameRate = Math.round(1000 / (Renderer.totalFrameRate / Renderer.trackLastNFrames));
                    if (Renderer.AverageFrameRate < Renderer.DesiredMinimumFrameRate) {
                        // Set some objects to invisible when performance is weak.
                        if (Renderer.SetLeastRequiredRenderedObjectVisibility(false)) {
                            // Clear the current last 'trackLastNFrames' frames and restart calculation to get a more accurate measure of the new situation
                            Renderer.frameRates.Clear();
                            Renderer.totalFrameRate = 0;
                        }
                    }
                    else if (Renderer.AverageFrameRate > Renderer.MoreThanEnoughGoodFrameRate) {
                        // Set more objects to visible when performance is very good.
                        if (Renderer.SetLeastRequiredRenderedObjectVisibility(true)) {
                            // Clear the current last 'trackLastNFrames' frames and restart calculation to get a more accurate measure of the new situation
                            Renderer.frameRates.Clear();
                            Renderer.totalFrameRate = 0;
                        }
                    }
                }
                else {
                    var nrOfFrames = this.frameRates.Push(renderDelta);
                    Renderer.totalFrameRate += renderDelta;
                    Renderer.AverageFrameRate = Math.round(1000 / (Renderer.totalFrameRate / nrOfFrames));
                }
            };
            Renderer.SetLeastRequiredRenderedObjectVisibility = function (setVisible) {
                var found = Renderer.SetOneLessRequiredObjectInvisible(Web.Requirement.Optional, setVisible);
                if (!found) {
                    return Renderer.SetOneLessRequiredObjectInvisible(Web.Requirement.NiceToHave, setVisible);
                }
                return found;
            };
            Renderer.SetOneLessRequiredObjectInvisible = function (requirement, setVisible) {
                var numberKeys = Web.EnumHelper.GetValues(Web.GraphDocking);
                for (var iNumber = numberKeys.length - 1; iNumber >= 0; iNumber--) {
                    var dock = numberKeys[iNumber];
                    var dockSide = Renderer.drawingDictionary.ValueOf(dock);
                    for (var iStack = 0; iStack < dockSide.DockStacks.length; iStack++) {
                        var dockStack = dockSide.DockStacks[iStack];
                        for (var iLayer = 0; iLayer < dockStack.DockLayers.length; iLayer++) {
                            var dockLayer = dockStack.DockLayers[iLayer];
                            for (var iDrawing = 0; iDrawing < dockLayer.AutoDrawings.length; iDrawing++) {
                                var autoDrawing = dockLayer.AutoDrawings[iDrawing];
                                if (autoDrawing.Visible != setVisible && autoDrawing.Requirement == requirement) {
                                    autoDrawing.Visible = setVisible;
                                    if (autoDrawing.RequiredReplacement != null) {
                                        autoDrawing.RequiredReplacement.Visible = !setVisible;
                                    }
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };
            Renderer.Render = function () {
                Renderer.context.fillStyle = Renderer.BackgroundColor.Value;
                Renderer.context.fillRect(0, 0, Renderer.width, Renderer.height);
                Renderer.CheckFrameRate();
                Renderer.MeasureDrawingDictionary();
                Renderer.RenderDrawingDictionary();
                if (Renderer.MouseEvent != null) {
                    Renderer.RenderHitTesting();
                    Renderer.mouseClicked = false;
                }
                Renderer.ThemeManager.PerformThemeTransition();                
                Renderer.window.requestAnimationFrame(Renderer.Render);
            };
            Renderer.RenderHitTesting = function () {
                // TODO: First hit test captured autoDrawing
                var numberKeys = Web.EnumHelper.GetValues(Web.GraphDocking);
                for (var iNumber = numberKeys.length - 1; iNumber >= 0; iNumber--) {
                    var dock = numberKeys[iNumber];
                    if (Renderer.RenderHitTest(dock)) {
                        return true;
                    }
                }
                return false;
            };
            Renderer.RenderHitTest = function (graphDock) {
                var dockSide = Renderer.drawingDictionary.ValueOf(graphDock);
                for (var iStack = 0; iStack < dockSide.DockStacks.length; iStack++) {
                    var dockStack = dockSide.DockStacks[iStack];
                    var dockStackDimensions = dockStack.Dimensions;
                    var width = dockStackDimensions.Width;
                    var height = dockStackDimensions.Height;
                    Renderer.SetRenderTarget(dockStackDimensions);
                    // Test in reverse order of rendering.
                    for (var iLayer = dockStack.DockLayers.length - 1; iLayer >= 0; iLayer--) {
                        var dockLayer = dockStack.DockLayers[iLayer];
                        for (var iDrawing = 0; iDrawing < dockLayer.AutoDrawings.length; iDrawing++) {
                            var autoDrawing = dockLayer.AutoDrawings[iDrawing];
                            if (autoDrawing.Visible) {
                                if (autoDrawing.HitTest(width, height, Renderer.mouseEvent)) {
                                    Renderer.EndDraw();
                                    return true;
                                }
                            }
                        }
                    }
                    Renderer.EndDraw();
                }
                return false;
            };
            Renderer.RenderDrawingDictionary = function () {
                Renderer.RenderBackgroundOrOverlay(Web.GraphDocking.Background);
                for (var iDock = 0; iDock < Renderer.dockingSideRenderingOrder.length; iDock++) {
                    var graphDocking = Renderer.dockingSideRenderingOrder[iDock];
                    switch (graphDocking) {
                        case Web.GraphDocking.Top:
                        case Web.GraphDocking.Bottom:
                        case Web.GraphDocking.Left:
                        case Web.GraphDocking.Right:
                            Renderer.RenderSideDockings(graphDocking);
                            break;
                    }
                }
                Renderer.RenderCenterDockings();
                Renderer.RenderBackgroundOrOverlay(Web.GraphDocking.Overlay);
            };
            Renderer.RenderBackgroundOrOverlay = function (graphDock) {
                if (graphDock == Web.GraphDocking.Background || graphDock == Web.GraphDocking.Overlay) {
                    var dockSide = Renderer.drawingDictionary.ValueOf(graphDock);
                    for (var iStack = 0; iStack < dockSide.DockStacks.length; iStack++) {
                        var dockStack = dockSide.DockStacks[iStack];
                        var width = dockStack.Dimensions.Width;
                        var height = dockStack.Dimensions.Height;
                        for (var iLayer = 0; iLayer < dockStack.DockLayers.length; iLayer++) {
                            var dockLayer = dockStack.DockLayers[iLayer];
                            for (var iDrawing = 0; iDrawing < dockLayer.AutoDrawings.length; iDrawing++) {
                                var autoDrawing = dockLayer.AutoDrawings[iDrawing];
                                if (autoDrawing.Visible) {
                                    autoDrawing.Render(width, height);
                                }
                            }
                        }
                    }
                }
            };
            Renderer.RenderSideDockings = function (graphDock) {
                var dockSide = Renderer.drawingDictionary.ValueOf(graphDock);
                for (var iStack = 0; iStack < dockSide.DockStacks.length; iStack++) {
                    var dockStack = dockSide.DockStacks[iStack];
                    var dockStackDimensions = dockStack.Dimensions;
                    var renderTargetWidth = dockStackDimensions.Width;
                    var renderTargetHeight = dockStackDimensions.Height;
                    if (renderTargetWidth >= 1 && renderTargetHeight >= 1) {
                        var renderedSomething = false;
                        // Begin Draw
                        Renderer.SetRenderTarget(dockStackDimensions);
                        // Render Layers.
                        for (var iLayer = 0; iLayer < dockStack.DockLayers.length; iLayer++) {
                            var dockLayer = dockStack.DockLayers[iLayer];
                            for (var iDrawing = 0; iDrawing < dockLayer.AutoDrawings.length; iDrawing++) {
                                var autoDrawing = dockLayer.AutoDrawings[iDrawing];
                                if (autoDrawing.Visible) {
                                    autoDrawing.Render(renderTargetWidth, renderTargetHeight);
                                    renderedSomething = true;
                                }
                            }
                        }
                        Renderer.EndDraw();
                        // Render the stacks to the main RenderTarget
                        if (renderedSomething) {
                            // Render layer 'bitmap' on dockstack
                        }
                    }
                }
            };
            Renderer.RenderCenterDockings = function () {
                for (var iDock = 0; iDock < Renderer.dockingCenterRenderingOrder.length; iDock++) {
                    var graphDocking = Renderer.dockingCenterRenderingOrder[iDock];
                    Renderer.RenderCenterDockingDock(graphDocking);
                }
            };
            Renderer.RenderCenterDockingDock = function (graphDock) {
                var dockSide = Renderer.drawingDictionary.ValueOf(graphDock);
                for (var iStack = 0; iStack < dockSide.DockStacks.length; iStack++) {
                    var dockStack = dockSide.DockStacks[iStack];
                    var dockStackDimensions = dockStack.Dimensions;
                    var renderTargetWidth = dockStackDimensions.Width;
                    var renderTargetHeight = dockStackDimensions.Height;
                    if (renderTargetWidth >= 1 && renderTargetHeight >= 1) {
                        var renderedSomething = false;
                        // Begin draw
                        Renderer.SetRenderTarget(dockStackDimensions);
                        // Render Layers.
                        for (var iLayer = 0; iLayer < dockStack.DockLayers.length; iLayer++) {
                            var dockLayer = dockStack.DockLayers[iLayer];
                            for (var iDrawing = 0; iDrawing < dockLayer.AutoDrawings.length; iDrawing++) {
                                var autoDrawing = dockLayer.AutoDrawings[iDrawing];
                                if (autoDrawing.Visible) {
                                    autoDrawing.Render(renderTargetWidth, renderTargetHeight);
                                    renderedSomething = true;
                                }
                            }
                        }
                        // End draw
                        Renderer.EndDraw();
                        if (renderedSomething) {
                            // Render the stacks to the main RenderTarget
                        }
                    }
                }
            };
            Renderer.MeasureDrawingDictionary = function () {
                Renderer.topDockHeight = 0;
                Renderer.leftDockWidth = 0;
                Renderer.rightDockWidth = 0;
                Renderer.bottomDockHeight = 0;
                Renderer.MeasureBackgroundOrOverlay(Web.GraphDocking.Background);
                for (var iDock = 0; iDock < Renderer.dockingSideRenderingOrder.length; iDock++) {
                    var graphDocking = Renderer.dockingSideRenderingOrder[iDock];
                    switch (graphDocking) {
                        case Web.GraphDocking.Top:
                            Renderer.MeasureTopBottomDockings(Web.GraphDocking.Top);
                            break;
                        case Web.GraphDocking.Bottom:
                            Renderer.MeasureTopBottomDockings(Web.GraphDocking.Bottom);
                            break;
                        case Web.GraphDocking.Left:
                            Renderer.MeasureSideDockings(Web.GraphDocking.Left);
                            break;
                        case Web.GraphDocking.Right:
                            Renderer.MeasureSideDockings(Web.GraphDocking.Right);
                            break;
                    }
                }
                Renderer.MeasureCenterDockings();
                Renderer.MeasureAdjustAlignedToCenter();
                Renderer.MeasureBackgroundOrOverlay(Web.GraphDocking.Overlay);
            };
            Renderer.MeasureBackgroundOrOverlay = function (graphDock) {
                if (graphDock == Web.GraphDocking.Background || graphDock == Web.GraphDocking.Overlay) {
                    var dockSide = Renderer.drawingDictionary.ValueOf(graphDock);
                    if (dockSide != null) {
                        var dimensions = dockSide.Dimensions;
                        dimensions.X = 0;
                        dimensions.Y = 0;
                        dimensions.Width = Renderer.width;
                        dimensions.Height = Renderer.height;
                        for (var iStack = 0; iStack < dockSide.DockStacks.length; iStack++) {
                            var dockStack = dockSide.DockStacks[iStack];
                            var dockStackDimensions = dockStack.Dimensions;
                            dockStackDimensions.X = 0;
                            dockStackDimensions.Y = 0;
                            dockStackDimensions.Width = Renderer.width;
                            dockStackDimensions.Height = Renderer.height;
                        }
                    }
                }
            };
            Renderer.MeasureTopBottomDockings = function (graphDock) {
                if (graphDock == Web.GraphDocking.Top || graphDock == Web.GraphDocking.Bottom) {
                    var dockSide = Renderer.drawingDictionary.ValueOf(graphDock);
                    if (dockSide != null) {
                        if (dockSide.DockStacks.length > 0) {
                            var totalWidth = Renderer.width - Renderer.leftDockWidth - Renderer.rightDockWidth;
                            for (var iStack = 0; iStack < dockSide.DockStacks.length; iStack++) {
                                var dockStack = dockSide.DockStacks[iStack];
                                var dockHeight = Renderer.MeasureDockStack(dockStack, graphDock);
                                var dimensions = dockStack.Dimensions;
                                dimensions.X = Renderer.leftDockWidth;
                                dimensions.Y = (graphDock == Web.GraphDocking.Top) ? Renderer.topDockHeight : Renderer.height - Renderer.bottomDockHeight - dockHeight;
                                dimensions.Width = totalWidth;
                                dimensions.Height = dockHeight;
                                if (graphDock == Web.GraphDocking.Top) {
                                    Renderer.topDockHeight += dockHeight;
                                }
                                else {
                                    Renderer.bottomDockHeight += dockHeight;
                                }
                            }
                            dimensions = dockSide.Dimensions;
                            dimensions.X = Renderer.leftDockWidth;
                            dimensions.Y = (graphDock == Web.GraphDocking.Top) ? 0 : Renderer.height - Renderer.bottomDockHeight;
                            dimensions.Width = totalWidth;
                            dimensions.Height = (graphDock == Web.GraphDocking.Top) ? Renderer.topDockHeight : Renderer.bottomDockHeight;
                        }
                        else {
                            dockSide.Dimensions.X = 0;
                            dockSide.Dimensions.Y = 0;
                            dockSide.Dimensions.Width = 0;
                            dockSide.Dimensions.Height = 0;
                        }
                    }
                }
            };
            Renderer.MeasureDockStack = function (dockStack, graphDock) {
                var topBottomWidth = Renderer.width - Renderer.leftDockWidth - Renderer.rightDockWidth;
                var leftRightHeight = Renderer.height - Renderer.topDockHeight - Renderer.bottomDockHeight;
                var otherSize = (graphDock == Web.GraphDocking.Bottom || graphDock == Web.GraphDocking.Top) ? topBottomWidth : leftRightHeight;
                var dockSize = 0;
                for (var iLayer = 0; iLayer < dockStack.DockLayers.length; iLayer++) {
                    var dockLayer = dockStack.DockLayers[iLayer];
                    var layerSize = 0;
                    for (var iDrawing = 0; iDrawing < dockLayer.AutoDrawings.length; iDrawing++) {
                        var autoDrawing = dockLayer.AutoDrawings[iDrawing];
                        if (autoDrawing.Visible) {
                            layerSize = Math.max(layerSize, autoDrawing.MeasureDock(otherSize));
                        }
                    }
                    if (graphDock == Web.GraphDocking.Top || graphDock == Web.GraphDocking.Bottom) {
                        var layerTopBottomDimensions = dockLayer.Dimensions;
                        layerTopBottomDimensions.Y = (graphDock == Web.GraphDocking.Top) ? Renderer.topDockHeight : Renderer.height - Renderer.topDockHeight - layerSize;
                        layerTopBottomDimensions.Width = topBottomWidth;
                        layerTopBottomDimensions.Height = layerSize;
                    }
                    else if (graphDock == Web.GraphDocking.Left || graphDock == Web.GraphDocking.Right) {
                        var layerLeftRightDimensions = dockLayer.Dimensions;
                        layerLeftRightDimensions.X = (graphDock == Web.GraphDocking.Left) ? Renderer.leftDockWidth : Renderer.width - Renderer.rightDockWidth - layerSize;
                        layerLeftRightDimensions.Width = layerSize;
                        layerLeftRightDimensions.Height = leftRightHeight;
                    }
                    dockSize = Math.max(dockSize, layerSize);
                }
                if (graphDock == Web.GraphDocking.Top || graphDock == Web.GraphDocking.Bottom) {
                    var topBottomDimensions = dockStack.Dimensions;
                    if (topBottomWidth > 0 && dockSize > 0) {
                        topBottomDimensions.Y = (graphDock == Web.GraphDocking.Top) ? 0 : Renderer.height - dockSize;
                        topBottomDimensions.Width = topBottomWidth;
                        topBottomDimensions.Height = dockSize;
                    }
                    else {
                        topBottomDimensions.Width = 0;
                        topBottomDimensions.Height = 0;
                    }
                }
                else if (graphDock == Web.GraphDocking.Left || graphDock == Web.GraphDocking.Right) {
                    var leftRightDimensions = dockStack.Dimensions;
                    if (dockSize > 0 && leftRightHeight > 0) {
                        leftRightDimensions.X = (graphDock == Web.GraphDocking.Left) ? 0 : Renderer.width - dockSize;
                        leftRightDimensions.Width = dockSize;
                        leftRightDimensions.Height = leftRightHeight;
                    }
                    else {
                        leftRightDimensions.Width = 0;
                        leftRightDimensions.Height = 0;
                    }
                }
                return dockSize;
            };
            Renderer.MeasureSideDockings = function (graphDock) {
                if (graphDock == Web.GraphDocking.Left || graphDock == Web.GraphDocking.Right) {
                    var dockSide = Renderer.drawingDictionary.ValueOf(graphDock);
                    if (dockSide != null) {
                        var dockSideDimensions = dockSide.Dimensions;
                        if (dockSide.DockStacks.length > 0) {
                            var totalHeight = Renderer.height - Renderer.bottomDockHeight - Renderer.topDockHeight;
                            for (var iStack = 0; iStack < dockSide.DockStacks.length; iStack++) {
                                var dockStack = dockSide.DockStacks[iStack];
                                var dockWidth = Renderer.MeasureDockStack(dockStack, graphDock);
                                var dockStackDimensions = dockStack.Dimensions;
                                dockStackDimensions.X = (graphDock == Web.GraphDocking.Left) ? Renderer.leftDockWidth : Renderer.width - Renderer.rightDockWidth - dockWidth;
                                dockStackDimensions.Y = Renderer.topDockHeight;
                                dockStackDimensions.Width = dockWidth;
                                dockStackDimensions.Height = totalHeight;
                                if (graphDock == Web.GraphDocking.Left) {
                                    Renderer.leftDockWidth += dockWidth;
                                }
                                else {
                                    Renderer.rightDockWidth += dockWidth;
                                }
                            }
                            dockSideDimensions.X = (graphDock == Web.GraphDocking.Left) ? 0 : Renderer.width - Renderer.rightDockWidth;
                            dockSideDimensions.Y = Renderer.topDockHeight;
                            dockSideDimensions.Width = (graphDock == Web.GraphDocking.Left) ? Renderer.leftDockWidth : Renderer.rightDockWidth;
                            dockSideDimensions.Height = totalHeight;
                        }
                        else {
                            dockSideDimensions.X = 0;
                            dockSideDimensions.Y = 0;
                            dockSideDimensions.Width = 0;
                            dockSideDimensions.Height = 0;
                        }
                    }
                }
            };
            Renderer.MeasureCenterDockings = function () {
                var dockCenter = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.Center);
                var dimensions = dockCenter.Dimensions;
                var centerDimensions = dimensions;
                dimensions.X = Renderer.leftDockWidth;
                dimensions.Y = Renderer.topDockHeight;
                dimensions.Width = Renderer.width - Renderer.leftDockWidth - Renderer.rightDockWidth;
                dimensions.Height = Renderer.height - Renderer.bottomDockHeight - Renderer.topDockHeight;
                Renderer.SetDockStackDimensions(dockCenter);
                var dockTopLeft = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterTopLeft);
                dimensions = dockTopLeft.Dimensions;
                dimensions.X = Renderer.leftDockWidth;
                dimensions.Y = Renderer.topDockHeight;
                dimensions.Width = centerDimensions.Width * .5;
                dimensions.Height = centerDimensions.Height * .5;
                Renderer.SetDockStackDimensions(dockTopLeft);
                var dockTopRight = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterTopRight);
                dimensions = dockTopRight.Dimensions;
                dimensions.X = Renderer.leftDockWidth + dockTopLeft.Dimensions.Width;
                dimensions.Y = Renderer.topDockHeight;
                dimensions.Width = dockTopLeft.Dimensions.Width;
                dimensions.Height = dockTopLeft.Dimensions.Height;
                Renderer.SetDockStackDimensions(dockTopRight);
                var dockBottomLeft = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterBottomLeft);
                dimensions = dockBottomLeft.Dimensions;
                dimensions.X = Renderer.leftDockWidth;
                dimensions.Y = Renderer.topDockHeight + dockTopLeft.Dimensions.Height;
                dimensions.Width = dockTopLeft.Dimensions.Width;
                dimensions.Height = dockTopLeft.Dimensions.Height;
                Renderer.SetDockStackDimensions(dockBottomLeft);
                var dockBottomRight = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterBottomRight);
                dimensions = dockBottomRight.Dimensions;
                dimensions.X = dockTopRight.Dimensions.X;
                dimensions.Y = dockBottomLeft.Dimensions.Y;
                dimensions.Width = dockTopLeft.Dimensions.Width;
                dimensions.Height = dockTopLeft.Dimensions.Height;
                Renderer.SetDockStackDimensions(dockBottomRight);
                var dockTop = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterTop);
                dimensions = dockTop.Dimensions;
                dimensions.X = Renderer.leftDockWidth;
                dimensions.Y = Renderer.topDockHeight;
                dimensions.Width = centerDimensions.Width;
                dimensions.Height = dockTopLeft.Dimensions.Height;
                Renderer.SetDockStackDimensions(dockTop);
                var dockBottom = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterBottom);
                dimensions = dockBottom.Dimensions;
                dimensions.X = Renderer.leftDockWidth;
                dimensions.Y = dockBottomLeft.Dimensions.Y;
                dimensions.Width = centerDimensions.Width;
                dimensions.Height = dockTopLeft.Dimensions.Height;
                Renderer.SetDockStackDimensions(dockBottom);
                var dockLeft = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterLeft);
                dimensions = dockLeft.Dimensions;
                dimensions.X = Renderer.leftDockWidth;
                dimensions.Y = Renderer.topDockHeight;
                dimensions.Width = dockTopLeft.Dimensions.Width;
                dimensions.Height = centerDimensions.Height;
                Renderer.SetDockStackDimensions(dockLeft);
                var dockRight = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterRight);
                dimensions = dockRight.Dimensions;
                dimensions.X = dockTopRight.Dimensions.X;
                dimensions.Y = Renderer.topDockHeight;
                dimensions.Width = dockTopRight.Dimensions.Width;
                dimensions.Height = centerDimensions.Height;
                Renderer.SetDockStackDimensions(dockRight);
                var numpadWidth = centerDimensions.Width / 3;
                var numpadHeight = centerDimensions.Height / 3;
                var col1X = Renderer.leftDockWidth;
                var col2X = col1X + numpadWidth;
                var col3X = col2X + numpadWidth;
                var row1Y = Renderer.topDockHeight;
                var row2Y = row1Y + numpadHeight;
                var row3Y = row2Y + numpadHeight;
                var dockNumpad7 = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterNumpad7);
                dimensions = dockNumpad7.Dimensions;
                dimensions.X = col1X;
                dimensions.Y = row1Y;
                dimensions.Width = numpadWidth;
                dimensions.Height = numpadHeight;
                Renderer.SetDockStackDimensions(dockNumpad7);
                var dockNumpad8 = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterNumpad8);
                dimensions = dockNumpad8.Dimensions;
                dimensions.X = col2X;
                dimensions.Y = row1Y;
                dimensions.Width = numpadWidth;
                dimensions.Height = numpadHeight;
                Renderer.SetDockStackDimensions(dockNumpad8);
                var dockNumpad9 = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterNumpad9);
                dimensions = dockNumpad9.Dimensions;
                dimensions.X = col3X;
                dimensions.Y = row1Y;
                dimensions.Width = numpadWidth;
                dimensions.Height = numpadHeight;
                Renderer.SetDockStackDimensions(dockNumpad9);
                var dockNumpad4 = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterNumpad4);
                dimensions = dockNumpad4.Dimensions;
                dimensions.X = col1X;
                dimensions.Y = row2Y;
                dimensions.Width = numpadWidth;
                dimensions.Height = numpadHeight;
                Renderer.SetDockStackDimensions(dockNumpad4);
                var dockNumpad5 = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterNumpad5);
                dimensions = dockNumpad5.Dimensions;
                dimensions.X = col2X;
                dimensions.Y = row2Y;
                dimensions.Width = numpadWidth;
                dimensions.Height = numpadHeight;
                Renderer.SetDockStackDimensions(dockNumpad5);
                var dockNumpad6 = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterNumpad6);
                dimensions = dockNumpad6.Dimensions;
                dimensions.X = col3X;
                dimensions.Y = row2Y;
                dimensions.Width = numpadWidth;
                dimensions.Height = numpadHeight;
                Renderer.SetDockStackDimensions(dockNumpad6);
                var dockNumpad1 = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterNumpad1);
                dimensions = dockNumpad1.Dimensions;
                dimensions.X = col1X;
                dimensions.Y = row3Y;
                dimensions.Width = numpadWidth;
                dimensions.Height = numpadHeight;
                Renderer.SetDockStackDimensions(dockNumpad1);
                var dockNumpad2 = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterNumpad2);
                dimensions = dockNumpad2.Dimensions;
                dimensions.X = col2X;
                dimensions.Y = row3Y;
                dimensions.Width = numpadWidth;
                dimensions.Height = numpadHeight;
                Renderer.SetDockStackDimensions(dockNumpad2);
                var dockNumpad3 = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.CenterNumpad3);
                dimensions = dockNumpad3.Dimensions;
                dimensions.X = col3X;
                dimensions.Y = row3Y;
                dimensions.Width = numpadWidth;
                dimensions.Height = numpadHeight;
                Renderer.SetDockStackDimensions(dockNumpad3);
            };
            Renderer.SetDockStackDimensions = function (dockSide) {
                for (var iStack = 0; iStack < dockSide.DockStacks.length; iStack++) {
                    var dockStack = dockSide.DockStacks[iStack];
                    dockStack.Dimensions = dockSide.Dimensions.Clone();
                    for (var iLayer = 0; iLayer < dockStack.DockLayers.length; iLayer++) {
                        var dockLayer = dockStack.DockLayers[iLayer];
                        dockLayer.Dimensions = dockStack.Dimensions.Clone();
                    }
                }
            };
            Renderer.MeasureAdjustAlignedToCenter = function () {
                var dockCenter = Renderer.drawingDictionary.ValueOf(Web.GraphDocking.Center);
                var dockCenterDimensions = dockCenter.Dimensions;
                for (var iDock = 0; iDock < Renderer.dockingSideRenderingOrder.length; iDock++) {
                    var graphDocking = Renderer.dockingSideRenderingOrder[iDock];
                    if (Renderer.drawingDictionary.ContainsKey(graphDocking)) {
                        var dimensions;
                        if (graphDocking == Web.GraphDocking.Top || graphDocking == Web.GraphDocking.Bottom) {
                            var topBottomDock = Renderer.drawingDictionary.ValueOf(graphDocking);
                            for (var iStack = 0; iStack < topBottomDock.DockStacks.length; iStack++) {
                                var topBottomdockStack = topBottomDock.DockStacks[iStack];
                                if (topBottomdockStack.AlignedToCenter) {
                                    dimensions = topBottomdockStack.Dimensions;
                                    dimensions.X = dockCenterDimensions.X;
                                    dimensions.Width = dockCenterDimensions.Width;
                                }
                                var dockStackX = topBottomdockStack.Dimensions.X;
                                for (var iLayer = 0; iLayer < topBottomdockStack.DockLayers.length; iLayer++) {
                                    var topBottomDockLayer = topBottomdockStack.DockLayers[iLayer];
                                    dimensions = topBottomDockLayer.Dimensions;
                                    dimensions.X = dockStackX;
                                    dimensions.Width = dockCenterDimensions.Width;
                                }
                            }
                        }
                        if (graphDocking == Web.GraphDocking.Left || graphDocking == Web.GraphDocking.Right) {
                            var leftRightDock = Renderer.drawingDictionary.ValueOf(graphDocking);
                            for (var iLeftRight = 0; iLeftRight < leftRightDock.DockStacks.length; iLeftRight++) {
                                var leftRightDockStack = leftRightDock.DockStacks[iLeftRight];
                                if (leftRightDockStack.AlignedToCenter) {
                                    dimensions = leftRightDockStack.Dimensions;
                                    dimensions.Y = dockCenterDimensions.Y;
                                    dimensions.Height = dockCenterDimensions.Height;
                                }
                                var dockStackY = leftRightDockStack.Dimensions.Y;
                                for (var iLeftRightLayer = 0; iLeftRightLayer < leftRightDockStack.DockLayers.length; iLeftRightLayer++) {
                                    var leftRightDockLayer = leftRightDockStack.DockLayers[iLeftRightLayer];
                                    dimensions = leftRightDockLayer.Dimensions;
                                    dimensions.Y = dockStackY;
                                    dimensions.Height = dockCenterDimensions.Height;
                                }
                            }
                        }
                    }
                }
            };
            Renderer.TwoPi = Math.PI * 2;
            Renderer.ToRadians = Math.PI / 180.0;
            Renderer.ToDegrees = 180 / Math.PI;
            Renderer.colorBlack = new Web.Color(0, 0, 0, 1);
            Renderer.colorWhite = new Web.Color(255, 255, 255, 1);
            Renderer.highlightColor = new Web.Color(255, 255, 255, .4);
            Renderer.TopLayer = 100;
            Renderer.UpperLayer = 75;
            Renderer.MiddleLayer = 50;
            Renderer.LowerLayer = 25;
            Renderer.BottomLayer = 0;
            Renderer.RequestedMouseCursor = Web.MouseCursor.Crosshair;
            Renderer.KeyInfo = new Web.KeyInfo();
            Renderer.drawingDictionary = new Web.Dictionary();
            Renderer.dockingSideRenderingOrder = [Web.GraphDocking.Top, Web.GraphDocking.Left, Web.GraphDocking.Right, Web.GraphDocking.Bottom];
            Renderer.firstMouseDown = true;
            Renderer.mouseClickedTreshold = 500; // ms
            Renderer.swipingRight = false;
            Renderer.swipingLeft = false;
            Renderer.mouseX = 30;
            Renderer.mouseY = 30;
            Renderer.mouseClicked = false;
            Renderer.swipedLeft = false;
            Renderer.swipedRight = false;
            Renderer.fastSlowP1 = new Web.Point(0, 100);
            Renderer.fastSlowC1 = new Web.Point(0, 0);
            Renderer.fastSlowP2 = new Web.Point(100, 0);
            Renderer.fastSlowC2 = new Web.Point(100, 0);
            Renderer.fastSlowPoints = Renderer.BezierPoints(Renderer.fastSlowP1, Renderer.fastSlowC1, Renderer.fastSlowC2, Renderer.fastSlowP2, 1001);
            Renderer.lastRender = Date.now();
            Renderer.DesiredMinimumFrameRate = 24;
            Renderer.MoreThanEnoughGoodFrameRate = 48;
            Renderer.trackLastNFrames = 50;
            Renderer.totalFrameRate = 0;
            Renderer.frameRates = new Web.FifoQueue(Renderer.trackLastNFrames);
            Renderer.dockingCenterRenderingOrder = [
                Web.GraphDocking.CenterLeft, Web.GraphDocking.CenterRight, Web.GraphDocking.CenterTop, Web.GraphDocking.CenterBottom, Web.GraphDocking.CenterTopLeft, Web.GraphDocking.CenterTopRight, Web.GraphDocking.CenterBottomLeft, Web.GraphDocking.CenterBottomRight, Web.GraphDocking.CenterNumpad7, Web.GraphDocking.CenterNumpad8, Web.GraphDocking.CenterNumpad9, Web.GraphDocking.CenterNumpad4, Web.GraphDocking.CenterNumpad5, Web.GraphDocking.CenterNumpad6, Web.GraphDocking.CenterNumpad1, Web.GraphDocking.CenterNumpad2, Web.GraphDocking.CenterNumpad3, Web.GraphDocking.Center
            ];
            return Renderer;
        }());
        Web.Renderer = Renderer;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="enums.ts"/>
/// <reference path="Renderer.ts"/>




var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var SetupControl = /** @class */ (function () {
            function SetupControl() {
            }
            Object.defineProperty(SetupControl, "ImageStrip", {
                get: function () {
                    return SetupControl.imageStrip;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SetupControl, "Slideshow", {
                set: function (value) {
                    SetupControl.slideshow = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SetupControl, "SlideshowRunning", {
                get: function () {
                    return (SetupControl.slideshow != null) ? SetupControl.slideshow.Running : false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SetupControl, "Menu", {
                get: function () {
                    return SetupControl.menu;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SetupControl, "Document", {
                get: function () { return SetupControl.document; },
                enumerable: true,
                configurable: true
            });
            SetupControl.SendMail = function () {
                document.location.href = "mailto:erlend@Estates.be?subject="
                    + encodeURIComponent("Information request")
                    + "&body=" + encodeURIComponent("");
            };
            SetupControl.DownloadFile = function (path) {
                window.open(path);
            };
            SetupControl.Initialize = function (window, document) {
                //if (window.scrollbars != null)
                //{
                //    window.scrollbars.visible = false;
                //}
                var clientWidth = window.innerWidth;
                var clientHeight = window.innerHeight;

                var defaultTheme = new Web.Theme(              
                    new Web.Color(0, 82, 163, 1), new Web.Color(55, 55, 57, 1), 
                    new Web.Color(37, 37, 38, .9), new Web.Color(142, 142, 146, .9), 
                    new Web.Color(240, 200, 100, 1), Web.Renderer.ColorBlack, 
                    new Web.Color(255, 150, 0, 1), new Web.Color(200, 100, 0, 1),
                    new Web.Color(0, 180, 0, 1), new Web.Color(240, 200, 100, 1), 
                    new Web.Color(230, 230, 230, .80), Web.Renderer.ColorWhite, 
                    new Web.Font("roboto", 25, Web.FontStyle.normal, 
                    Web.FontWeight.normal), new Web.Font("Montez", 24, 
                    Web.FontStyle.normal, Web.FontWeight.bold), 
                    new Web.Font("Arial", 15, Web.FontStyle.normal, Web.FontWeight.bold), 
                    new Web.Font("Exo", 24, Web.FontStyle.normal, Web.FontWeight.bold),
                    new Web.Font("Exo", 12, Web.FontStyle.normal, Web.FontWeight.bold));
                // var softwareTheme = new Web.Theme(new Web.Color(45, 85, 48, 1), new Web.Color(55, 95, 57, 1), new Web.Color(37, 87, 38, .9), new Web.Color(142, 192, 146, .9), new Web.Color(240, 250, 100, 1), Web.Renderer.ColorBlack, new Web.Color(150, 255, 0, 1), new Web.Color(100, 200, 0, 1), new Web.Color(0, 180, 0, 1), new Web.Color(100, 240, 100, 1), new Web.Color(230, 255, 230, .80), Web.Renderer.ColorWhite, new Web.Font("Exo", 30, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Exo", 24, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Exo", 15, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Exo", 24, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Exo", 12, Web.FontStyle.normal, Web.FontWeight.bold));
                // var mathTheme = new Web.Theme(new Web.Color(40, 40, 40, 1), new Web.Color(47, 47, 47, 1), new Web.Color(80, 80, 80, .9), new Web.Color(130, 130, 130, .9), new Web.Color(220, 220, 220, 1), Web.Renderer.ColorBlack, new Web.Color(255, 155, 0, 1), new Web.Color(200, 100, 0, 1), new Web.Color(180, 100, 0, 1), new Web.Color(220, 220, 220, 1), new Web.Color(0, 0, 0, 1), Web.Renderer.ColorWhite, new Web.Font("Exo", 30, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Exo", 24, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Exo", 15, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Exo", 24, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Exo", 12, Web.FontStyle.normal, Web.FontWeight.bold));
                // var contactTheme = new Web.Theme(new Web.Color(45, 48, 85, 1), new Web.Color(55, 55, 97, 1), new Web.Color(37, 38, 87, .9), new Web.Color(142, 146, 192, .9), new Web.Color(100, 240, 255, 1), Web.Renderer.ColorBlack, new Web.Color(0, 150, 255, 1), new Web.Color(0, 100, 200, 1), new Web.Color(0, 0, 180, 1), new Web.Color(100, 100, 240, 1), new Web.Color(230, 230, 255, .80), Web.Renderer.ColorWhite, new Web.Font("Montez", 30, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Montez", 24, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Exo", 15, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Montez", 24, Web.FontStyle.normal, Web.FontWeight.bold), new Web.Font("Montez", 12, Web.FontStyle.normal, Web.FontWeight.bold));

                // var radiate = new Web.Radiate(0, Web.Requirement.Optional, function () { return Web.Renderer.ThemeManager.CurrentTheme.BackgroundColorHighlight; }, 12, .005);
                // radiate.Dock = Web.GraphDocking.Background;
                // radiate.DockStack = Web.Renderer.NextDockStack(radiate);
                // Web.Renderer.AddAutoDrawing(radiate);

                // var binaryRain = new Web.BinaryRain(Web.Requirement.Optional, .05, 3, 142, 7, 40, function () { return Web.Renderer.ThemeManager.CurrentTheme.MessageFont; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.MessageColor; });
                // binaryRain.Dock = Web.GraphDocking.Background;
                // binaryRain.DockStack = Web.Renderer.NextDockStack(binaryRain);
                // binaryRain.Active = false;
                // Web.Renderer.AddAutoDrawing(binaryRain);

                // var waves = new Web.Waves(Web.Requirement.Optional, 2, 80, 12, function () { return Web.Renderer.ThemeManager.CurrentTheme.MessageColor; }, true);
                // waves.Dock = Web.GraphDocking.Background;
                // waves.DockStack = Web.Renderer.NextDockStack(waves);
                // waves.Active = false;
                // Web.Renderer.AddAutoDrawing(waves);

                // mathTheme.StartThemeAction = function () {
                //     waves.Active = true;
                //     binaryRain.Active = false;
                // };
                // softwareTheme.StartThemeAction = function () {
                //     binaryRain.Active = true;
                //     waves.Active = false;
                // };
                // defaultTheme.StartThemeAction = function () {
                //     binaryRain.Active = false;
                //     waves.Active = false;
                // };
                // contactTheme.StartThemeAction = function () {
                //     binaryRain.Active = false;
                //     waves.Active = false;
                // };

                var themeManager = new Web.ThemeManager(defaultTheme);
                // themeManager.AddTheme(SetupControl.ThemeSoftware, softwareTheme);
                // themeManager.AddTheme(SetupControl.ThemeContact, contactTheme);
                // themeManager.AddTheme(SetupControl.ThemeMath, mathTheme);

                var canvas = document.getElementById('MainCanvas');
                Web.Renderer.Initialize(document, window, canvas, themeManager);
                Web.Renderer.ResizeCanvas(clientWidth, clientHeight);
                
                // var backImg = new Web.Area(10, Web.Requirement.Mandatory, function () { 
                //     return Web.Renderer.ThemeManager.CurrentTheme.SectionBackgroundColor; 
                // });
                // backImg.Dock = Web.GraphDocking.Center;
                // backImg.DockStack = Web.Renderer.NextDockStack(backImg);
                // Web.Renderer.AddAutoDrawing(backImg);


                // var topArea = new Web.Area(50, Web.Requirement.Mandatory, function () { return Web.Renderer.ThemeManager.CurrentTheme.SectionBackgroundColor; });
                // topArea.Dock = Web.GraphDocking.Top;
                // topArea.DockStack = Web.Renderer.NextDockStack(topArea);
                // Web.Renderer.AddAutoDrawing(topArea);

                // var topMenuArea = new Web.Area(40, Web.Requirement.Mandatory, function () { return Web.Renderer.ThemeManager.CurrentTheme.SectionBackgroundColor; });
                // topMenuArea.Dock = Web.GraphDocking.Top;
                // topMenuArea.DockStack = Web.Renderer.NextDockStack(topMenuArea);
                // Web.Renderer.AddAutoDrawing(topMenuArea);

                // this.title = new Web.Title(40, Web.Requirement.Mandatory, function () { return Web.Renderer.ThemeManager.CurrentTheme.TitleColor; }, "Space, the final frontier...", function () { return Web.Renderer.ThemeManager.CurrentTheme.PageTitleFont; }, true, 0, 30, .002);
                // this.title.Dock = Web.GraphDocking.Top;
                // this.title.DockStack = topArea.DockStack;
                // this.title.Layer = 1;
                // Web.Renderer.AddAutoDrawing(this.title);

                // var menuItems = [];
                // var subMenuItems = [];
                // subMenuItems.push(new Web.MenuItem("People", [], SetupControl.SetMenuPeople));
                // subMenuItems.push(new Web.MenuItem("Weddings", [], SetupControl.SetMenuWeddings));
                // subMenuItems.push(new Web.MenuItem("Animals", [], SetupControl.SetMenuAnimals));
                // subMenuItems.push(new Web.MenuItem("Cityscapes", [], SetupControl.SetMenuCityscapes));
                // subMenuItems.push(new Web.MenuItem("Landscapes", [], SetupControl.SetMenuLandscapes));
                // subMenuItems.push(new Web.MenuItem("Macro", [], SetupControl.SetMenuMacro));
                // subMenuItems.push(new Web.MenuItem("Special-fx", [], SetupControl.SetMenuSpecialFx));

                // menuItems.push(new Web.MenuItem("Photography", subMenuItems, SetupControl.SetMenuPhotography));
                // menuItems.push(new Web.MenuItem("Math", [], SetupControl.SetMenuMath));

                // var artMenuItems = [];
                // artMenuItems.push(new Web.MenuItem("Spirals", [], SetupControl.SetMenuSpirals));
                // artMenuItems.push(new Web.MenuItem("Mdf-Cutouts", [], SetupControl.SetMenuMdf));
                // artMenuItems.push(new Web.MenuItem("Paintings", [], SetupControl.SetMenuPaintings));
                // artMenuItems.push(new Web.MenuItem("Wall-Art", [], SetupControl.SetMenuWallArt));
                // menuItems.push(new Web.MenuItem("Art", artMenuItems, SetupControl.SetMenuArt));
                // menuItems.push(new Web.MenuItem("Logos", [], SetupControl.SetMenuLogos));
                // menuItems.push(new Web.MenuItem("Software", [], SetupControl.SetMenuSoftware));
                // menuItems.push(new Web.MenuItem("Contact", [], SetupControl.SetMenuContact));

                // SetupControl.menu = new Web.Menu(40, Web.Requirement.Mandatory, function () { return Web.Renderer.ThemeManager.CurrentTheme.MenuFont; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.TitleColor; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.SelectedColor; }, menuItems);
                // SetupControl.menu.Dock = Web.GraphDocking.Top;
                // SetupControl.menu.DockStack = topMenuArea.DockStack;
                // SetupControl.menu.Layer = topMenuArea.Layer + 1;
                // Web.Renderer.AddAutoDrawing(SetupControl.menu);

                // var bottom = new Web.Area(40, Web.Requirement.Mandatory, function () { return Web.Renderer.ThemeManager.CurrentTheme.SectionBackgroundColor; });
                // bottom.Dock = Web.GraphDocking.Bottom;
                // bottom.DockStack = Web.Renderer.NextDockStack(bottom);
                // Web.Renderer.AddAutoDrawing(bottom);

                // var someText = new Web.ScrollText(35, Web.Requirement.NiceToHave, function () { return Web.Renderer.ThemeManager.CurrentTheme.MessageColor; }, "© Copyright 2015-2021, Coding, Design & all content by Erlend Robaye, all rights reserved.", function () { return Web.Renderer.ThemeManager.CurrentTheme.MenuFont; }, true, .15, .02);
                // someText.Dock = Web.GraphDocking.Bottom;
                // someText.DockStack = bottom.DockStack;
                // someText.Layer = Web.Renderer.TopLayer;
                // Web.Renderer.AddAutoDrawing(someText);

                // var backgroundImage = new Web.BackgroundImage(0, Web.Requirement.Optional, "Images/Estates.png", 0, 0);
                // backgroundImage.Dock = Web.GraphDocking.CenterNumpad1;
                // backgroundImage.DockStack = 0;
                // Web.Renderer.AddAutoDrawing(backgroundImage);

                // var clock = new Web.Clock(Web.Requirement.Optional, 30, 10, 0, function () { return Web.Renderer.ThemeManager.CurrentTheme.BackgroundColor; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.GlossColor; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.TitleColor; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.ActionColor; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.MessageColor; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.BackgroundColorHighlight; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.MessageColor; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.TitleColor; }, Web.GraphDocking.Bottom);
                // clock.Dock = Web.GraphDocking.Overlay;
                // clock.DockStack = 0;
                // Web.Renderer.AddAutoDrawing(clock);

                // var mouseClicks = new Web.MouseClicks(0, Web.Requirement.Optional, new Web.Color(200, 100, 0, 1), .005);
                // mouseClicks.Dock = Web.GraphDocking.Overlay;
                // mouseClicks.DockStack = 0;
                // Web.Renderer.AddAutoDrawing(mouseClicks);

                var imageUrls = [];
                var imageTitles = [];
                SetupControl.imageStrip = new Web.ImageStrip(0, Web.Requirement.Mandatory, imageUrls, imageTitles, null, .5, function () { return Web.Renderer.ThemeManager.CurrentTheme.FrameColor; }, 
                function () { 
                    return new Web.Color(0, 85, 170, 1);    // f-next, prev button background color
                    // return Web.Renderer.ThemeManager.CurrentTheme.BackgroundColor; 
                }, function () { return Web.Renderer.ThemeManager.CurrentTheme.FrameColor; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.PageTitleFont; }, function () { return Web.Renderer.ThemeManager.CurrentTheme.FrameColor; }, 
                1, null, null);  // f-changed last 3 items.
                // }, .01, SetupControl.menu.NextMenuItem, SetupControl.menu.PrevMenuItem);

                SetupControl.imageStrip.Dock = Web.GraphDocking.Background;
                SetupControl.imageStrip.DockStack = Web.Renderer.NextDockStack(SetupControl.imageStrip);
                SetupControl.imageStrip.Layer = Web.Renderer.LowerLayer;
                
                // Set first menu that sets imageStrip
                // subMenuItems[0].clickedMenu(subMenuItems[0]);

                SetupControl.SetStripImages();
                Web.Renderer.AddAutoDrawing(SetupControl.imageStrip);
                
                // Web.Renderer.ThemeManager.ChangeTheme(Web.ThemeManager.ThemeDefault);

                // var progressCircle = new Web.ProgressCircle(Web.Requirement.Mandatory, 27, 27, 25, 20, Web.Renderer.ColorBlack, new Web.Color(0, 180, 0, 1));
                // progressCircle.Dock = Web.GraphDocking.Center;
                // progressCircle.DockStack = 0;
                // progressCircle.Layer = Web.Renderer.TopLayer;
                // Web.Renderer.AddAutoDrawing(progressCircle);

                // var slideshow = new Web.Slideshow(0, Web.Requirement.Mandatory, 5, progressCircle, SetupControl.imageStrip.NextImage, SetupControl.menu.NextMenuItem, new Web.Color(255, 150, 0, 1), function () { return Web.Renderer.ThemeManager.CurrentTheme.MenuFont; });
                // slideshow.Dock = Web.GraphDocking.Center;
                // slideshow.DockStack = 0;
                // slideshow.Layer = Web.Renderer.TopLayer;
                // Web.Renderer.AddAutoDrawing(slideshow);
                // SetupControl.Slideshow = slideshow;

                // var fps = new Fps(Requirement.NiceToHave, 3, 3, Renderer.ColorWhite, Align.BottomLeft, "Exo", "normal", "bold", 12);
                // fps.Dock = GraphDocking.Center;
                // fps.DockStack = 0;
                // fps.Layer = Renderer.TopLayer;
                // Renderer.AddAutoDrawing(fps);                
                
                var sImage = new Web.StaticValues(0, Web.Requirement.Optional, "Images/buildings/vr-mark.png", 60, 25);
                sImage.Dock = Web.GraphDocking.Background;
                sImage.DockStack = Web.Renderer.NextDockStack(sImage);
                sImage.Layer = Web.Renderer.LowerLayer;
                Web.Renderer.AddAutoDrawing(sImage);
            };
            SetupControl.SetStripImages = function () {
                var imageUrls = [];
                var imageTitles = [];
                imageUrls.push("Images/buildings/b1-bg.png");
                imageTitles.push("Building-1");
                imageUrls.push("Images/buildings/i-1.jpg");
                imageTitles.push("Building-2");
                imageUrls.push("Images/buildings/i-2.jpg");
                imageTitles.push("Building-3");
                SetupControl.imageStrip.SetNewImages(imageUrls, imageTitles);
            }            
            // SetupControl.SetMenuPhotography = function (menuItem) {
            //     if (menuItem.subMenuItems.length > 0) {
            //         var subMenuItem = menuItem.subMenuItems[0];
            //         subMenuItem.clickedMenu(subMenuItem);
            //     }
            //     // SetupControl.title.Text = menuItem.menuText;
            // };
            // SetupControl.SetMenuPeople = function (menuItem) {
            //     // SetupControl.title.Text = menuItem.parentMenu.menuText + " : " + menuItem.menuText;
            //     var imageUrls = [];
            //     var imageTitles = [];
            //     imageUrls.push("Images/Photography/People/YanaBlueEyes.jpg");
            //     imageTitles.push("Yana's blue eyes");
            //     imageUrls.push("Images/Photography/People/EllaAndYana.jpg");
            //     imageTitles.push("Ella & Yana");
            //     imageUrls.push("Images/Photography/People/YanaSunhat.jpg");
            //     imageTitles.push("Yana with sun hat");                
            //     SetupControl.imageStrip.SetNewImages(imageUrls, imageTitles);
            //     Web.Renderer.ThemeManager.ChangeTheme(Web.ThemeManager.ThemeDefault);
            // };

            // SetupControl.ThemeSoftware = "Software";
            // SetupControl.ThemeContact = "Contact";
            // SetupControl.ThemeMath = "Math";
            return SetupControl;
        }());
        Web.SetupControl = SetupControl;
    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
//# sourceMappingURL=Main.js.map

