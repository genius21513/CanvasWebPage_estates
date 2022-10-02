var Estates;
(function (Estates) {
    var Web;
    (function (Web) {
        var ImageStrip = /** @class */ (function (_super) {
            __extends(ImageStrip, _super);
            function ImageStrip(size, requirement, imagePaths, imageTitles, imageClickActions, yCenterPositionPerctange, getFrameColor, getButtonBackgroundColor, getButtonForegroundColor, getFont, getFontColor, speed, nextMenuItem, prevMenuItem) {
                var _this = _super.call(this, size, requirement) || this;
                _this.imageWidth = 0;
                _this.prevImage = null;
                _this.currImage = null;
                _this.nextImage = null;
                _this.newImage = null;
                _this.currIndex = 0;
                _this.xStart = 0;
                _this.yTopMargin = 40;
                _this.yBottomMargin = 40;
                _this.prevNextMargin = 200;
                _this.buttonWidth = 15;
                _this.halfButtonWidth = _this.buttonWidth * .5;
                // _this.buttonHeight = _this.buttonWidth * Web.Renderer.Phi;   
                _this.buttonHeight = _this.buttonWidth * 3;      //f-i changed button height
                _this.halfButtonHeight = _this.buttonHeight * .5;
                _this.buttonTriangleWidth = _this.buttonWidth / Web.Renderer.Phi;
                _this.halfButtonTriangleWidth = _this.buttonTriangleWidth * .5;
                _this.buttonTriangleHeight = _this.buttonHeight / 2;
                _this.halfButtonTriangleHeight = _this.buttonTriangleHeight * .5;   // f- triangel height
                _this.buttonXMargin = -15;
                _this.sideMargin = 10;
                _this.prevButtonRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.nextButtonRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.buttonMouseDetectMargin = 100;
                _this.alphaPrevNext = .5;
                _this.currRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.prevRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.nextRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.newNextRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.newPreviousRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.animationProgress = -1;
                _this.animatingToPrevious = false;
                _this.animatingToNext = false;
                _this.animationFadeOut = false;
                _this.animationFadeIn = false;
                _this.fadeSpeed = .05; 
                _this.animationPrevRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.animationCurrRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.animationNewCurrRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.animationNextRectangle = new Web.Rectangle(0, 0, 0, 0);
                _this.yCenterPositionPerctange = (yCenterPositionPerctange >= 0 && yCenterPositionPerctange <= 1) ? yCenterPositionPerctange : .5;
                _this.ApplyNewImages(imagePaths, imageTitles, imageClickActions);
                _this.getFrameColor = getFrameColor;
                _this.getButtonBackgroundColor = getButtonBackgroundColor;
                _this.getButtonForegroundColor = getButtonForegroundColor;
                _this.getFont = getFont;
                _this.getFontColor = getFontColor;
                _this.speed = speed;
                _this.nextMenuItem = nextMenuItem;
                _this.prevMenuItem = prevMenuItem;
                return _this;
            }
            ImageStrip.prototype.SetNewImages = function (imagePaths, imageTitles, imageClickActions) {
                if (imageClickActions === void 0) { imageClickActions = null; }
                this.newImagePaths = imagePaths;
                this.newImageTitles = imageTitles;
                this.newImageClickActions = imageClickActions;
                // Start fade-out of old collection, at end ApplyNewImages() will be done and a fade-in will start
                if (this.currImage == null) {
                    this.ApplyNewImages(this.newImagePaths, this.newImageTitles, this.newImageClickActions);
                }
                else {
                    this.animationProgress = 1;
                    this.animationFadeOut = true;
                }
            };
            ImageStrip.prototype.ApplyNewImages = function (imagePaths, imageTitles, imageClickActions) {
                if (imageClickActions === void 0) { imageClickActions = null; }
                this.currIndex = 0;
                this.imagePaths = imagePaths;
                this.imageTitles = imageTitles;
                this.imageClickActions = imageClickActions;
                this.prevImage = null;
                if (this.imagePaths.length > 0) {
                    this.currImage = new Image();
                    this.currImage.src = this.imagePaths[0];
                    if (this.imagePaths.length > 1) {
                        this.nextImage = new Image();
                        this.nextImage.src = this.imagePaths[1];
                    }
                    else {
                        this.nextImage = null;
                    }
                }
            };
            ImageStrip.prototype.Render = function (width, height) {
                // var inMg = 50;
                // // var whBackRect = new Web.Rectangle(inMg, inMg, width - inMg * 2, height - inMg * 2);
                // Web.Renderer.FillArea(inMg, inMg, width - inMg * 2, height - 2 * inMg, new Web.Color(255, 255, 255, 1));

                this.frameColor = this.getFrameColor();
                this.width = width;
                this.height = height;
                if (this.animationProgress < 0 || this.animationFadeOut || this.animationFadeIn) {
                    var buttonBackgroundColor = this.getButtonBackgroundColor();
                    var buttonForegroundColor = this.getButtonForegroundColor();
                    var currAlpha = 1;
                    var prevNextAlpha = .5;
                    if (this.animationFadeOut) {
                        currAlpha = Web.Renderer.Interpolate(1, 0, this.animationProgress);
                        prevNextAlpha = Web.Renderer.Interpolate(.5, 0, this.animationProgress);
                    }
                    else if (this.animationFadeIn) {
                        currAlpha = Web.Renderer.Interpolate(0, 1, this.animationProgress);
                        prevNextAlpha = Web.Renderer.Interpolate(0, .5, this.animationProgress);
                    }
                    var currImage = this.currImage;
                    var currImageWidth = currImage.width;
                    if (currImageWidth > 0) {
                        var prevImage = this.prevImage;
                        var nextImage = this.nextImage;
                        
                        // rect with button
                        var outMg = 50;
                        this.currRectangle = new Web.Rectangle(outMg, outMg, width - outMg , height - outMg);                // f-i changed rectangle

                        //font
                        var fontColor = new Web.Color(0, 0, 0, 1);                        
                        var wRatio = width / 1920;
                        var fontSize = 20 * wRatio;
                        var fontDetailText = new Web.Font("roboto", fontSize * 1.5, Web.FontStyle.normal, Web.FontWeight.normal);
                        var fontNormal = new Web.Font("roboto", fontSize, Web.FontStyle.normal, Web.FontWeight.normal);
                        var fontBold = new Web.Font("roboto", fontSize, Web.FontStyle.normal, Web.FontWeight.bold);


                        //grids
                        var inTop = height / 4;
                        var gridsW = width / 3;
                        var inMg = 10;
                        var border = 10; //yellow border
                        var gridW = (gridsW - inMg * 3) / 4;
                        
                        var strMemos = [
                            ["Freyung", "Hinter-\nschmiding", "Passau\nHeining", "Hohenau"],
                            ["Pocking", "Bad\nFüssing", "Passau\nhaidenhof", "Passau\nhaidenhof"],
                            ["Passau\nNeustift", "Fürstenzell", "Passau\nLudwigsplatz", "Mauth"]                            
                        ];

                        //Item
                        var dx = gridsW; //start x pos
                        var dy = inTop;

                        var dx0 = dx;
                        for (var i = 0; i < 3; i ++) {
                            for (var j = 0; j < 4; j ++) {
                                Web.Renderer.FillArea(dx0, dy, gridW, gridW, new Web.Color(255, 255, 255, 1));
                                Web.Renderer.FillArea(dx0, dy + gridW - border, gridW, border, new Web.Color(238, 102, 17, 1));
                                var text = strMemos[i][j];
                                var textW = gridW / 2;
                                var textH = fontBold.Size * 1.5;
                                var tXMg = (gridW - textW) / 2;
                                var tYMg = (gridW - textH) / 2;
                                Web.Renderer.DrawTextMultiLine(text, fontBold, dx0 + tXMg, dy + tYMg, 0, 0, fontColor);
                                dx0 += (gridW + inMg);
                            }
                            dy += (gridW + inMg);
                            dx0 = dx;
                        }
                        
                        // Web.Renderer.FillArea(gridsW, inTop, gridW, gridW, new Web.Color(255, 255, 255, 1));
                        // Web.Renderer.FillArea(gridsW, inTop + gridW - border, gridW, border, new Web.Color(238, 102, 17, 1));
                        // var text = "Freyung";
                        // var textW = Web.Renderer.MeasureText(text, fontBold).Width;
                        // var textH = Web.Renderer.MeasureText(text, fontBold).Height;
                        // var tXMg = (gridW - textW) / 2;
                        // var tYMg = (gridW - textH) / 2;                        
                        // Web.Renderer.DrawTextMultiLine(text, fontBold, dx + tXMg, dy + tYMg, 0, 0, fontColor);


                        // //Item
                        // dx += (gridW + inMg);
                        // Web.Renderer.FillArea(dx, dy, gridW, gridW, new Web.Color(255, 255, 255, 1));
                        // Web.Renderer.FillArea(dx, dy + gridW - border, gridW, border, new Web.Color(238, 102, 17, 1));
                        
                        // var text = "Hinter-\nschmiding";
                        // var textW = gridW/2;
                        // var textH = fontBold.Size * 2;
                        // var tXMg = (gridW - textW) / 2;
                        // var tYMg = (gridW - textH) / 2;                        
                        // Web.Renderer.DrawTextMultiLine(text, fontBold, dx + tXMg, dy + tYMg, 0, 0, fontColor);


                        // // Item
                        // dx += (gridW + inMg);
                        // Web.Renderer.FillArea(dx, dy, gridW, gridW, new Web.Color(255, 255, 255, 1));
                        // Web.Renderer.FillArea(dx, dy + gridW - border, gridW, border, new Web.Color(238, 102, 17, 1));
                        // var text = "Passau\nHeining";
                        // var textW = gridW/2;
                        // var textH = fontBold.Size * 2;
                        // var tXMg = (gridW - textW) / 2;
                        // var tYMg = (gridW - textH) / 2;                        
                        // Web.Renderer.DrawTextMultiLine(text, fontBold, dx + tXMg, dy + tYMg, 0, 0, fontColor);



                        
                        // Draw previous button if mouse is in the vicinity and no animation is in progress.
                        if (!Web.SetupControl.SlideshowRunning) {
                            if (prevImage != null && this.animationProgress < 0) {
                                var xPrevButton = this.currRectangle.X - this.buttonXMargin - this.buttonWidth;
                                if (xPrevButton < this.sideMargin) {
                                    xPrevButton = this.sideMargin;
                                }
                                var yPrevButton = this.currRectangle.CenterY - this.halfButtonHeight;
                                this.prevButtonRectangle.X = xPrevButton;
                                this.prevButtonRectangle.Y = yPrevButton;
                                this.prevButtonRectangle.Width = this.buttonWidth;
                                this.prevButtonRectangle.Height = this.buttonHeight;
                                // if (this.prevButtonRectangle.PointNearby(mousePoint.x, mousePoint.y, this.buttonMouseDetectMargin)) {
                                    Web.Renderer.FillRectangle(this.prevButtonRectangle, buttonBackgroundColor);
                                    var prevTriangleStartX = xPrevButton + this.halfButtonWidth - this.halfButtonTriangleWidth - 5;
                                    var prevTriangleStartY = yPrevButton + this.halfButtonHeight - this.halfButtonTriangleHeight;
                                    // Web.Renderer.FillTriangleByXY(prevTriangleStartX + this.buttonTriangleWidth, prevTriangleStartY, prevTriangleStartX, prevTriangleStartY + this.halfButtonTriangleHeight, prevTriangleStartX + this.buttonTriangleWidth, prevTriangleStartY + this.buttonTriangleHeight, buttonForegroundColor);
                                    Web.Renderer.FillTriangleByXY(prevTriangleStartX + this.buttonTriangleWidth, prevTriangleStartY, prevTriangleStartX, prevTriangleStartY + this.halfButtonTriangleHeight, prevTriangleStartX + this.buttonTriangleWidth, prevTriangleStartY + this.buttonTriangleHeight, new Web.Color(255, 255, 255, 1)); // f-i changed triangle pos
                                // }
                            }
                            else {
                                this.prevButtonRectangle.X = 0;
                                this.prevButtonRectangle.Y = 0;
                                this.prevButtonRectangle.Width = 0;
                                this.prevButtonRectangle.Height = 0;
                            }
                            // Draw next button if mouse is in the vicinity and no animation is in progress.
                            if (nextImage != null && this.animationProgress < 0) {
                                // var xNextButton = this.currRectangle.X + this.currRectangle.Width + this.buttonXMargin;
                                var xNextButton = this.currRectangle.X + width + this.buttonXMargin - 100; //f-i changed next button

                                if (xNextButton + this.buttonWidth > width - this.sideMargin) {
                                    xNextButton = width - this.sideMargin - this.buttonWidth;
                                }
                                var yNextButton = this.currRectangle.CenterY - this.halfButtonHeight;
                                this.nextButtonRectangle.X = xNextButton;
                                this.nextButtonRectangle.Y = yNextButton;
                                this.nextButtonRectangle.Width = this.buttonWidth;
                                this.nextButtonRectangle.Height = this.buttonHeight;
                                // if (this.nextButtonRectangle.PointNearby(mousePoint.x, mousePoint.y, this.buttonMouseDetectMargin)) {
                                    Web.Renderer.FillRectangle(this.nextButtonRectangle, buttonBackgroundColor);
                                    var nextTriangleStartX = xNextButton + this.halfButtonWidth - this.halfButtonTriangleWidth + 5;
                                    var nextTriangleStartY = yNextButton + this.halfButtonHeight - this.halfButtonTriangleHeight;
                                    // Web.Renderer.FillTriangleByXY(nextTriangleStartX, nextTriangleStartY, nextTriangleStartX + this.buttonTriangleWidth, nextTriangleStartY + this.halfButtonTriangleHeight, nextTriangleStartX, nextTriangleStartY + this.buttonTriangleHeight, buttonForegroundColor);
                                    Web.Renderer.FillTriangleByXY(nextTriangleStartX, nextTriangleStartY, nextTriangleStartX + this.buttonTriangleWidth, nextTriangleStartY + this.halfButtonTriangleHeight, nextTriangleStartX, nextTriangleStartY + this.buttonTriangleHeight, new Web.Color(255, 255, 255, 1)); // f-i changed triangle pos
                                // }
                            }
                            else {
                                this.nextButtonRectangle.X = 0;
                                this.nextButtonRectangle.Y = 0;
                                this.nextButtonRectangle.Width = 0;
                                this.nextButtonRectangle.Height = 0;
                            }
                        }
                    }
                    if (this.animationFadeIn || this.animationFadeOut) {
                        this.animationProgress -= this.fadeSpeed;
                        if (this.animationProgress < 0) {
                            if (this.animationFadeIn) {
                                this.animationFadeIn = false;
                            }
                            else if (this.animationFadeOut) {
                                this.ApplyNewImages(this.newImagePaths, this.newImageTitles, this.newImageClickActions);
                                this.animationProgress = 1;
                                this.animationFadeOut = false;
                                this.animationFadeIn = true;
                            }
                        }
                    }
                }
                else {
                    this.RenderAnimation();
                }
            };
            ImageStrip.prototype.RenderAnimation = function () {                
                // var fadeInAlpha = Web.Renderer.Interpolate(0, .5, this.animationProgress);
                // var toCurrAlpha = Web.Renderer.Interpolate(this.alphaPrevNext, 1, this.animationProgress);
                // var toPrevNextAlpha = Web.Renderer.Interpolate(1, this.alphaPrevNext, this.animationProgress);
                // if (this.animatingToNext) {                    
                    // if (this.newImage != null && this.newImage.width > 0) {
                    //     this.CalculateNextRectangle(this.newNextRectangle, this.width, this.height, this.nextImage, this.newImage);
                    //     Web.Renderer.DrawImageToSize(this.newImage, this.newNextRectangle.X, this.newNextRectangle.Y, this.newNextRectangle.Width, this.newNextRectangle.Height, fadeInAlpha);
                    // }
                    // Animate curr to prev
                    // var currX = Web.Renderer.Interpolate(this.animationCurrRectangle.X, this.animationPrevRectangle.X, this.animationProgress);
                    // var currY = Web.Renderer.Interpolate(this.animationCurrRectangle.Y, this.animationPrevRectangle.Y, this.animationProgress);
                    // var currWidth = Web.Renderer.Interpolate(this.animationCurrRectangle.Width, this.animationPrevRectangle.Width, this.animationProgress);
                    // var currHeight = Web.Renderer.Interpolate(this.animationCurrRectangle.Height, this.animationPrevRectangle.Height, this.animationProgress);
                    // Web.Renderer.DrawImageToSize(this.currImage, currX, currY, currWidth, currHeight, toPrevNextAlpha);
                    // this.frameColor.Alpha = toPrevNextAlpha;
                    // Web.Renderer.DrawArea(currX, currY, currWidth, currHeight, this.frameColor);

                    // Animate next to new curr
                    // var nextX = Web.Renderer.Interpolate(this.animationNextRectangle.X, this.animationNewCurrRectangle.X, this.animationProgress);
                    // var nextY = Web.Renderer.Interpolate(this.animationNextRectangle.Y, this.animationNewCurrRectangle.Y, this.animationProgress);
                    // var nextWidth = Web.Renderer.Interpolate(this.animationNextRectangle.Width, this.animationNewCurrRectangle.Width, this.animationProgress);
                    // var nextHeight = Web.Renderer.Interpolate(this.animationNextRectangle.Height, this.animationNewCurrRectangle.Height, this.animationProgress);
                    // Web.Renderer.DrawImageToSize(this.nextImage, nextX, nextY, nextWidth, nextHeight, toCurrAlpha);
                    // this.frameColor.Alpha = toCurrAlpha;
                    // Web.Renderer.DrawArea(nextX, nextY, nextWidth, nextHeight, this.frameColor);
                // }
                // else if (this.animatingToPrevious) {
                    // if (this.newImage != null && this.newImage.width > 0) {
                    //     this.CalculatePrevRectangle(this.newPreviousRectangle, this.width, this.height, this.newImage, this.prevImage);
                    //     Web.Renderer.DrawImageToSize(this.newImage, this.newPreviousRectangle.X, this.newPreviousRectangle.Y, this.newPreviousRectangle.Width, this.newPreviousRectangle.Height, fadeInAlpha);
                    // }
                    // Animate prev to new curr
                    // var prevX = Web.Renderer.Interpolate(this.animationPrevRectangle.X, this.animationNewCurrRectangle.X, this.animationProgress);
                    // var prevY = Web.Renderer.Interpolate(this.animationPrevRectangle.Y, this.animationNewCurrRectangle.Y, this.animationProgress);
                    // var prevWidth = Web.Renderer.Interpolate(this.animationPrevRectangle.Width, this.animationNewCurrRectangle.Width, this.animationProgress);
                    // var prevHeight = Web.Renderer.Interpolate(this.animationPrevRectangle.Height, this.animationNewCurrRectangle.Height, this.animationProgress);
                    // Web.Renderer.DrawImageToSize(this.prevImage, prevX, prevY, prevWidth, prevHeight, toCurrAlpha);
                    // this.frameColor.Alpha = toCurrAlpha;
                    // Web.Renderer.DrawArea(prevX, prevY, prevWidth, prevHeight, this.frameColor);

                    // Animate current to next
                    // var toNextX = Web.Renderer.Interpolate(this.animationCurrRectangle.X, this.animationNextRectangle.X, this.animationProgress);
                    // var toNextY = Web.Renderer.Interpolate(this.animationCurrRectangle.Y, this.animationNextRectangle.Y, this.animationProgress);
                    // var toNextWidth = Web.Renderer.Interpolate(this.animationCurrRectangle.Width, this.animationNextRectangle.Width, this.animationProgress);
                    // var toNextHeight = Web.Renderer.Interpolate(this.animationCurrRectangle.Height, this.animationNextRectangle.Height, this.animationProgress);
                    // Web.Renderer.DrawImageToSize(this.currImage, toNextX, toNextY, toNextWidth, toNextHeight, toPrevNextAlpha);
                    // this.frameColor.Alpha = toPrevNextAlpha;
                    // Web.Renderer.DrawArea(toNextX, toNextY, toNextWidth, toNextHeight, this.frameColor);
                // }
                
                this.animationProgress -= this.speed;
                if (this.animationProgress < 0) {
                    if (this.animatingToPrevious) {
                        this.EndAnimationPrev();
                    }
                    else if (this.animatingToNext) {
                        this.EndAnimationNext();
                    }
                }
            };
            ImageStrip.prototype.NextImage = function (imageStrip) {                
                if (imageStrip.nextImage != null && imageStrip.nextImage.width > 0) {
                    imageStrip.NextButtonClicked();
                    return true;
                }
                return false;
            };
            ImageStrip.prototype.HitTest = function (width, height, mouseEvent) {                
                if (!Web.SetupControl.SlideshowRunning) {
                    if (this.animationProgress < 0) {
                        if (Web.Renderer.swipedLeft) {
                            if (this.prevImage != null && this.prevImage.width > 0) {
                                this.PreviousButtonClicked();
                            }
                            else {
                                // this.prevMenuItem(Web.SetupControl.Menu);
                            }
                            // Handled
                            Web.Renderer.swipedLeft = false;
                        }
                        else if (Web.Renderer.swipedRight) {
                            if (this.nextImage != null && this.nextImage.width > 0) {
                                this.NextButtonClicked();
                            }
                            else {
                                // this.nextMenuItem(Web.SetupControl.Menu);
                            }
                            // Handled
                            Web.Renderer.swipedRight = false;
                        }
                        else {
                            var mousePoint = Web.Renderer.MouseToAutoDrawing(this);
                            if (this.prevButtonRectangle.Width > 0 && this.prevButtonRectangle.PointInside(mousePoint.x, mousePoint.y)) {
                                Web.Renderer.FillRectangle(this.prevButtonRectangle, Web.Renderer.HighlightColor);
                                // which (0=nothing, 1=left, 2=wheel, 3=right)
                                if (Web.Renderer.MouseClicked) {
                                    this.PreviousButtonClicked();
                                }
                            }
                            else if (this.nextButtonRectangle.Width > 0 && this.nextButtonRectangle.PointInside(mousePoint.x, mousePoint.y)) {
                                Web.Renderer.FillRectangle(this.nextButtonRectangle, Web.Renderer.HighlightColor);
                                // which (0=nothing, 1=left, 2=wheel, 3=right)
                                if (Web.Renderer.MouseClicked) {
                                    this.NextButtonClicked();
                                }
                            }
                            else if (this.currImageClickAction != null) {
                                if (this.currRectangle.PointInside(mousePoint.x, mousePoint.y)) {
                                    Web.Renderer.FillRectangle(this.currRectangle, Web.Renderer.HighlightColor);
                                    if (Web.Renderer.MouseClicked) {
                                        this.currImageClickAction();
                                        //SetupControl.SendMail();
                                    }
                                }
                            }
                        }
                    }
                }
                return false;
            };
            ImageStrip.prototype.CalculateCurrRectangle = function (rectangle, width, height, currImage) {
                // var currImageHeight = currImage.height;
                // var availableHeight = height - this.yTopMargin - this.yBottomMargin;
                // var centerX = width * .5;
                // var centerY = this.yTopMargin + (availableHeight * this.yCenterPositionPerctange);
                // var targetWidth = currImage.width;
                // var targetHeight = currImageHeight;

                // if (targetWidth > width || targetHeight > availableHeight) {
                //     var widthRatio = width / targetWidth;
                //     var heightRatio = availableHeight / targetHeight;
                //     var sizeRatio = Math.min(widthRatio, heightRatio);
                //     targetWidth *= sizeRatio;
                //     targetHeight *= sizeRatio;
                // }
                // var x = centerX - (targetWidth * .5);
                // var y = centerY - (targetHeight * .5);
                // rectangle.X = x;
                // rectangle.Y = y;
                // rectangle.Width = targetWidth;
                // rectangle.Height = targetHeight;
            };
            // Calculate the x/y position of a previous image for a given set of previous and current image
            ImageStrip.prototype.CalculatePrevRectangle = function (rectangle, width, height, prevImage, currImage) {
                if (prevImage == null || currImage == null) {
                    rectangle.X = 0;
                    rectangle.Y = 0;
                    rectangle.Width = 0;
                    rectangle.Height = 0;
                }
                else {
                    var currImageWidth = currImage.width;
                    var currImageHeight = currImage.height;
                    var centerX = width * .5;
                    var availableHeight = height - this.yTopMargin - this.yBottomMargin;
                    var centerY = this.yTopMargin + (availableHeight * this.yCenterPositionPerctange);
                    var targetWidth = currImageWidth;
                    var targetHeight = currImageHeight;
                    if (targetWidth > width || targetHeight > availableHeight) {
                        var widthRatio = width / targetWidth;
                        var heightRatio = availableHeight / targetHeight;
                        var sizeRatio = Math.min(widthRatio, heightRatio);
                        targetWidth *= sizeRatio;
                        targetHeight *= sizeRatio;
                    }
                    var x = centerX - (targetWidth * .5);
                    var currEndx = x + targetWidth;
                    var prevNextTargetHeight = targetHeight * .75;
                    var prevImageWidth = prevImage.width;
                    var prevImageHeight = prevImage.height;
                    var prevHeight = (prevImageHeight > prevNextTargetHeight) ? prevNextTargetHeight : prevImageHeight;
                    var prevSizeRatio = prevHeight / prevImageHeight;
                    var prevWidth = prevImageWidth * prevSizeRatio;
                    var prevX = x - this.prevNextMargin;
                    if (prevX + prevWidth > currEndx) {
                        var adjustSize = (targetWidth + this.prevNextMargin) / prevWidth;
                        prevHeight *= adjustSize;
                        prevWidth *= adjustSize;
                    }
                    var prevY = centerY - (prevHeight * .5);
                    rectangle.X = prevX;
                    rectangle.Y = prevY;
                    rectangle.Width = prevWidth;
                    rectangle.Height = prevHeight;
                }
            };
            // Calculate the x/y position of a next image for a given set of current and next image
            ImageStrip.prototype.CalculateNextRectangle = function (rectangle, width, height, currImage, nextImage) {
                if (nextImage == null || currImage == null) {
                    rectangle.X = 0;
                    rectangle.Y = 0;
                    rectangle.Width = 0;
                    rectangle.Height = 0;
                }
                else {
                    var currImageWidth = currImage.width;
                    var currImageHeight = currImage.height;
                    var centerX = width * .5;
                    var availableHeight = height - this.yTopMargin - this.yBottomMargin;
                    var centerY = this.yTopMargin + (availableHeight * this.yCenterPositionPerctange);
                    var targetWidth = currImageWidth;
                    var targetHeight = currImageHeight;
                    if (targetWidth > width || targetHeight > availableHeight) {
                        var widthRatio = width / targetWidth;
                        var heightRatio = availableHeight / targetHeight;
                        var sizeRatio = Math.min(widthRatio, heightRatio);
                        targetWidth *= sizeRatio;
                        targetHeight *= sizeRatio;
                    }
                    var x = centerX - (targetWidth * .5);
                    var currEndx = x + targetWidth;
                    var prevNextTargetHeight = targetHeight * .75;
                    var nextImageWidth = nextImage.width;
                    var nextImageHeight = nextImage.height;
                    var nextHeight = (nextImageHeight > prevNextTargetHeight) ? prevNextTargetHeight : nextImageHeight;
                    var nextSizeRatio = nextHeight / nextImageHeight;
                    var nextWidth = nextImageWidth * nextSizeRatio;
                    var nextX = currEndx + this.prevNextMargin - nextWidth;
                    if (nextX < x) {
                        var resize = (targetWidth + this.prevNextMargin) / nextWidth;
                        nextWidth *= resize;
                        nextHeight *= resize;
                        nextX = x;
                    }
                    var nextY = centerY - (nextHeight * .5);
                    rectangle.X = nextX;
                    rectangle.Y = nextY;
                    rectangle.Width = nextWidth;
                    rectangle.Height = nextHeight;
                }
            };
            Object.defineProperty(ImageStrip.prototype, "AnimationInProgress", {
                get: function () {
                    return this.animationProgress > 0;
                },
                enumerable: true,
                configurable: true
            });
            ImageStrip.prototype.PreviousButtonClicked = function () {
                if (this.prevImage != null && this.prevImage.width > 0) {
                    var newIndex = this.currIndex - 2;
                    if (newIndex >= 0) {
                        this.newImage = new Image();
                        this.newImage.src = this.imagePaths[newIndex];
                    }
                    else {
                        this.newImage = null;
                    }
                    if (Web.Renderer.AverageFrameRateOk) {
                        this.animationProgress = 1;
                        this.animatingToPrevious = true;
                        this.CalculatePrevRectangle(this.animationPrevRectangle, this.width, this.height, this.prevImage, this.currImage);
                        this.CalculateCurrRectangle(this.animationCurrRectangle, this.width, this.height, this.currImage);
                        this.CalculateCurrRectangle(this.animationNewCurrRectangle, this.width, this.height, this.prevImage);
                        this.CalculateNextRectangle(this.animationNextRectangle, this.width, this.height, this.prevImage, this.currImage);
                    }
                    else {
                        this.EndAnimationPrev();
                    }
                }
            };
            ImageStrip.prototype.NextButtonClicked = function () {
                if (this.nextImage != null && this.nextImage.width > 0) {
                    var newIndex = this.currIndex + 2;
                    if (newIndex < this.imagePaths.length) {
                        this.newImage = new Image();
                        this.newImage.src = this.imagePaths[newIndex];
                    }
                    else {
                        this.newImage = null;
                    }
                    if (Web.Renderer.AverageFrameRateOk) {
                        this.animationProgress = 1;
                        this.animatingToNext = true;
                        this.CalculatePrevRectangle(this.animationPrevRectangle, this.width, this.height, this.currImage, this.nextImage);
                        this.CalculateCurrRectangle(this.animationCurrRectangle, this.width, this.height, this.currImage);
                        this.CalculateCurrRectangle(this.animationNewCurrRectangle, this.width, this.height, this.nextImage);
                        this.CalculateNextRectangle(this.animationNextRectangle, this.width, this.height, this.currImage, this.nextImage);
                    }
                    else {
                        this.EndAnimationNext();
                    }
                }
            };
            ImageStrip.prototype.EndAnimationPrev = function () {
                this.currIndex--;
                this.nextImage = this.currImage;
                this.currImage = this.prevImage;
                this.prevImage = this.newImage;
                this.animatingToPrevious = false;
            };
            ImageStrip.prototype.EndAnimationNext = function () {
                this.currIndex++;
                this.prevImage = this.currImage;
                this.currImage = this.nextImage;
                this.nextImage = this.newImage;
                this.animatingToNext = false;
            };
            return ImageStrip;
        }(Web.AutoDrawingBase));
        Web.ImageStrip = ImageStrip;



        var StaticValues = /** @class */ (function (_super) {
            __extends(StaticValues, _super);
            function StaticValues(size, requirement, imagePath, width, height, mainRect = null, margin = null, inPos = null) {
                var _this = _super.call(this, size, requirement) || this;
                _this.StaticValues = null;
                _this.Width = width;
                _this.Height = height;                
                _this.markImage = new Image();
                _this.psImage = new Image();
                _this.qrImage = new Image();                
                _this.markImage.src = "/Images/buildings/vr-mark.png";
                _this.psImage.src = "/Images/buildings/ps_mark.png";
                _this.qrImage.src = "/Images/buildings/qr.png";
                // _this.InPos = inPos;
                return _this;
            }            
            StaticValues.prototype.Render = function (width, height) {
                if (this.markImage.width > 0 && this.psImage.width > 0 && this.qrImage.width > 0) {
                    var outMg = width / 20;
                    var inRect = new Web.Rectangle(outMg, outMg, width - outMg * 2, height - outMg * 2);
                    var imgW = width / 12, imgH = height / 15;
                    Web.Renderer.DrawImageToSize(this.psImage, inRect.Left, inRect.Bottom - imgH, imgW, imgH, 1);

                    var imgW = width / 20, imgH = imgW;
                    var rightMg = width / 6;
                    Web.Renderer.DrawImageToSize(this.qrImage, inRect.Right - rightMg, inRect.Bottom - imgH, imgW, imgH, 1);

                    //font
                    var fontColor = new Web.Color(255, 255, 255, 1);                        
                    var wRatio = width / 1920;
                    var fontSize = 18 * wRatio;                    
                    var fontDetailText = new Web.Font("roboto", fontSize * 1.5, Web.FontStyle.normal, Web.FontWeight.normal);
                    var fontNormal = new Web.Font("roboto", fontSize, Web.FontStyle.normal, Web.FontWeight.normal);
                    var fontBold = new Web.Font("roboto", fontSize, Web.FontStyle.normal, Web.FontWeight.bold);
                    var tPad = fontSize / 3;

                    var text = "Ein Service der HOMEINFO, Hannover \nDigitale Informationssysteme GmbH\n0511 / 21 24 11 00\nwww.homeinfo.de";
                    Web.Renderer.DrawTextMultiLine(text, fontBold, inRect.Right - rightMg + imgW + tPad, inRect.Bottom - imgH + tPad, 0, 0, fontColor);

                    // // Top mark icon
                    // var rightPanel = new Web.Rectangle((width - 100) * .7 + 50, 50, (width - 100) * .3, height - 100);
                    // var rightMargin = 20;
                    // Web.Renderer.DrawImageToSize(this.markImage,
                    //     rightPanel.Right - rightMargin - this.Width, rightPanel.Top + rightMargin,
                    //     this.Width, this.Height, 
                    // 1);

                    // // Bottom text and Image
                    // var bottomPanel = new Web.Rectangle(50, height - 50, width - 100, 50);
                    // var bottomMargin = 20;
                    // var fontColor = new Web.Color(255, 255, 255, 1);
                    // // var fontNormal = new Web.Font("roboto", 10, Web.FontStyle.normal, Web.FontWeight.normal);
                    // var fontBold = new Web.Font("roboto", 10, Web.FontStyle.normal, Web.FontWeight.bold);

                    // var text = "Newsticker - Die neusten News aus aller Welt - jederzeit auf dem PinScreen - Tolle Sache - Newsticker - Die neusten News aus aller Welt - jederzeit auf dem PinScreen - Tolle Sache -";
                    // Web.Renderer.DrawTextMultiLine(text, fontBold, bottomPanel.x, bottomPanel.y + bottomMargin, 200, 200, fontColor);

                    // Bottom sp image
                    // w = 40, h = 25, mrg = 15;
                    // Web.Renderer.DrawImageToSize(this.psImage, bottomPanel.Right - w + mrg, bottomPanel.Top + mrg, w, h, 1);
                }
            };
            return StaticValues;
        }(Web.AutoDrawingBase));
        Web.StaticValues = StaticValues;

    })(Web = Estates.Web || (Estates.Web = {}));
})(Estates || (Estates = {}));
/// <reference path="AutoDrawingBase.ts"/>






window.onload = function () {
    Estates.Web.SetupControl.Initialize(window, document);
    Estates.Web.Renderer.Render();
};
window.onresize = function () {
    if (Estates.Web.Renderer.Canvas != null) {
        var clientWidth = window.innerWidth;
        var clientHeight = window.innerHeight;
        Estates.Web.Renderer.ResizeCanvas(clientWidth, clientHeight);
    }
};