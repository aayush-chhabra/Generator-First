define([
	"src/main",
	"src/remove_likely_subtags",
	"json!fixtures/cldr/supplemental/likelySubtags.json"
], function( Cldr, removeLikelySubtags, likelySubtagsJson ) {

	Cldr.load( likelySubtagsJson );

	describe( "Remove Likely Subtags", function() {

		var cldr = new Cldr( "root" );

		it( "Should reduce \"en_Latn_US\" into \"en\"", function() {
			expect( removeLikelySubtags( Cldr, cldr, [ "en", "Latn", "US" ] ) ).to.eql( [ "en" ] );
		});

		it( "Should reduce \"pt_Latn_BR\" into \"pt\"", function() {
			expect( removeLikelySubtags( Cldr, cldr, [ "pt", "Latn", "BR" ] ) ).to.eql( [ "pt" ] );
		});

		it( "Should reduce \"en_Latn_GB\" into \"en_GB\"", function() {
			expect( removeLikelySubtags( Cldr, cldr, [ "en", "Latn", "GB" ] ) ).to.eql( [ "en", "GB" ] );
		});

		it( "Should reduce \"zh_Hant_HK\" into \"zh_HK\"", function() {
			expect( removeLikelySubtags( Cldr, cldr, [ "zh", "Hant", "HK" ] ) ).to.eql( [ "zh", "HK" ] );
		});

		it( "Should reduce \"az_Arab_IR\" into \"az_Arab\"", function() {
			expect( removeLikelySubtags( Cldr, cldr, [ "az", "Arab", "IR" ] ) ).to.eql( [ "az", "IR" ] );
		});

	});

});
