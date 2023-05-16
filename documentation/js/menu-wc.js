'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">adeona_api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddressesModule.html" data-type="entity-link" >AddressesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AddressesModule-05c5b66ada7941d0f308bc659c9bcc0acb549f8dc61ce848ea90915ab73673fe0f04c2f1ad8dc99d080988bb613a670249cfda8334db2480a73cf417da5bf9de"' : 'data-target="#xs-controllers-links-module-AddressesModule-05c5b66ada7941d0f308bc659c9bcc0acb549f8dc61ce848ea90915ab73673fe0f04c2f1ad8dc99d080988bb613a670249cfda8334db2480a73cf417da5bf9de"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AddressesModule-05c5b66ada7941d0f308bc659c9bcc0acb549f8dc61ce848ea90915ab73673fe0f04c2f1ad8dc99d080988bb613a670249cfda8334db2480a73cf417da5bf9de"' :
                                            'id="xs-controllers-links-module-AddressesModule-05c5b66ada7941d0f308bc659c9bcc0acb549f8dc61ce848ea90915ab73673fe0f04c2f1ad8dc99d080988bb613a670249cfda8334db2480a73cf417da5bf9de"' }>
                                            <li class="link">
                                                <a href="controllers/AddressesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AddressesModule-05c5b66ada7941d0f308bc659c9bcc0acb549f8dc61ce848ea90915ab73673fe0f04c2f1ad8dc99d080988bb613a670249cfda8334db2480a73cf417da5bf9de"' : 'data-target="#xs-injectables-links-module-AddressesModule-05c5b66ada7941d0f308bc659c9bcc0acb549f8dc61ce848ea90915ab73673fe0f04c2f1ad8dc99d080988bb613a670249cfda8334db2480a73cf417da5bf9de"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AddressesModule-05c5b66ada7941d0f308bc659c9bcc0acb549f8dc61ce848ea90915ab73673fe0f04c2f1ad8dc99d080988bb613a670249cfda8334db2480a73cf417da5bf9de"' :
                                        'id="xs-injectables-links-module-AddressesModule-05c5b66ada7941d0f308bc659c9bcc0acb549f8dc61ce848ea90915ab73673fe0f04c2f1ad8dc99d080988bb613a670249cfda8334db2480a73cf417da5bf9de"' }>
                                        <li class="link">
                                            <a href="injectables/AddressesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-55b65f72c3e638fbd2fd57e1b7f559c794e79aaf73e757a6bf0008e74a199f06384fcdc4386673c37f0bf139417fc50bf1f30ea18c5cf85afb454cd2bb1aa3ac"' : 'data-target="#xs-controllers-links-module-AppModule-55b65f72c3e638fbd2fd57e1b7f559c794e79aaf73e757a6bf0008e74a199f06384fcdc4386673c37f0bf139417fc50bf1f30ea18c5cf85afb454cd2bb1aa3ac"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-55b65f72c3e638fbd2fd57e1b7f559c794e79aaf73e757a6bf0008e74a199f06384fcdc4386673c37f0bf139417fc50bf1f30ea18c5cf85afb454cd2bb1aa3ac"' :
                                            'id="xs-controllers-links-module-AppModule-55b65f72c3e638fbd2fd57e1b7f559c794e79aaf73e757a6bf0008e74a199f06384fcdc4386673c37f0bf139417fc50bf1f30ea18c5cf85afb454cd2bb1aa3ac"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-55b65f72c3e638fbd2fd57e1b7f559c794e79aaf73e757a6bf0008e74a199f06384fcdc4386673c37f0bf139417fc50bf1f30ea18c5cf85afb454cd2bb1aa3ac"' : 'data-target="#xs-injectables-links-module-AppModule-55b65f72c3e638fbd2fd57e1b7f559c794e79aaf73e757a6bf0008e74a199f06384fcdc4386673c37f0bf139417fc50bf1f30ea18c5cf85afb454cd2bb1aa3ac"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-55b65f72c3e638fbd2fd57e1b7f559c794e79aaf73e757a6bf0008e74a199f06384fcdc4386673c37f0bf139417fc50bf1f30ea18c5cf85afb454cd2bb1aa3ac"' :
                                        'id="xs-injectables-links-module-AppModule-55b65f72c3e638fbd2fd57e1b7f559c794e79aaf73e757a6bf0008e74a199f06384fcdc4386673c37f0bf139417fc50bf1f30ea18c5cf85afb454cd2bb1aa3ac"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BuildModule.html" data-type="entity-link" >BuildModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BuildModule-e26f1868d6c673a0afa4b884610e5b704e8a11f5d532c56131a5c077bce20b23fa420944fa14632c42259c5eb8cc0280a9858cbaae682c8bc5b7ae505319fab6"' : 'data-target="#xs-controllers-links-module-BuildModule-e26f1868d6c673a0afa4b884610e5b704e8a11f5d532c56131a5c077bce20b23fa420944fa14632c42259c5eb8cc0280a9858cbaae682c8bc5b7ae505319fab6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BuildModule-e26f1868d6c673a0afa4b884610e5b704e8a11f5d532c56131a5c077bce20b23fa420944fa14632c42259c5eb8cc0280a9858cbaae682c8bc5b7ae505319fab6"' :
                                            'id="xs-controllers-links-module-BuildModule-e26f1868d6c673a0afa4b884610e5b704e8a11f5d532c56131a5c077bce20b23fa420944fa14632c42259c5eb8cc0280a9858cbaae682c8bc5b7ae505319fab6"' }>
                                            <li class="link">
                                                <a href="controllers/BuildController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuildController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BuildModule-e26f1868d6c673a0afa4b884610e5b704e8a11f5d532c56131a5c077bce20b23fa420944fa14632c42259c5eb8cc0280a9858cbaae682c8bc5b7ae505319fab6"' : 'data-target="#xs-injectables-links-module-BuildModule-e26f1868d6c673a0afa4b884610e5b704e8a11f5d532c56131a5c077bce20b23fa420944fa14632c42259c5eb8cc0280a9858cbaae682c8bc5b7ae505319fab6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BuildModule-e26f1868d6c673a0afa4b884610e5b704e8a11f5d532c56131a5c077bce20b23fa420944fa14632c42259c5eb8cc0280a9858cbaae682c8bc5b7ae505319fab6"' :
                                        'id="xs-injectables-links-module-BuildModule-e26f1868d6c673a0afa4b884610e5b704e8a11f5d532c56131a5c077bce20b23fa420944fa14632c42259c5eb8cc0280a9858cbaae682c8bc5b7ae505319fab6"' }>
                                        <li class="link">
                                            <a href="injectables/BuildService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuildService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SessionsModule.html" data-type="entity-link" >SessionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SessionsModule-7663ec6462da56239c7ea184100d005b4b60bba8c6b7400f3ba9d4e184189a2aefdf2a845fe9186233204e114722b449f8c5da06fa2926d7c9f88acec7f6a076"' : 'data-target="#xs-controllers-links-module-SessionsModule-7663ec6462da56239c7ea184100d005b4b60bba8c6b7400f3ba9d4e184189a2aefdf2a845fe9186233204e114722b449f8c5da06fa2926d7c9f88acec7f6a076"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SessionsModule-7663ec6462da56239c7ea184100d005b4b60bba8c6b7400f3ba9d4e184189a2aefdf2a845fe9186233204e114722b449f8c5da06fa2926d7c9f88acec7f6a076"' :
                                            'id="xs-controllers-links-module-SessionsModule-7663ec6462da56239c7ea184100d005b4b60bba8c6b7400f3ba9d4e184189a2aefdf2a845fe9186233204e114722b449f8c5da06fa2926d7c9f88acec7f6a076"' }>
                                            <li class="link">
                                                <a href="controllers/SessionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SessionsModule-7663ec6462da56239c7ea184100d005b4b60bba8c6b7400f3ba9d4e184189a2aefdf2a845fe9186233204e114722b449f8c5da06fa2926d7c9f88acec7f6a076"' : 'data-target="#xs-injectables-links-module-SessionsModule-7663ec6462da56239c7ea184100d005b4b60bba8c6b7400f3ba9d4e184189a2aefdf2a845fe9186233204e114722b449f8c5da06fa2926d7c9f88acec7f6a076"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SessionsModule-7663ec6462da56239c7ea184100d005b4b60bba8c6b7400f3ba9d4e184189a2aefdf2a845fe9186233204e114722b449f8c5da06fa2926d7c9f88acec7f6a076"' :
                                        'id="xs-injectables-links-module-SessionsModule-7663ec6462da56239c7ea184100d005b4b60bba8c6b7400f3ba9d4e184189a2aefdf2a845fe9186233204e114722b449f8c5da06fa2926d7c9f88acec7f6a076"' }>
                                        <li class="link">
                                            <a href="injectables/SessionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SessionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AddressesController.html" data-type="entity-link" >AddressesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BuildController.html" data-type="entity-link" >BuildController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SessionsController.html" data-type="entity-link" >SessionsController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddressDeleteGetDTO.html" data-type="entity-link" >AddressDeleteGetDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddressPostDTO.html" data-type="entity-link" >AddressPostDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GlobalService.html" data-type="entity-link" >GlobalService</a>
                            </li>
                            <li class="link">
                                <a href="classes/SessionTokenDTO.html" data-type="entity-link" >SessionTokenDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SessionTokenDTO-1.html" data-type="entity-link" >SessionTokenDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SessionTokenDTO-2.html" data-type="entity-link" >SessionTokenDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddressesService.html" data-type="entity-link" >AddressesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BuildService.html" data-type="entity-link" >BuildService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionsService.html" data-type="entity-link" >SessionsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Graph.html" data-type="entity-link" >Graph</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GraphNode.html" data-type="entity-link" >GraphNode</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});