Reference: [Flash Briefing Skill API Feed Reference](https://developer.amazon.com/en-US/docs/alexa/flashbriefing/flash-briefing-skill-api-feed-reference.html)
 
|Element|JSON Element|RSS Element|Description|
|-|-|-|-|
|* HTTP Content-Type Header|`application/json`|`application/rss+xml`|Indicates the format of the feed payload.|	
|*Identifier|`uid`|`guid`|A unique identifier for each feed item. UUID format preferred, but not required.|
|*Date|`updateDate`|`pubDate`|The date indicates freshness of the feed item, and items should be in date order from newest to oldest. Alexa ignores items with a date older than 7 days. A string in ISO 8601 format, YYYY-MM-DDThh:mm:ssZ, specified in UTC.|
|*Title|`titleText`|`title`|The title of the feed item to display in the Alexa app.|
|Audio content| A `streamUrl` element with a value of the URL for an MP3 stream.|An `enclosure` element with a `type` attribute of `audio/mpeg`.|The audio that Alexa plays for the customer. An HTTPS URL specifying the location of the audio content. This field is required for audio items.|
|*Text content|`mainText`|`description`|The text that Alexa reads to the customer. For audio items, this element is ignored, and can contain an empty string ("").|
|*Display URL|`redirectionUrl`|`link`|Provides the URL target for the Read More link in the Alexa app.|
**\* Required**
