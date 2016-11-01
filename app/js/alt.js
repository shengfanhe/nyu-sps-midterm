function ListController( $scope ) {
// scope is the glue between your backend data and HTML
	$scope.entries = [
	 {
       "title": "The Empire State Building is a 102-story skyscraper located in Midtown Manhattan, New York City, on Fifth Avenue between West 33rd and 34th Streets. It has a roof height of 1,250 feet (381 m), and with its antenna spire included, it stands a total of 1,454 feet (443 m) high. Its name is derived from the nickname for New York, the Empire State. It stood as the world's tallest building for nearly 40 years, from its completion in early 1931 until the topping out of the original World Trade Center's North Tower in late 1970. The Empire State Building is an American cultural icon. It is designed in the distinctive Art Deco style and has been named as one of the Seven Wonders of the Modern World by the American Society of Civil Engineers. In 2007, it was ranked number one on the AIA's List of America's Favorite Architecture.",
       "name": "Yellow Pagoda",
       "picture": ["pagoda-tn.jpg", "pagoda.jpg"]
   },
   {
        "title": "The Flatiron Building, originally the Fuller Building, is a triangular 22-story steel-framed landmarked building located at 175 Fifth Avenue in the borough of Manhattan, New York City, and is considered to be a groundbreaking skyscraper. Upon completion in 1902, it was one of the tallest buildings in the city at 20 floors high and one of only two skyscrapers north of 14th Street – the other being the Metropolitan Life Insurance Company Tower, one block east. The building sits on a triangular block formed by Fifth Avenue, Broadway, and East 22nd Street, with 23rd Street grazing the triangle's northern (uptown) peak. As with numerous other wedge-shaped buildings, the name Flatiron derives from its resemblance to a cast-iron clothes iron. The building has been called one of the world's most iconic skyscrapers symbol of New York City.",
        "name": "Red Bridge",
        "picture": ["bridge-tn.jpg", "bridge.jpg"]
    },
    {
        "title": "Rockefeller Center is a large complex consisting of 19 highrise commercial buildings covering 22 acres (89,000 m2) between 48th and 51st Streets in New York City. Commissioned by the Rockefeller family, it is located in the center of Midtown Manhattan, spanning the area between Fifth Avenue and Sixth Avenue. It was declared a National Historic Landmark in 1987. Rockefeller Center was named after John D. Rockefeller, Jr., who leased the space from Columbia University in 1928 and developed it beginning in 1930. Rockefeller initially planned a syndicate to build an opera house for the Metropolitan Opera on the site, but changed plans after the stock market crash of 1929 and the Metropolitan's continual delays to hold out for a more favorable lease, causing Rockefeller to move forward without them. Rockefeller stated.",
        "name": "Green Bamboo",
        "picture": ["bamboo-tn.jpg", "bamboo.jpg"]
    },
    {
        "title": "The Chrysler Building is an Art Deco-style skyscraper located on the East Side of Midtown Manhattan in New York City, at the intersection of 42nd Street and Lexington Avenue in the Turtle Bay neighborhood. At 1,046 feet (319 m), the structure was the world's tallest building for 11 months before it was surpassed by the Empire State Building in 1931. t is the tallest brick building in the world, albeit with a steel frame. After the destruction of the World Trade Center, it was again the second-tallest building in New York City until December 2007, when the spire was raised on the 1,200-foot (365.8 m) Bank of America Tower, pushing the Chrysler Building into third position. In addition, The New York Times Building, which opened in 2007, is exactly level with the Chrysler Building in height. This Building is a classic example of Art Deco.",
        "name": "Red Stairway",
        "picture": ["stairway-tn.jpg", "stairway.jpg"]
    },
    {
        "title": "The Woolworth Building, at 233 Broadway, Manhattan, New York City, designed by architect Cass Gilbert and between 1910 and 1912, is an early US skyscraper. The original site for the building was purchased by F. W. Woolworth and his real estate agent Edward J. Hogan by April 15, 1910, from the Trenor Luther Park Estate and other owners for $1.65 million. By January 18, 1911, Woolworth and Hogan had acquired the final site for the project, totaling $4.5 million. More than a century after the start of its construction, it remains, at 241.4 meters (792 ft), one of the 100 tallest buildings in the United States as well as one of the 30 tallest buildings in New York City. The Woolworth Building was designed in the neo-Gothic style by the architect Cass Gilbert, whom Frank Woolworth commissioned in 1910 to design a 20-story office building.",
        "name": "Woolworth",
        "picture": ["woolworth-tn.jpg", "woolworth.jpg"]
    },
    {
        "title": "At 1,396 feet, 432 Park towers above a row of super-tall buildings rising on the southern end of Central Park, an area that's already earned its Billionaires' Belt nickname. These skyscrapers are so tall they needed approval from the Federal Aviation Administration before construction could start. The building, which cost $1.3 billion to construct, has two penthouses, one on the 96th floor that sold for $95 million and another on the 95th, currently priced at $85 million. The building's architect Rafael Viñoly made news back in September 2013 when his Walkie Talkie building wreaked havoc on London's streets, emitting a reflection so hot it melted cars and literally fried eggs on the sidewalk. But if these renderings are any indication, this building should be more of a success. The apartment building's interiors are magnificent.",
        "name": "Park",
        "picture": ["park-tn.jpg", "park.jpg"]
    },
    {
        "title": "Add new photo by clicking the link:",
        "name": "add",
        "picture": ["add-tn.jpg", "placeholder.gif"]
    }
    ]
};

window.onload = function() {
	prepareGallery();
}

function prepareGallery() {
  var gallery = document.getElementById("imageGallery");
  var links = gallery.getElementsByTagName("a");
  for ( var i=0; i < links.length; i++ ) {
  	links[i].onclick = function() {
        showPic(this, links);
        return false;
    }
    links[0].parentNode.className = 'active';
    showPic(links[0]);
}
};

function showPic(whichPic, links){
    if(links){
        for ( var i=0; i < links.length; i++ ) {
            links[i].parentNode.className = '';
        }
    }
    whichPic.parentNode.className = 'active';
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);

    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
};