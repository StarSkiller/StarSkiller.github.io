<?php

// ::ZETA-PRODUCER-NO-COMPRESSION::

require_once('../../afx.inc.php');

$accountController = new \ZetaProducer\ServerComponent\Widgets\Rating\Controllers\ZpsBackendWidgetRatingUsersController();
$viewBag = $accountController->HandleGetOrPost();

$title = "Bewertungen-Benutzer";

// --

$colLabel = "col-xs-12 col-sm-2 col-md-1";
$colEditor = "col-xs-12 col-sm-10 col-md-11";
$colEditorB = "col-xs-12 col-sm-10 col-sm-offset-2 col-md-11 col-md-offset-1";

$tempBag['url-prefix'] = '../../zps-backend';
$tempBag['url-prefix-alt'] = '.';
?>

<?php require_once('../../zps-backend/_header.php') ?>

<!-- ##################################################################### -->

<?php
$params = UrlHelper::GetAllParameters(UrlHelper::GetCurrentFullUrl());
$json = count($params)>0 ? JsonHelper::ConvertObjectToJsonString($params) : '';
?>

<script>
    var loadDataUrl = '<?=UrlHelper::SetParameters("api.php", array(
                              "action" => "get-users",
                              "max" => "10000")) ?>';

    var wantSearchFirstTime = <?= StringHelper::IsNullOrEmpty($json) ? 'false' : 'true'?>;
    var jsonElements = <?= StringHelper::IsNullOrEmpty($json) ? '{}' : $json?>;
    var hasRatingUsers = <?= $viewBag['hasRatingUsers'] ? 'true' : 'false' ?>;
</script>

<script>
    var firstTime = true;

    function fillGrid() {
        /*jsGrid.locale('de');*/

        $("#jsGrid").jsGrid({
            //height: "70%",
            noDataContent: "Nichts gefunden",
            loadMessage: "Lade. Bitte warten\u2026",
            width: "100%",
            filtering: false,
            sorting: true,
            paging: true,
            pagerFormat: "{prev} &nbsp; Seite {pageIndex} von {pageCount} &nbsp; {next}",
            pagePrevText: "Vorige Seite",
            pageNextText: "N\u00e4chste Seite",
            pageFirstText: "Erste Seite",
            pageLastText: "Letzte Seite",
            autoload: true,
            pageSize: 25,
            pageButtonCount: 5,
            deleteConfirm: "M&ouml;chten Sie diesen Benutzer wirklich l&ouml;schen?",

            controller: {
                loadData: function (filter) {

                    return $.ajax({
                        type: "GET",
                        url: loadDataUrl,
                        data: filter,
                        dataType: "JSON"
                    })
                }
            },
            onDataLoaded: function (args) {
                // Default-Sort.
                //$("#jsGrid").jsGrid("sort", "ModDateUnix", "desc");
                $("#jsGrid").jsGrid("sort", "Name", "desc");

                if (wantSearchFirstTime && firstTime) {
                    firstTime = false;
                    $("#jsGrid").jsGrid("search", jsonElements).done(function () {
                    });
                }
            },

            rowClick: function (args) {
                location.href = "user.php?id=" + args.item.Id + "&from=users";
            },

            // http://js-grid.com/docs/#fields
            fields: [
                { name: "Name", title: "Name", type: "text", width: 150 },
                { name: "EMail", title: "E-Mail", type: "text", width: 150 },
                { name: "ModDateUnix", title: "Erstellt (UNIX)", type: "text", width: 100, visible: false }
            ]
        });
    }

    $(function () {
        if (hasRatingUsers) {
            fillGrid();
        }
    });
</script>

<form method="post" action="<?=UrlHelper::GetCurrentFullUrl()?>">

    <?php if ( $viewBag['hasRatingUsers']) { ?>
        <div id="grid-panel" class="row delta-y-before-2">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <div id="jsGrid"></div>
                    </div>
                </div>
            </div>
        </div>
    <?php } else { ?>
    <div id="grid-panel" class="row delta-y-before-2">
        <div class="col-md-12">
            Es sind zurzeit keine Bewertungen-Benutzer vorhanden.
        </div>
    </div>
    <?php } ?>

    <div class="row delta-y-before-2" id="button-panel">
        <div class="col-md-12">
            <a href="<?=$viewBag['cancelUrl']?>" class="btn btn-default">&laquo; Zur&uuml;ck zur &Uuml;bersicht</a>
        </div>
    </div>
</form>

<!-- ##################################################################### -->
<?php require_once('../../zps-backend/_footer.php') ?>
