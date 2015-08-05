/// <reference path="../../<%- props.paths.tmp %>/typings/tsd.d.ts" />

import { config } from './index.config';
<% if (props.router.key !== 'none') { -%>
import { routerConfig } from './index.route';
<% } -%>
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';
import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';

declare var malarkey: any;
declare var toastr: Toastr;
declare var moment: moment.MomentStatic;

angular.module('<%- appName %>', [<%- modulesDependencies %>])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)
<% if (props.router.key !== 'none') { -%>
  .config(routerConfig)
<% } -%>
  .run(runBlock)
  .service('githubContributor', GithubContributor)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', acmeNavbar)
  .directive('acmeMalarkey', acmeMalarkey);
