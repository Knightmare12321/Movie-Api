/////////////////////////////////////////////////////
/////////////////////  ICON 3  //////////////////////
/////////////////////////////////////////////////////

//Animation Source: https://codepen.io/matthewmain/pen/NWKoPXJ
var AJS = {

	linear: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall
		return t*(c/d) + b;
	},

	easeInQuad: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall
		return c*(t/=d)*t + b;
	},

	easeOutQuad: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c *(t/=d)*(t-2) + b;
	},

	easeInOutQuad: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},

	easeInCubic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*(t/=d)*t*t + b;
	},

	easeOutCubic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall		
		return c*((t=t/d-1)*t*t + 1) + b;
	},

	easeInOutCubic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},

	easeInQuart: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*(t/=d)*t*t*t + b;
	},

	easeOutQuart: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},

	easeInOutQuart: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},

	easeInQuint: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*(t/=d)*t*t*t*t + b;
	},

	easeOutQuint: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},

	easeInOutQuint: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},

	easeInSine: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},

	easeOutSine: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},

	easeInOutSine: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},

	easeInExpo: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},

	easeOutExpo: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},

	easeInOutExpo: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},

	easeInCirc: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},

	easeOutCirc: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},

	easeInOutCirc: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},

	easeInElastic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},

	easeOutElastic: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},

	easeInOutElastic: function( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall
		var s=1.70158, p=0, a=c;
		if (t==0) return b;  
		if ((t/=d/2)==2) return b+c;  
		if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; } else { var s = p/(2*Math.PI) * Math.asin (c/a) }
		if (t < 1) { return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b }
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;	
	},

	easeInBack: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},

	easeOutBack: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},

	easeInOutBack: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},

	easeOutBounce: function ( beginningValue, endValue, durationInFrames, framesElapsed, delayInFrames=0 ) {
		var t = framesElapsed - delayInFrames < 0 ? 0 : framesElapsed;  // time since start (as frames elapsed)
		var b = beginningValue;  // beginning value
		var c = endValue - beginningValue;  //  change in value overall
		var d = durationInFrames;  // duration (in frames) overall	
		var p = t/d;  // progress ratio
		if (p < (1/2.75)) {
			return c*(7.5625*p*p) + b;
		} else if (p < (2/2.75)) {
			return c*(7.5625*(p-=(1.5/2.75))*p + .75) + b;
		} else if (p < (2.5/2.75)) {
			return c*(7.5625*(p-=(2.25/2.75))*p + .9375) + b;
		} else {
			return c*(7.5625*(p-=(2.625/2.75))*p + .984375) + b;
		}
	},

}

export function animateHamburger() {
  ///Initiation Variables
  var icon_3 = document.getElementById("b3");
  var topLine_3 = document.getElementById("top-line-3");
  var middleLine_3 = document.getElementById("middle-line-3");
  var bottomLine_3 = document.getElementById("bottom-line-3");
  var state_3 = "menu"; // can be "menu" or "cross"
  var topLineY_3;
  var middleLineY_3;
  var bottomLineY_3;
  var topLeftX_3;
  var topRightX_3;
  var middleLeftX_3;
  var middleRightX_3;
  var bottomLeftX_3;
  var bottomRightX_3;
  var topLeftY_3;
  var topRightY_3;
  var middleLeftY_3;
  var middleRightY_3;
  var bottomLeftY_3;
  var bottomRightY_3;

  ///Animation Variables
  var segmentDuration_3 = 20;
  var menuDisappearDurationInFrames_3 = segmentDuration_3;
  var crossAppearDurationInFrames_3 = segmentDuration_3 * 1.5;
  var crossDisappearDurationInFrames_3 = segmentDuration_3 * 1.5;
  var menuAppearDurationInFrames_3 = segmentDuration_3;
  var menuDisappearComplete_3 = false;
  var crossAppearComplete_3 = false;
  var crossDisappearComplete_3 = true;
  var menuAppearComplete_3 = true;
  var currentFrame_3 = 0;
  var cPt_3 = { x: 50, y: 50 }; // center point
  var tlPt_3 = { x: 30, y: 37 }; // top right point
  var trPt_3 = { x: 70, y: 37 }; // top left point
  var mlPt_3 = { x: 30, y: 50 }; // middle right point
  var mrPt_3 = { x: 70, y: 50 }; // middle left point
  var blPt_3 = { x: 30, y: 63 }; // bottom right point
  var brPt_3 = { x: 70, y: 63 }; // bottom left point
  var topLineOpacity_3 = 1;
  var middleLineOpacity_3 = 1;
  var bottomLineOpacity_3 = 1;

  ///Position Rotation
  function positionRotation(centerPoint, orbitPoint, angleInRads) {
    var distance = Math.sqrt(
      Math.pow(orbitPoint.x - centerPoint.x, 2) +
        Math.pow(orbitPoint.y - centerPoint.y, 2)
    );
    orbitPoint.x = centerPoint.x + Math.cos(angleInRads) * distance;
    orbitPoint.y = centerPoint.y + Math.sin(angleInRads) * distance;
  }

  ///Menu Disappear
  function menuDisappearAnimation_3() {
    currentFrame_3++;
    if (currentFrame_3 <= menuDisappearDurationInFrames_3) {
      window.requestAnimationFrame(() => {
        var rotation = Math.PI * 0.5;
        //top line
        var tlAng = AJS.easeInBack(
          3.7179,
          3.7179 + rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        var trAng = AJS.easeInBack(
          5.7068,
          5.7068 + rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        positionRotation(cPt_3, tlPt_3, tlAng);
        positionRotation(cPt_3, trPt_3, trAng);
        topLine_3.setAttribute(
          "d",
          "M" +
            tlPt_3.x +
            "," +
            tlPt_3.y +
            " L" +
            trPt_3.x +
            "," +
            trPt_3.y +
            " Z"
        );
        //middle line
        var mlAng = AJS.easeInBack(
          Math.PI,
          Math.PI + rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        var mrAng = AJS.easeInBack(
          0,
          rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        positionRotation(cPt_3, mlPt_3, mlAng);
        positionRotation(cPt_3, mrPt_3, mrAng);
        middleLine_3.setAttribute(
          "d",
          "M" +
            mlPt_3.x +
            "," +
            mlPt_3.y +
            " L" +
            mrPt_3.x +
            "," +
            mrPt_3.y +
            " Z"
        );
        //bottom line
        var blAng = AJS.easeInBack(
          2.5652,
          2.5652 + rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        var brAng = AJS.easeInBack(
          0.5763,
          0.5763 + rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        positionRotation(cPt_3, blPt_3, blAng);
        positionRotation(cPt_3, brPt_3, brAng);
        bottomLine_3.setAttribute(
          "d",
          "M" +
            blPt_3.x +
            "," +
            blPt_3.y +
            " L" +
            brPt_3.x +
            "," +
            brPt_3.y +
            " Z"
        );
        //recursion
        menuDisappearAnimation_3();
      });
    } else {
      currentFrame_3 = 0;
      menuDisappearComplete_3 = true;
      openMenuAnimation_3();
    }
  }

  ///Cross Appear
  function crossAppearAnimation_3() {
    currentFrame_3++;
    if (currentFrame_3 <= crossAppearDurationInFrames_3) {
      tlPt_3 = { x: 50, y: 28.7867 };
      trPt_3 = { x: 50, y: 71.2132 };
      mlPt_3 = { x: 28.7867, y: 50 };
      mrPt_3 = { x: 71.2132, y: 50 };
      window.requestAnimationFrame(() => {
        var rotation = Math.PI * 0.75;
        //top line
        var tlAng = AJS.easeOutBack(
          Math.PI,
          Math.PI + rotation,
          crossAppearDurationInFrames_3,
          currentFrame_3
        );
        var trAng = AJS.easeOutBack(
          0,
          rotation,
          crossAppearDurationInFrames_3,
          currentFrame_3
        );
        positionRotation(cPt_3, tlPt_3, tlAng);
        positionRotation(cPt_3, trPt_3, trAng);
        topLine_3.setAttribute(
          "d",
          "M" +
            tlPt_3.x +
            "," +
            tlPt_3.y +
            " L" +
            trPt_3.x +
            "," +
            trPt_3.y +
            " Z"
        );
        //center line
        var mlAng = AJS.easeOutBack(
          Math.PI * 1.5,
          Math.PI * 1.5 + rotation,
          crossAppearDurationInFrames_3,
          currentFrame_3
        );
        var mrAng = AJS.easeOutBack(
          Math.PI * 0.5,
          Math.PI * 0.5 + rotation,
          crossAppearDurationInFrames_3,
          currentFrame_3
        );
        positionRotation(cPt_3, mlPt_3, mlAng);
        positionRotation(cPt_3, mrPt_3, mrAng);
        middleLine_3.setAttribute(
          "d",
          "M" +
            mlPt_3.x +
            "," +
            mlPt_3.y +
            " L" +
            mrPt_3.x +
            "," +
            mrPt_3.y +
            " Z"
        );
        //bottom line
        bottomLine_3.style.opacity = 0;
        //recursion
        crossAppearAnimation_3();
      });
    } else {
      currentFrame_3 = 0;
      crossAppearComplete_3 = true;
      openMenuAnimation_3();
    }
  }

  ///Combined Open Menu Animation
  function openMenuAnimation_3() {
    if (!menuDisappearComplete_3) {
      menuDisappearAnimation_3();
    } else if (!crossAppearComplete_3) {
      crossAppearAnimation_3();
    }
  }

  ///Cross Disappear
  function crossDisappearAnimation_3() {
    currentFrame_3++;
    if (currentFrame_3 <= crossDisappearDurationInFrames_3) {
      window.requestAnimationFrame(() => {
        var rotation = Math.PI * 0.75;
        //top line
        var tlAng = AJS.easeInBack(
          Math.PI * 1.75,
          Math.PI * 1.75 + rotation,
          crossDisappearDurationInFrames_3,
          currentFrame_3
        );
        var trAng = AJS.easeInBack(
          Math.PI * 0.75,
          Math.PI * 0.75 + rotation,
          crossDisappearDurationInFrames_3,
          currentFrame_3
        );
        positionRotation(cPt_3, tlPt_3, tlAng);
        positionRotation(cPt_3, trPt_3, trAng);
        topLine_3.setAttribute(
          "d",
          "M" +
            tlPt_3.x +
            "," +
            tlPt_3.y +
            " L" +
            trPt_3.x +
            "," +
            trPt_3.y +
            " Z"
        );
        //center line
        var mlAng = AJS.easeInBack(
          Math.PI * 2.25,
          Math.PI * 2.25 + rotation,
          crossDisappearDurationInFrames_3,
          currentFrame_3
        );
        var mrAng = AJS.easeInBack(
          Math.PI * 1.25,
          Math.PI * 1.25 + rotation,
          crossDisappearDurationInFrames_3,
          currentFrame_3
        );
        positionRotation(cPt_3, mlPt_3, mlAng);
        positionRotation(cPt_3, mrPt_3, mrAng);
        middleLine_3.setAttribute(
          "d",
          "M" +
            mlPt_3.x +
            "," +
            mlPt_3.y +
            " L" +
            mrPt_3.x +
            "," +
            mrPt_3.y +
            " Z"
        );
        //bottom line
        bottomLine_3.style.opacity = 0;
        //recursion
        crossDisappearAnimation_3();
      });
    } else {
      middleLine_3.style.opacity = "1";
      currentFrame_3 = 0;
      crossDisappearComplete_3 = true;
      closeMenuAnimation_3();
    }
  }

  ///Menu Appear
  function menuAppearAnimation_3() {
    currentFrame_3++;
    if (currentFrame_3 <= menuAppearDurationInFrames_3) {
      tlPt_3 = { x: 37, y: 70 };
      trPt_3 = { x: 37, y: 30 };
      mlPt_3 = { x: 50, y: 70 };
      mrPt_3 = { x: 50, y: 30 };
      bottomLine_3.style.opacity = 1;
      window.requestAnimationFrame(() => {
        var rotation = Math.PI * 0.5;
        //top line
        var tlAng = AJS.easeOutBack(
          2.1471,
          2.1471 + rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        var trAng = AJS.easeOutBack(
          4.136,
          4.136 + rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        positionRotation(cPt_3, tlPt_3, tlAng);
        positionRotation(cPt_3, trPt_3, trAng);
        topLine_3.setAttribute(
          "d",
          "M" +
            tlPt_3.x +
            "," +
            tlPt_3.y +
            " L" +
            trPt_3.x +
            "," +
            trPt_3.y +
            " Z"
        );
        //middle line
        var mlAng = AJS.easeOutBack(
          Math.PI * 0.5,
          Math.PI * 0.5 + rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        var mrAng = AJS.easeOutBack(
          Math.PI * 1.5,
          Math.PI * 1.5 + rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        positionRotation(cPt_3, mlPt_3, mlAng);
        positionRotation(cPt_3, mrPt_3, mrAng);
        middleLine_3.setAttribute(
          "d",
          "M" +
            mlPt_3.x +
            "," +
            mlPt_3.y +
            " L" +
            mrPt_3.x +
            "," +
            mrPt_3.y +
            " Z"
        );
        //bottom line
        var blAng = AJS.easeOutBack(
          0.9944,
          0.9944 + rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        var brAng = AJS.easeOutBack(
          5.2887,
          5.2887 + rotation,
          menuDisappearDurationInFrames_3,
          currentFrame_3
        );
        positionRotation(cPt_3, blPt_3, blAng);
        positionRotation(cPt_3, brPt_3, brAng);
        bottomLine_3.setAttribute(
          "d",
          "M" +
            blPt_3.x +
            "," +
            blPt_3.y +
            " L" +
            brPt_3.x +
            "," +
            brPt_3.y +
            " Z" 
        );
        //recursion
        menuAppearAnimation_3();
      });
    } else {
      currentFrame_3 = 0;
      menuAppearComplete_3 = true;
    }
  }

  ///Close Menu Animation
  function closeMenuAnimation_3() {
    if (!crossDisappearComplete_3) {
      crossDisappearAnimation_3();
    } else if (!menuAppearComplete_3) {
      menuAppearAnimation_3();
    }
  }

  ///Events
  icon_3.addEventListener("click", () => {
    if (state_3 === "menu") {
      openMenuAnimation_3();
      state_3 = "cross";
      crossDisappearComplete_3 = false;
      menuAppearComplete_3 = false;
    } else if (state_3 === "cross") {
      closeMenuAnimation_3();
      state_3 = "menu";
      menuDisappearComplete_3 = false;
      crossAppearComplete_3 = false;
    }
  });
}
