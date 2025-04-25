import{Z as r,j as e}from"./entry.client-DD31RRwT.js";const d="API for managing Projects and Tasks.",l=[{depth:2,value:"OpenAPIClient-php",id:"openapiclient-php"},{depth:2,value:"Installation & Usage",id:"installation--usage",children:[{depth:3,value:"Requirements",id:"requirements"},{depth:3,value:"Composer",id:"composer"},{depth:3,value:"Manual Installation",id:"manual-installation"}]},{depth:2,value:"Getting Started",id:"getting-started"},{depth:2,value:"API Endpoints",id:"api-endpoints"},{depth:2,value:"Models",id:"models"},{depth:2,value:"Tests",id:"tests"}],c={title:"Installation"};function n(s){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"openapiclient-php",children:"OpenAPIClient-php"}),`
`,e.jsx(t.p,{children:"API for managing Projects and Tasks."}),`
`,e.jsx(t.h2,{id:"installation--usage",children:"Installation & Usage"}),`
`,e.jsx(t.h3,{id:"requirements",children:"Requirements"}),`
`,e.jsx(t.p,{children:`PHP 7.4 and later.\r
Should also work with PHP 8.0.`}),`
`,e.jsx(t.h3,{id:"composer",children:"Composer"}),`
`,e.jsxs(t.p,{children:["To install the bindings via ",e.jsx(t.a,{href:"https://getcomposer.org/",children:"Composer"}),", add the following to ",e.jsx(t.code,{inline:!0,children:"composer.json"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{\r
  "repositories": [\r
    {\r
      "type": "vcs",\r
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"\r
    }\r
  ],\r
  "require": {\r
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"\r
  }\r
}
`})}),`
`,e.jsxs(t.p,{children:["Then run ",e.jsx(t.code,{inline:!0,children:"composer install"})]}),`
`,e.jsx(t.h3,{id:"manual-installation",children:"Manual Installation"}),`
`,e.jsxs(t.p,{children:["Download the files and include ",e.jsx(t.code,{inline:!0,children:"autoload.php"}),":"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-php",children:`<?php\r
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
`})}),`
`,e.jsx(t.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsxs(t.p,{children:["Please follow the ",e.jsx(t.a,{href:"#installation--usage",children:"installation procedure"})," and then run the following:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-php",children:`<?php\r
require_once(__DIR__ . '/vendor/autoload.php');\r
\r
$apiInstance = new OpenAPI\\Client\\Api\\DefaultApi(\r
    // If you want use custom http client, pass your client which implements \`GuzzleHttp\\ClientInterface\`.\r
    // This is optional, \`GuzzleHttp\\Client\` will be used as default.\r
    new GuzzleHttp\\Client()\r
);\r
$page = 1; // int | Page number\r
$limit = 10; // int | Projects per page\r
\r
try {\r
    $result = $apiInstance->projectsGet($page, $limit);\r
    print_r($result);\r
} catch (Exception $e) {\r
    echo 'Exception when calling DefaultApi->projectsGet: ', $e->getMessage(), PHP_EOL;\r
}\r

`})}),`
`,e.jsx(t.h2,{id:"api-endpoints",children:"API Endpoints"}),`
`,e.jsxs(t.p,{children:["All URIs are relative to ",e.jsx(t.em,{children:e.jsx(t.a,{href:"https://api.taskmanagement.com",children:"https://api.taskmanagement.com"})})]}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Class"}),e.jsx(t.th,{children:"Method"}),e.jsx(t.th,{children:"HTTP request"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.em,{children:"DefaultApi"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/Api/DefaultApi#projectsget",children:e.jsx(t.strong,{children:"projectsGet"})})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"GET"})," /projects"]}),e.jsx(t.td,{children:"Getting Projects list"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.em,{children:"DefaultApi"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/Api/DefaultApi#projectsiddelete",children:e.jsx(t.strong,{children:"projectsIdDelete"})})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"DELETE"})," /projects/","{id}"]}),e.jsx(t.td,{children:"Deleting Project"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.em,{children:"DefaultApi"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/Api/DefaultApi#projectsidget",children:e.jsx(t.strong,{children:"projectsIdGet"})})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"GET"})," /projects/","{id}"]}),e.jsx(t.td,{children:"Getting information about certain project"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.em,{children:"DefaultApi"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/Api/DefaultApi#projectsidput",children:e.jsx(t.strong,{children:"projectsIdPut"})})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"PUT"})," /projects/","{id}"]}),e.jsx(t.td,{children:"Update Project Information"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.em,{children:"DefaultApi"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/Api/DefaultApi#projectspost",children:e.jsx(t.strong,{children:"projectsPost"})})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"POST"})," /projects"]}),e.jsx(t.td,{children:"New Project creation"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.em,{children:"DefaultApi"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/Api/DefaultApi#projectsprojectidtasksget",children:e.jsx(t.strong,{children:"projectsProjectIdTasksGet"})})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"GET"})," /projects/","{project_id}","/tasks"]}),e.jsx(t.td,{children:"Getting Tasks list for Project"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.em,{children:"DefaultApi"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/Api/DefaultApi#projectsprojectidtasksiddelete",children:e.jsx(t.strong,{children:"projectsProjectIdTasksIdDelete"})})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"DELETE"})," /projects/","{project_id}","/tasks/","{id}"]}),e.jsx(t.td,{children:"Delete task"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.em,{children:"DefaultApi"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/Api/DefaultApi#projectsprojectidtasksidget",children:e.jsx(t.strong,{children:"projectsProjectIdTasksIdGet"})})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"GET"})," /projects/","{project_id}","/tasks/","{id}"]}),e.jsx(t.td,{children:"Getting information about certain Task"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.em,{children:"DefaultApi"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/Api/DefaultApi#projectsprojectidtasksidput",children:e.jsx(t.strong,{children:"projectsProjectIdTasksIdPut"})})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"PUT"})," /projects/","{project_id}","/tasks/","{id}"]}),e.jsx(t.td,{children:"Update Task Information"})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.em,{children:"DefaultApi"})}),e.jsx(t.td,{children:e.jsx(t.a,{href:"/docs/Api/DefaultApi#projectsprojectidtaskspost",children:e.jsx(t.strong,{children:"projectsProjectIdTasksPost"})})}),e.jsxs(t.td,{children:[e.jsx(t.strong,{children:"POST"})," /projects/","{project_id}","/tasks"]}),e.jsx(t.td,{children:"New Task creation"})]})]})]}),`
`,e.jsx(t.h2,{id:"models",children:"Models"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/Model/Project",children:"Project"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/Model/ProjectsIdPutRequest",children:"ProjectsIdPutRequest"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/Model/ProjectsPostRequest",children:"ProjectsPostRequest"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/Model/ProjectsProjectIdTasksIdPutRequest",children:"ProjectsProjectIdTasksIdPutRequest"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/Model/ProjectsProjectIdTasksPostRequest",children:"ProjectsProjectIdTasksPostRequest"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"/docs/Model/Task",children:"Task"})}),`
`]}),`
`,e.jsx(t.h2,{id:"tests",children:"Tests"}),`
`,e.jsx(t.p,{children:"To run the tests, use:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`composer install\r
vendor/bin/phpunit
`})})]})}function o(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{o as default,d as excerpt,c as frontmatter,l as tableOfContents};
//# sourceMappingURL=installation-BYn17KuZ.js.map
