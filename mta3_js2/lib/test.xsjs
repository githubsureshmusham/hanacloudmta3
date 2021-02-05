$.response.contentType = "text/html";
var output;
//var outputlist = [];
var conn = $.db.getConnection();
var pstmt = conn.prepareStatement('SELECT count(*) as cnt FROM "cloudmta3.cloudmta3_db.Tables::MTA3_TABLE"');
var rs = pstmt.executeQuery();
if (!rs.next()) {
    $.response.setBody( "Failed to retrieve data" );
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
}
else {
	output="Count of records from hdbtable is ";
	output=output + rs.getString(1);
/*	while (rs.next()) {
    	output = {}
    	output.ID = rs.getString(1);
    	output.NAME = rs.getString(2);
    	outputlist.push(output);
	}*/
}

rs.close();
pstmt.close();
conn.close();
//var messageoutput = "This is the table data <br><br>";
$.response.setBody(output);