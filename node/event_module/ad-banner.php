<?php

use common\models\BfContentRepository;
use frontend\components\Utility;
use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Breadcrumbs;
use yii\widgets\Pjax;
use yii\widgets\ActiveForm;
use kartik\file\FileInput;



/* @var $this yii\web\View */
/* @var $searchModel common\models\BfAdBannerSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Ad. Banners Setup';
$this->params['breadcrumbs'][] = $this->title;
?>

<style>
    .form-check.form-switch {
        display: block;

    }

    .prev_file {
        margin-top: 2px;
        max-width: 300px;
        max-height: 150px;
        object-fit: contain
    }
</style>

<?php
$autoScroll = 1;
$aboveBillHorizontal = 0;
if ((count($hLayouts) > 0)) {
    $end_h_url = end($hLayouts);
    $autoScrollHorizontal = $end_h_url['auto_scroll'];
    $aboveBillHorizontal = $end_h_url['above_bill'];
};

$aboveBillVertical = 0;
if ((count($vLayouts) > 0)) {
    $end_v_url = end($vLayouts);
    $autoScrollVertical = $end_v_url['auto_scroll'];
    $aboveBillVertical = $end_v_url['above_bill'];
};
?>

<div class="bf-ad-banner-index mt-2">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-3 col-12">
                <h1 class="mb-0 h2 text-dark"><?= Html::encode($this->title) ?></h1>
                <?= Breadcrumbs::widget([
                    'homeLink' => false, // Prevent the default "Home" breadcrumb
                    'itemTemplate' => "<li>{link}</li> &nbsp; / &nbsp; \n", // template for all links
                    'links' => array_merge([
                        [
                            'label' => 'Home',
                            'url' => ['home/index'],
                        ],
                        [
                            'label' => 'Digital Bill',
                            'url' => ['digital-bill/index'],
                        ]
                    ], isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : []),
                ]) ?>
            </div>
            <!-- <div class="col-md-3 col-12 text-right ms-auto" style="text-align: right">
                <?= Html::a('<i class="las la-plus-circle"></i>Create Ad. Banner ', ['create'], ['class' => 'btn btn-success gap-1']) ?>
            </div> -->
        </div>
    </div>
    <hr style="margin: 1rem 0;">


    <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]); ?>
    <div class="mb-3 form-group col-md-12">
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <label for="">
                        <span class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-switch-horizontal">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M16 3l4 4l-4 4" />
                                <path d="M10 7l10 0" />
                                <path d="M8 13l-4 4l4 4" />
                                <path d="M4 17l9 0" />
                            </svg> &nbsp;
                            Horizontal Layout
                        </span>
                    </label>
                </div>
                <div class="card-body">
                    <div class="horizontal_options mb-2">
                        <div class="row">
                            <div class="col-md-2">
                                <label class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" name="auto_scroll" <?= ($autoScrollHorizontal == 1) ? 'checked' : '';  ?>>
                                    <span class="form-check-label">&nbsp; Auto Scroll</span>
                                </label>
                            </div>

                            <div class="col-md-2">
                                <label class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" name="above_bill_horizontal" <?= ($aboveBillHorizontal == 1) ? 'checked' : '';  ?>>
                                    <span class="form-check-label">&nbsp; Above Bill</span>
                                </label>
                            </div>
                        </div>
                        <input type="hidden" value="<?= (count($hLayouts) > 0) ? count($hLayouts) : 1; ?>" id="h_count" readonly>
                    </div>

                    <table class="table mt-2 card-table table-vcenter text-nowrap datatable table-bordered bg-white">
                        <thead class="thead-dark">
                            <tr>
                                <th style="min-width: 6rem;">URL</th>
                                <th style="min-width: 6rem;">Upload File</th>
                                <th style="min-width: 3.5rem;">Add / Remove</th>
                            </tr>
                        </thead>
                        <tbody id="h_url_list">
                            <?php
                            if (count($hLayouts) > 0) {
                                foreach ($hLayouts as $count => $hLayout) {

                                    $count = $count + 1;
                                    echo ' <tr id="h_tr_' . $count . '">
                                        <td>
                                            <input type="hidden" name="BfAdBannerSearch[h][' . $count . '][id]" value="' . $hLayout['id'] . '" >
                                            <input type="hidden" name="BfAdBannerSearch[h][' . $count . '][layout]" value="h" >
                                            <input type="text" class="form-control" name="BfAdBannerSearch[h][' . $count . '][url]" value="' . $hLayout['url'] . '" style="width: 100%" placeholder="URL">
                                        </td>
                                        <td>';

                                    echo '
                                    <input type="file" accept="image/*" class="form-control" name="BfAdBannerSearch[h][' . $count . '][files]" onchange="loadFile(event, \'prev_h_' . $count . '\')">' ?>

                                    <?php
                                    $bannerImg = \common\models\BfContentRepository::findOne(['content_id' => $hLayout['id'], 'content_type' => 'ad-banner', 'upload_status' => 'y', 'is_deleted' => 'n', 'in_use' => 'y']);
                                    if ($bannerImg) {
                                    ?>
                                        <div id="bannerImg" class="m-2" style="display:block;">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img id="prev_h_<?= $count ?>" style="width:300px; height:150px; object-fit:contain" src="<?= frontend\components\Utility::fetchAwsFile($bannerImg->file_path); ?>" />
                                                </div>
                                            </div>
                                        </div>
                                    <?php  } ?>

                                <?php
                                    echo '</td>
                                        <td>
                                            <div class="text-center" style="padding: 0.5rem;">
                                                <a class="mr-2 plus-minus-btn" id="add_more_0" href="javascript:void(0);" onclick="addMore(\'h\');">
                                                    <i class="las la-plus-circle fs-2 px-1"></i>
                                                </a>
                                                <a id="deleteV1" class="plus-minus-btn text-danger" href="javascript:void(0);" onclick="deleteLayout(\'h\', ' . $count . ',  ' . $hLayout['id'] . ');">
                                                    <i class="las la-minus-circle fs-2 px-1"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr> ';
                                }
                            } else { ?>
                                <tr id="h_tr_1">
                                    <td>
                                        <input type="hidden" name="BfAdBannerSearch[h][1][id]" value="">
                                        <input type="hidden" name="BfAdBannerSearch[h][1][layout]" value="h">
                                        <input type="text" class="form-control" name="BfAdBannerSearch[h][1][url]" style="width: 100%" placeholder="URL">
                                    </td>
                                    <td>
                                        <input type="file" accept="image/*" class="form-control" name="BfAdBannerSearch[h][1][files]" onchange="loadFile(event, 'prev_h_1')">
                                        <span><img class="prev_file" id="prev_h_1"></span>
                                    </td>
                                    <td>
                                        <div class="text-center" style="padding: 0.5rem;">
                                            <a class="mr-2 plus-minus-btn" id="add_more_0" href="javascript:void(0);" onclick="addMore('h');">
                                                <i class="las la-plus-circle fs-2 px-1"></i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </div>
            </div>


            <div class="card mt-2">
                <div class="card-header">
                    <label for="">
                        <span class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-switch-vertical">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 8l4 -4l4 4" />
                                <path d="M7 4l0 9" />
                                <path d="M13 16l4 4l4 -4" />
                                <path d="M17 10l0 10" />
                            </svg> &nbsp;
                            Vertical Layout
                        </span>
                    </label>
                </div>
                <div class="card-body ">
                    <div class="horizontal_options mb-2">
                        <div class="row">
                            <div class="col-md-2">
                                <label class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" name="above_bill_vertical" <?= ($aboveBillVertical == 1) ? 'checked' : ''; ?>>
                                    <span class="form-check-label">&nbsp; Above Bill</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" value="<?= (count($vLayouts) > 0) ? count($vLayouts) : 1; ?>" id="v_count" placeholder="">
                    <table class="table mt-2 card-table table-vcenter text-nowrap datatable table-bordered bg-white">
                        <thead class="thead-dark">
                            <tr>
                                <th style="min-width: 6rem;">URL</th>
                                <th style="min-width: 6rem;">Upload File</th>
                                <th style="min-width: 3.5rem;">Add / Remove</th>
                            </tr>
                        </thead>
                        <tbody id="v_url_list">
                            <?php
                            if (count($vLayouts) > 0) {
                                foreach ($vLayouts as $count => $vLayout) {
                                    $count = $count + 1;
                                    echo ' <tr id="v_tr_' . $count . '">
                                        <td>
                                            <input type="hidden" name="BfAdBannerSearch[v][' . $count . '][id]" value="' . $vLayout['id'] . '" >
                                            <input type="hidden" name="BfAdBannerSearch[v][' . $count . '][layout]" value="v">
                                            <input type="text" class="form-control" name="BfAdBannerSearch[v][' . $count . '][url]" value="' . $vLayout['url'] . '" style="width: 100%" placeholder="URL">
                                        </td>
                                        <td>
                                            <input type="file" accept="image/*" class="form-control" name="BfAdBannerSearch[v][' . $count . '][files]" onchange="loadFile(event, \'prev_v_' . $count . '\')">
                                        ' ?>
                                    <?php
                                    $bannerImg = \common\models\BfContentRepository::findOne(['content_id' => $vLayout['id'], 'content_type' => 'ad-banner', 'upload_status' => 'y', 'is_deleted' => 'n', 'in_use' => 'y']);
                                    if ($bannerImg) {
                                    ?>
                                        <div id="bannerImg" class="m-2" style="display:block;">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img id="prev_v_<?= $count ?>" style="width:300px; height:150px; object-fit:contain" src="<?= frontend\components\Utility::fetchAwsFile($bannerImg->file_path); ?>" />
                                                </div>
                                            </div>
                                        </div>
                                    <?php  } ?>

                                <?php echo '</td>
                                        <td>
                                            <div class="text-center" style="padding: 0.5rem;">
                                                <a class="mr-2 plus-minus-btn" id="add_more_0" href="javascript:void(0);" onclick="addMore(\'v\');">
                                                    <i class="las la-plus-circle fs-2 px-1"></i>
                                                </a>

                                                <a id="deleteV1" class="plus-minus-btn text-danger" href="javascript:void(0);" onclick="deleteLayout(\'v\', ' . $count . ', ' . $vLayout['id'] . ');">
                                                    <i class="las la-minus-circle fs-2 px-1"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr> ';
                                }
                            } else { ?>
                                <tr id="v_tr_1">
                                    <td>
                                        <input type="hidden" name="BfAdBannerSearch[v][1][id]" value="">
                                        <input type="hidden" name="BfAdBannerSearch[v][1][layout]" value="v">
                                        <input type="text" class="form-control" name="BfAdBannerSearch[v][1][url]" style="width: 100%" placeholder="URL">
                                    </td>
                                    <td>
                                        <input type="file" accept="image/*" class="form-control" name="BfAdBannerSearch[v][1][files]" onchange="loadFile(event, 'prev_v_1')">
                                        <span><img id='prev_v_1' class="prev_file"></span>

                                    </td>
                                    <td>
                                        <div class="text-center" style="padding: 0.5rem;">
                                            <a class="mr-2 plus-minus-btn" id="add_more_0" href="javascript:void(0);" onclick="addMore('v');">
                                                <i class="las la-plus-circle fs-2 px-1"></i>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                    <div class="from-control m-2">
                        <button type="submit" name="create" id="saveBtn" value="1" class="btn btn-md btn-success pull-right" onclick="loaderBtn()">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php ActiveForm::end(); ?>

    <script>
        $(document).ready(function() {

        });

        function addMore(type) {

            if (type == 'h') {
                $('#h_url_list').append(LayoutUi(type));
            }

            if (type == 'v') {
                $('#v_url_list').append(LayoutUi(type));
            }

        }

        function deleteLayout(type, count, id = null) {

            var result = confirm("Are you sure you want to delete?");
            if (result == true) {

                // Removing
                $('#' + type + '_tr_' + count).fadeOut(300, function() {
                    $(this).remove();
                });

                const h_count = $('#h_count').val();
                console.log("H_Count: ", h_count);

                const v_count = $('#v_count').val();
                console.log("V_Count: ", v_count);

                if (id !== null) {
                    $.ajax({
                        url: '/ad-banner/delete?id=' + id,
                        type: 'POST',
                        data: {
                            id: id
                        },
                        success: function(result) {
                            console.log(result)
                        }
                    })
                }

            } else {
                return false;
            }
        }

        function LayoutUi(type, count) {
            let layoutCount = $(`#${type}_count`).val(); //
            let layoutCountIncrement = parseInt(layoutCount) + 1; //
            $(`#${type}_count`).val(layoutCountIncrement);
            html = `
                            <tr id="${type}_tr_${layoutCountIncrement}">
                                <td>
                                    <input type="hidden" name="BfAdBannerSearch[${type}][${layoutCountIncrement}][id]" value="">
                                    <input type="hidden" name="BfAdBannerSearch[${type}][${layoutCountIncrement}][layout]" value="${type}">
                                    <input type="text" class="form-control" name="BfAdBannerSearch[${type}][${layoutCountIncrement}][url]" style="width: 100%" placeholder="URL">
                                </td>
                                <td>
                                    <input type="file" accept="image/*" class="form-control" name="BfAdBannerSearch[${type}][${layoutCountIncrement}][files]" onchange="loadFile(event, 'prev_${type}_${layoutCountIncrement}')">
                                    <img id='prev_${type}_${layoutCountIncrement}' class="prev_file"></span>
                                </td>
                                <td>
                                    <div class="text-center" style="padding: 0.5rem;">
                                        <a class="mr-2 plus-minus-btn" id="add_more_0" href="javascript:void(0);" onclick="addMore('${type}');">
                                            <i class="las la-plus-circle fs-2 px-1"></i>
                                        </a>
                                        <a id="delete0" class="plus-minus-btn text-danger" href="javascript:void(0);" onclick="deleteLayout('${type}', ${layoutCountIncrement})">
                                            <i class="las la-minus-circle fs-2 px-1"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
            `;
            return html;
        }

        function loaderBtn(element) {
            const loader =
                '<div class="loader" id="loader" style="filter: brightness(5);background-size:contain;width:20px !important;height:20px !important;margin: 0 auto !important;background-repeat:no-repeat;background-position: center;"></div>';
            $('#saveBtn').html(loader);
        }

        const loadFile = function(event, outputId) {
            var reader = new FileReader();
            reader.onload = function() {
                var output = document.getElementById(outputId);
                output.src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        };
    </script>

</div>




















 public function actionAddBill()
    {
        if (isset($this->post_request['auth_token']) && TokenUtility::validateAuthToken($this->post_request['auth_token'], 'merchant', true)) {
            @file_put_contents("/tmp/add-bill-log.txt", print_r($this->post_request, true), FILE_APPEND);

            $file = null;

            // Check if user uploaded a file
            if (!empty($_FILES['file']['tmp_name'])) {
                $file = $_FILES['file'];

            // If no file uploaded, check if user provided a filename
            } elseif (!empty($this->post_request['file'])) {
                $fileName = $this->post_request['file'];
                $pathInAws = "tally-ftp-files/uploads/$fileName";

                $awsUrl = Utility::fetchAwsFile1($pathInAws , true);
                // var_dump($awsUrl);
                // die;
                $tmpFilePath = Yii::$app->params['tmpFilePath'];
                // var_dump($tmpFilePath);
                // var_dump(ini_get('allow_url_fopen'));
                // var_dump(@file_get_contents($awsUrl)); // fails
                // var_dump(shell_exec("curl -I '$awsUrl'")); // check headers
                $content = @file_get_contents($awsUrl);
                // var_dump( $content);
                // die;

                if ($content === false) {
                    Yii::$app->response->statusCode = 404;
                    return Json::encode([
                        'error' => true,
                        'message' => 'Unable to download file from AWS'
                    ]);
                }
                file_put_contents($tmpFilePath, $content);

                // Prepare $file array (like $_FILES)
                $file = [
                    'name' => $fileName,
                    'tmp_name' => $tmpFilePath,
                    'type' => mime_content_type($tmpFilePath),
                    'size' => filesize($tmpFilePath)
                ];
                $source = 'aws';
// var_dump( $content);
//                 die;
                // Neither file nor filename provided
                // $content = file_get_contents($awsUrl); // download
                // file_put_contents($tmpFile, $content);   // save locally

                // $file = [
                //     'name' => basename($pathInAws),
                //     'tmp_name' => $tmpFile,
                //     'type' => mime_content_type($tmpFile),
                //     'size' => filesize($tmpFile)
                // ];
                //                 if ($awsFile && file_exists($awsFile)) {
                //                     $file = [
                //                         'name' => basename($fileName),
                //                         'tmp_name' => $awsFile,
                //                         'type' => mime_content_type($awsFile),
                //                         'size' => filesize($awsFile)
                //                     ];
                    // echo "here1";
                    // die;
                    // $source = 'aws';
                // } else {
                //     Yii::$app->response->statusCode = 404;
                //     return Json::encode([
                //         'error' => true,
                //         'message' => 'File not found in AWS bucket'
                //     ]);
                // }

            // Neither file nor filename provided
            } else {
                Yii::$app->response->statusCode = 400;
                return Json::encode([
                    'error' => true,
                    'message' => 'No file uploaded or filename provided'
                ]);
            }


            // if (!empty($_FILES['file']['tmp_name'])) {
            //     $file = $_FILES['file'];

                $merchant_id = TokenUtility::getUserIdByAuthToken($this->post_request['auth_token']);
                // for future ref, we might need to map merchant id with a store id(which the merchant might maintain), in such case, expect a store_id parameter from the client, and then find the merchant_id w.r.t that store id and proceed as below.
                $extension = explode(".", $file['name']);
                $extension = end($extension);
                $bucket = Yii::$app->params['amazon']['bucket'];
                $uniqueName = uniqid();
                // $path = "merchant-uploaded-bills/$merchant_id/$uniqueName.$extension";
                $path = "tally-ftp-files/uploads/$uniqueName.$extension";
                if (Utility::uploadNewFile('', '', 'billfree-bills', $path, $file['tmp_name'])) {
                    // only proceed when upload is complete
                    $post_request = [];
                    $post_request = $this->post_request;
                    $post_request['auth_token'] = $this->post_request['auth_token'];
                    $post_request['user_phone'] = $this->post_request['user_phone'];
                    $post_request['dial_code'] = $this->post_request['dial_code'] ?? '91';
                    if (!empty($this->post_request['bill_amount'])) {
                        $this->post_request['bill_amount'] = Utility::sanitizeAmt($this->post_request['bill_amount']);
                        $post_request['bill_amount'] = $this->post_request['bill_amount'];
                    }
                    if (!empty($this->post_request['amount'])) {
                        $this->post_request['bill_amount'] = Utility::sanitizeAmt($this->post_request['amount']);
                        $post_request['bill_amount'] = $this->post_request['bill_amount'];
                    }
                    if (!isset($this->post_request['title'])) {
                        $post_request['title'] = "API_UPLOADED_BILL";
                    }
                    if (isset($this->post_request['bill_date']) && Utility::validateDate($this->post_request['bill_date'])) {
                        $post_request['date_added'] = $this->post_request['bill_date'] . " 00:00:00";
                    } else
                        $post_request['date_added'] = date('Y-m-d H:i:s');

                    $files = [['BfContentRepository' => [
                        'file_name' => $file['name'],
                        'unique_name' => "$uniqueName.$extension",
                        'file_extension' => $extension,
                        'mime_type' => $file['type'],
                        'file_path' => "$bucket/$path",
                        'upload_status' => 'y',
                        'size' => $file['size']
                    ]]];
                    $post_request['files'] = $files;

                    if (isset($post_request['particulars']) && Utility::isJson($post_request['particulars'])) {
                        $post_request['particulars'] = json_decode($post_request['particulars'], true);
                    } else $post_request['particulars'] = [];

                    // sending the bill now
                    return BillUtility::addBillForMerchant($post_request);
                } else {
                    Yii::$app->response->statusCode = 500;
                    return Json::encode(['error' => true, 'response' => 0, 'message' => 'Unexpected Server Error, contact support']);
                }
            // } else {
            //     Yii::$app->response->statusCode = 200;
            //     return Json::encode(['error' => false, 'response' => 'B0', 'message' => 'Bill File file not found!']);
            // }
        } else {
            Yii::$app->response->statusCode = 401;
            return Json::encode(['error' => true, 'response' => 0, 'message' => 'Invalid token or Token Expired!']);
        }
    }
