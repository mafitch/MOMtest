var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "ch-chapter-title-4",
  "level": "1",
  "url": "ch-chapter-title-4.html",
  "type": "Exercises",
  "number": "1.2",
  "title": "Exercises",
  "body": " Test this one  Graph Line  "
},
{
  "id": "ch-chapter-title-4-1",
  "level": "2",
  "url": "ch-chapter-title-4.html#ch-chapter-title-4-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "Test this one.",
  "body": "Test this one "
},
{
  "id": "ch-chapter-title-4-2",
  "level": "2",
  "url": "ch-chapter-title-4.html#ch-chapter-title-4-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "Graph Line.",
  "body": "Graph Line "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
