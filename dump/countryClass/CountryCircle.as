package countryClass
{
	// This Object inherits properties of the SPrite object
	import flash.display.Sprite; 
	
	public class CountryCircle extends Sprite // This class will include all of the functionlity of the sprite class
	{
	import flash.display.*;
	import flash.text.*;
	import fl.transitions.*;
	import fl.transitions.easing.*;

	////////////PROPERTIES////////////
	// available to access to classes statement calls outside this class
	public var countryName:String;
	public var xmlData:XML;
	public var medals:uint;
	public var gold:uint;
	public var silver:uint;
	public var bronze:uint;	

	// access is limited to this class
	private var countryColor;
	private var countryTextField = new TextField();
	private var labelFormat:TextFormat = new TextFormat();
	
	// This is a constructor, and instantiates the class to an initial state
	public function CountryCircle(countryData:XML):void{ // this function takes an xml object that contains all of the data for 1 country
		countryName = countryData.@id;
		countryColor = countryData.@color;
		xmlData = countryData;

		labelFormat.font = "Arial";
        labelFormat.color = 0xffffff;
        labelFormat.size = 12;

		// Couuntry name label
		countryTextField.text = countryName;
		countryTextField.type = TextFieldType.DYNAMIC; 
		countryTextField.autoSize = TextFieldAutoSize.CENTER;
		countryTextField.border = false;
		countryTextField.x = -17;//The registration point is 0,0, I found I had to tweak the location to center the text
		countryTextField.y = -10; // ditto
		countryTextField.visible = true;
		countryTextField.wordWrap = false;
		countryTextField.mouseEnabled = false; // to avoid having the textfield be seen as the object of a mouseover (rather than the circle)
		countryTextField.setTextFormat(labelFormat); // this gives the text in the text field the font, color and size defined by 'labelFormat'
		addChild(countryTextField);	// this adds the countryTextField object to the CountryCircle object
	}
	
	
	//////////METHODS//////////////////
	
	// Redraws the country given the year and view
	public function drawIt(currentYear,currentView):void{
		graphics.beginFill(countryColor); 
		graphics.drawCircle(0,0,xmlData.year.(@id==currentYear).radius); 
		graphics.endFill();
		x = xmlData.year.(@id==currentYear).geographic.x; // get the x position from the xml file (defaults to the 'geographic' view position)
		y = xmlData.year.(@id==currentYear).geographic.y; // get the y position from the xml file (defaults to the 'geographic' view position)
		updateMedals(currentYear); // This triggers the function which populates the medal count properties for the InfoBox
	}
	
	public function transitionTween(currentView, currentYear):void{ 

		// Transitions the country from one size to another
			var myTweenHeight:Tween = new Tween(this, "height", Regular.easeOut, height, xmlData.year.(@id==currentYear).radius*2, 4, true);
			var myTweenWidth:Tween = new Tween(this, "width", Regular.easeOut, width, xmlData.year.(@id==currentYear).radius*2, 4, true);
			
		// Tweens position based on view
		if (currentView == 'ranking'){
			var myTweenx:Tween = new Tween(this, "x", Regular.easeOut, x, xmlData.year.(@id==currentYear).ranking.x, 4, true); // Tween(obj, prop, func, begin, finish, duration, useSeconds)
   			var myTweeny:Tween = new Tween(this, "y", Regular.easeOut, y, xmlData.year.(@id==currentYear).ranking.y, 4, true);
		}else{
			var yourTweenx:Tween = new Tween(this, "x", Regular.easeOut, x, xmlData.year.(@id==currentYear).geographic.x, 4, true); // Tween(obj, prop, func, begin, finish, duration, useSeconds)
			var yourTweeny:Tween = new Tween(this, "y", Regular.easeOut, y, xmlData.year.(@id==currentYear).geographic.y, 4, true);
		}
		updateMedals(currentYear); 
	}
	
	
	// updates the medals depending on the year
	private function updateMedals(currentYear):void{ 
		medals = xmlData.year.(@id==currentYear).totalMedals;
		gold = xmlData.year.(@id==currentYear).goldMedals;
		silver = xmlData.year.(@id==currentYear).silverMedals;
		bronze = xmlData.year.(@id==currentYear).bronzeMedals;
	}
	}
	
}