<?php

// ::ZETA-PRODUCER-NO-COMPRESSION::

require_once('../../afx.inc.php');

$apiController = new ZetaProducer\ServerComponent\Widgets\Rating\Controllers\WidgetRatingApiController();
$apiController->Process();

?>