var title = "DoErrands";
DocHead.setTitle(title);
/*meta data*/
var metaInfo = [
	{name: "description", content: "DoErrands"},
	{name: "viewport", content: "user-scalable=no, initial-scale=1, minimal-ui, maximum-scale=1, minimum-scale=1"}
];
_.each(metaInfo, function (metaItem) {
	DocHead.addMeta(metaItem);
});
/*head links*/
var linkInfo = [];
_.each(linkInfo, function (linkInfo) {
	DocHead.addLink(linkInfo);
});
