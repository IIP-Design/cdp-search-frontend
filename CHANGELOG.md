# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# [1.8.4](2019-10-31)

**Added:**

- Added a '5G' department priority section to the front page

# [1.8.3](2019-10-02)

**Added:**

- Added a logo for VOA Editorials

**Changed:**

- Updated IIP properties to GPA

# [1.8.2](2019-8-21)

**Fixed:**

- Limited categories to three items in the Latest and Priority sections to resolve a display issue

# [1.8.1](2019-7-24)

**Fixed:**

- Resolved bug with Recents section

# [1.8.0](2019-7-24)

**Added:**

- Added a Department Priority section to the front page
- Configured Department Priority section to display the topic of Iran

**Changed:**

- Style updates to accommodate the Department Priority section
- Text updates in the Recents section to maintain consistancy with the Department Priority section

# [1.7.1](2019-6-26)

**Changed:**

- Updated IIP language to GPA in the footer

# [1.7.0](2019-5-24)

**Added:**

- Articles now have a direct page in Commons similar to videos
- The article display will utilize this direct link if the original source is content.america.gov

# [1.6.8](2019-3-11)

**Fixed:**

- Resolved an issue wherein languages were not being loaded for the searchbar menu on certain pages

# [1.6.7](2019-3-08)

**Changed:**

- Category and Source filters will update based on the search
- Search language is now set via a dropdown on the search bar
- VOA has been renamed to VOA Editorials

**Added:**

- Open Graph tags have been added
- A logo has been added for DoS properties

# [1.6.6](2019-1-30)

**Changed:**

- Update filename convention for Transcripts like Video and SRT

# [1.6.5](2019-1-18)

**Added:**

- Adds a data-action attribute to various elements that users might interact with. This provides an attribute that Google Tag Manager can cue on to record a specific user action.

**Changed:**

- Update Slack logo in footer
- Filenames for SRT and Videos will always be the English title or 'commons-video' if not available

# [1.6.4](2019-1-08)

**Fixed:**

- Resolved error that was thrown when typing in odd number of double quotations in the search field.

**Added:**

- Display a notification to OpenNet users on Internet Explorer recommending they use Chrome

**Changed:**

- Downloaded files now follow the - [filename]‌.[language code]‌\_[country code].[ext] naming convention
- Search results are now displayed by relevacy when a search term is used. Title field is given precedence and a boost is given to newer items
- Alter sub-heading text in the site header

# [1.6.3](2018-11-07)

**Fixed:**

- Disable service worker due to caching issues.

# [1.6.2](2018-11-07)

**Fixed:**

- Resolved an issue with transcript text not displaying

# [1.6.1](2018-11-01)

**Fixed:**

- Resolved an issue with right-to-left languages after latest update

# [1.6.0](2018-11-01)

**Added:**

- Integrate Google Translate API for language detection. Search results will now reflect search term in language
- Redirect to 404 page when a route is not found
- Help content added to embed article and video modal windows
- Message will be shown when no videos are avaialble for download
- Mesaage will be shown when search does not return any results

**Changed:**

- Change favicon to DoS Seal
- Remove "Connecting people with content." from the subheading on the homepage
- Enhance search query
  - Boost the title, desc fields
  - Search by 'Relevance' when text is entered in the search field
  - Ensure that 'Recent' is used in the Browse links and when search field is empty

**Fixed:**

- Search fails if only blank spaces/characters are entered
- Searching on various special characters throws a 400 bad request error
- Selecting 'Browse all [type]' from Landing page and then the 'Back' would not clear type selections
- Search input drops to new line at certain screen widths
- Tooltips expanding Header outside of viewport on Mobile
- Fix iPhone 6,6s,7 issues:
  - Oversized Arrow Icon on Click of Video and SRT Tabs
  - Share, Embed, and Download Links Shifted to the Left Corner of Screen
  - Browse all Video link displays on the left hand corner of the screen instead of the right
  - Copy button is partially visible on share video page and download page
  - Download arrow icon is not visible when you click on video file and SRT tabs.
  - When downloaded, local video is closed, the homepage does not reload
- Edge [v40] and IE[11]: Close Icon Missing from Modals for Articles and Videos
- Edge [v40][9] Copy Button is outside image area on share of video/article
- IE [v11] Win10[7] Articles and Video Pages have Copy Button Partially Displayed and Scroll Bar Displayed
- Edge [v40][9] Copy Button is Outside Image Area on Share of Video/Article
- FF [Win10][15] Copy Button Partially Displayed and Scroll Bar Displayed on Articles and Videos

# [1.5.2](2018-10-18)

**Changed:**

- DOS seal now using svg; removed multiple png instances

# [1.5.1](2018-10-17)

**Added:**

- Make search icon clickable
- Remove BETA tag and add DOS Seal

# [1.5.0]

**Added:**

- Add captions and alt text to images in the search results modal

**Fixed:**

- Define image figures to a maximum width of 100% to prevent them from overflowing the embed container

**Changed:**

- Use locale rather than language code to maintain project-wide consistency

# [1.4.3](2018-09-20)

**Changed:**

- Set single article module portion of embed URL to an environmental variable

# [1.4.2](2018-09-12)

**Fixed:**

- Languages will only be displayed in the video language dropdown if a source exists in the language unit

# [1.4.1](2018-09-10)

**Fixed:**

- Fixed difficulty selecting icon links in popups

# [1.4.0](2018-09-08)

**Added:**

- Enhanced footer to inlude additional links and information
- Added embed code generation to enable sharing off posts
- Updated direct link for posts to point to original source

**Fixed:**

- Fixed tabbed underline on video popups

# [1.3.0](2018-08-08)

**Added:**

- Embed code to display to embed both youtube and vimeo videos now active
- Share windows now are either a popup for desktop or a new page for mobile

**Fixed:**

- Caption toggle now operates correctly and loads correct video based on caption selection
- Fixed direct link UI display

# [1.2.0](2018-07-18)

**Added:**

- Added Vimeo support
- Provided a Vimeo/CloudFlare fallback option when YouTube is not available
- Provided a sharable, direct link to the video page
- Updated UI to provide "web" and "broadcast" video quality display
- Updated various UI styles

**Fixed:**

- Sources dropdown now sorted alphabetically

# [1.1.0](2018-06-15)

**Added:**

- Added Contact Us page
- Added Browse all [type] link above each recents section on Landing page
- Updated help text for video downloads
- Source action creator now accepts an array of owners and not a string as it's search key
- Created owners mappings in source action to (1) support inconsistent owner names and (2) assign a custom name

# [1.0.0](2018-05-29)

**Added:**

- Global search bar
- Feedback form
- About, Help, Privacy Policy pages
- Filter search by Date, Forat, Source, Language and Category
- Display search results in either gallery or list formats
- Closable filter selections bubbles
- Contextual number of results
- Video and Article content types search
- Modal window that houses selected item
- Video modal:
  - YouTube or CloudFlare video player
  - Language dropdown to view video in other languages
  - Download icon opens popup to download selected video in various sizes, SRT, Transcript and Help
  - Video meta data
- Article modal:
  - Source content
  - Source Logo
  - Link to original source
  - Article meta data
- Result pagination
