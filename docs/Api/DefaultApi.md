# OpenAPI\Client\DefaultApi

All URIs are relative to https://api.taskmanagement.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**projectsGet()**](DefaultApi.md#projectsGet) | **GET** /projects | Getting Projects list |
| [**projectsIdDelete()**](DefaultApi.md#projectsIdDelete) | **DELETE** /projects/{id} | Deleting Project |
| [**projectsIdGet()**](DefaultApi.md#projectsIdGet) | **GET** /projects/{id} | Getting information about certain project |
| [**projectsIdPut()**](DefaultApi.md#projectsIdPut) | **PUT** /projects/{id} | Update Project Information |
| [**projectsPost()**](DefaultApi.md#projectsPost) | **POST** /projects | New Project creation |
| [**projectsProjectIdTasksGet()**](DefaultApi.md#projectsProjectIdTasksGet) | **GET** /projects/{project_id}/tasks | Getting Tasks list for Project |
| [**projectsProjectIdTasksIdDelete()**](DefaultApi.md#projectsProjectIdTasksIdDelete) | **DELETE** /projects/{project_id}/tasks/{id} | Delete task |
| [**projectsProjectIdTasksIdGet()**](DefaultApi.md#projectsProjectIdTasksIdGet) | **GET** /projects/{project_id}/tasks/{id} | Getting information about certain Task |
| [**projectsProjectIdTasksIdPut()**](DefaultApi.md#projectsProjectIdTasksIdPut) | **PUT** /projects/{project_id}/tasks/{id} | Update Task Information |
| [**projectsProjectIdTasksPost()**](DefaultApi.md#projectsProjectIdTasksPost) | **POST** /projects/{project_id}/tasks | New Task creation |


## `projectsGet()`

```php
projectsGet($page, $limit): \OpenAPI\Client\Model\Project[]
```

Getting Projects list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$page = 1; // int | Page number
$limit = 10; // int | Projects per page

try {
    $result = $apiInstance->projectsGet($page, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->projectsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Page number | [optional] |
| **limit** | **int**| Projects per page | [optional] |

### Return type

[**\OpenAPI\Client\Model\Project[]**](../Model/Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `projectsIdDelete()`

```php
projectsIdDelete($id)
```

Deleting Project

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 56; // int | Project ID

try {
    $apiInstance->projectsIdDelete($id);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->projectsIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| Project ID | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `projectsIdGet()`

```php
projectsIdGet($id): \OpenAPI\Client\Model\Project
```

Getting information about certain project

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 56; // int | Project ID

try {
    $result = $apiInstance->projectsIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->projectsIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| Project ID | |

### Return type

[**\OpenAPI\Client\Model\Project**](../Model/Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `projectsIdPut()`

```php
projectsIdPut($id, $projects_id_put_request): \OpenAPI\Client\Model\Project
```

Update Project Information

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$id = 56; // int | Project ID
$projects_id_put_request = new \OpenAPI\Client\Model\ProjectsIdPutRequest(); // \OpenAPI\Client\Model\ProjectsIdPutRequest

try {
    $result = $apiInstance->projectsIdPut($id, $projects_id_put_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->projectsIdPut: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **int**| Project ID | |
| **projects_id_put_request** | [**\OpenAPI\Client\Model\ProjectsIdPutRequest**](../Model/ProjectsIdPutRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Project**](../Model/Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `projectsPost()`

```php
projectsPost($projects_post_request): \OpenAPI\Client\Model\Project
```

New Project creation

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$projects_post_request = new \OpenAPI\Client\Model\ProjectsPostRequest(); // \OpenAPI\Client\Model\ProjectsPostRequest

try {
    $result = $apiInstance->projectsPost($projects_post_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->projectsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **projects_post_request** | [**\OpenAPI\Client\Model\ProjectsPostRequest**](../Model/ProjectsPostRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Project**](../Model/Project.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `projectsProjectIdTasksGet()`

```php
projectsProjectIdTasksGet($project_id, $status, $due_date): \OpenAPI\Client\Model\Task[]
```

Getting Tasks list for Project

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$project_id = 56; // int | Project ID
$status = 'status_example'; // string | Filter by Status
$due_date = new \DateTime('2013-10-20T19:20:30+01:00'); // \DateTime | Filter by Due Date

try {
    $result = $apiInstance->projectsProjectIdTasksGet($project_id, $status, $due_date);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->projectsProjectIdTasksGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **project_id** | **int**| Project ID | |
| **status** | **string**| Filter by Status | [optional] |
| **due_date** | **\DateTime**| Filter by Due Date | [optional] |

### Return type

[**\OpenAPI\Client\Model\Task[]**](../Model/Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `projectsProjectIdTasksIdDelete()`

```php
projectsProjectIdTasksIdDelete($project_id, $id)
```

Delete task

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$project_id = 56; // int | Project ID
$id = 56; // int | Task ID

try {
    $apiInstance->projectsProjectIdTasksIdDelete($project_id, $id);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->projectsProjectIdTasksIdDelete: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **project_id** | **int**| Project ID | |
| **id** | **int**| Task ID | |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `projectsProjectIdTasksIdGet()`

```php
projectsProjectIdTasksIdGet($project_id, $id): \OpenAPI\Client\Model\Task
```

Getting information about certain Task

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$project_id = 56; // int | Project ID
$id = 56; // int | Task ID

try {
    $result = $apiInstance->projectsProjectIdTasksIdGet($project_id, $id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->projectsProjectIdTasksIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **project_id** | **int**| Project ID | |
| **id** | **int**| Task ID | |

### Return type

[**\OpenAPI\Client\Model\Task**](../Model/Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `projectsProjectIdTasksIdPut()`

```php
projectsProjectIdTasksIdPut($project_id, $id, $projects_project_id_tasks_id_put_request): \OpenAPI\Client\Model\Task
```

Update Task Information

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$project_id = 56; // int | Project ID
$id = 56; // int | Task ID
$projects_project_id_tasks_id_put_request = new \OpenAPI\Client\Model\ProjectsProjectIdTasksIdPutRequest(); // \OpenAPI\Client\Model\ProjectsProjectIdTasksIdPutRequest

try {
    $result = $apiInstance->projectsProjectIdTasksIdPut($project_id, $id, $projects_project_id_tasks_id_put_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->projectsProjectIdTasksIdPut: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **project_id** | **int**| Project ID | |
| **id** | **int**| Task ID | |
| **projects_project_id_tasks_id_put_request** | [**\OpenAPI\Client\Model\ProjectsProjectIdTasksIdPutRequest**](../Model/ProjectsProjectIdTasksIdPutRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Task**](../Model/Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `projectsProjectIdTasksPost()`

```php
projectsProjectIdTasksPost($project_id, $projects_project_id_tasks_post_request): \OpenAPI\Client\Model\Task
```

New Task creation

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$project_id = 56; // int | Project ID
$projects_project_id_tasks_post_request = new \OpenAPI\Client\Model\ProjectsProjectIdTasksPostRequest(); // \OpenAPI\Client\Model\ProjectsProjectIdTasksPostRequest

try {
    $result = $apiInstance->projectsProjectIdTasksPost($project_id, $projects_project_id_tasks_post_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->projectsProjectIdTasksPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **project_id** | **int**| Project ID | |
| **projects_project_id_tasks_post_request** | [**\OpenAPI\Client\Model\ProjectsProjectIdTasksPostRequest**](../Model/ProjectsProjectIdTasksPostRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\Task**](../Model/Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
