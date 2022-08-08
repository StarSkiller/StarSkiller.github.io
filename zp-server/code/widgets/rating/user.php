<?php

// ::ZETA-PRODUCER-NO-COMPRESSION::

require_once('../../afx.inc.php');

$accountController = new \ZetaProducer\ServerComponent\Widgets\Rating\Controllers\ZpsBackendWidgetRatingUserController();
$viewBag = $accountController->HandleGetOrPost();

/**
 * @var \ZetaProducer\ServerComponent\Widgets\Rating\Controllers\WidgetRatingUserApiModel $model
 */
$model = $viewBag['user'];

$title = $model->Name . " &ndash; Bewertungs-Benutzer";

// --

$colLabel = "col-xs-12 col-sm-2 col-md-1";
$colEditor = "col-xs-12 col-sm-10 col-md-11";
$colEditorB = "col-xs-12 col-sm-10 col-sm-offset-2 col-md-11 col-md-offset-1";

$tempBag['url-prefix'] = '../../zps-backend';
$tempBag['url-prefix-alt'] = '.';
?>

<?php require_once('../../zps-backend/_header.php') ?>

<script>
    $(function () {
    });

    function deleteUser() {
        Swal.fire({
            title: `M&ouml;chten Sie das Konto wirklich l&ouml;schen?`,  // Escape-Codes: https://stackoverflow.com/a/11653019/107625
            //html: 'Es werden s&auml;mtliche Daten endgültig gelöscht.',
            confirmButtonText: 'Konto endg&uuml;ltig l&ouml;schen',
            cancelButtonText: 'Abbrechen',
            focusCancel: true,
            showCancelButton: true,
            confirmButtonColor: '#0082d7'
        }).then((result) => {
            if (result.isConfirmed) {
                var url = '<?=UrlHelper::SetParameters('user.php',
                         array(
                            'deleteUserId' => UrlHelper::GetParameter(UrlHelper::GetCurrentFullUrl(), 'id' )))?>';

                window.location.href = url;
            }
        })
    }
</script>

<!-- ##################################################################### -->

<form method="post" action="<?=UrlHelper::GetCurrentFullUrl()?>">

    <div class="row delta-y-before-2 form-group">
        <div class="<?=$colLabel?>">
            <label>Name</label>
        </div>
        <div class="<?=$colEditor?>">
            <input type="text" readonly="readonly" class="form-control" value="<?=$model->Name?>" />
        </div>
    </div>
    <div class="row delta-y-before-0 form-group">
        <div class="<?=$colLabel?>">
            <label>E-Mail</label>
        </div>
        <div class="<?=$colEditor?>">
            <input type="text" readonly="readonly" class="form-control" value="<?=$model->EMail?>" />
        </div>
    </div>

    <div class="row delta-y-before-2">
        <div class="col-md-12">
            <label class="pseudo">
                <a href="<?=$viewBag['cancelUrl']?>" class="btn btn-default">&laquo; Zur&uuml;ck zur &Uuml;bersicht</a>
            </label>
            <label class="pseudo">
                <a class="btn btn-danger btn-primary" href="javascript:void(0)" onclick="deleteUser()">
                    Konto l&ouml;schen
                </a>
            </label>
        </div>
    </div>
</form>

<!-- ##################################################################### -->
<?php require_once('../../zps-backend/_footer.php') ?>
