<template>
  <section class="resume-section experience-section mb-5">
      <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Expérience de travail</h2>
      <div class="resume-section-content">
          <div class="resume-timeline position-relative">
              <article class="resume-timeline-item position-relative pb-5">
                  <div class="resume-timeline-item-header mb-2">
                      <div class="d-flex flex-column flex-md-row">
                          <h3 class="resume-position-title font-weight-bold mb-1">Programmeur Online</h3>
                          <div class="resume-company-name ml-auto">
                              <a href="https://montreal.ubisoft.com/fr/" target="_blank">Ubisoft Montréal</a>
                          </div>
                      </div>
                      <div class="resume-position-time">Mars 2019 - Octobre 2020 (Niveau 1 - junior)</div>
                      <div class="resume-position-time">Octobre 2020 - Actuel (Niveau 2 - intermédiaire)</div>
                  </div>
                  <div class="resume-timeline-item-desc">
                      <p>
                          Programmeur Online dans l'équipe Vanguard du département Multiplayer de Harbour (Solutions "Online" chez Ubisoft) à Montréal.
                          Vanguard est un UOR (Ubisoft Online Requirement) pour les serveurs de jeux
                          dédiés.
                      </p>
                      <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                              <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                                  Détails
                              </h4>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>
                                    Nous travaillons sur une platforme à microservices et des outils pour déployer, monitorer (surveiller) et contrôler les serveurs
                                    dédiés dans le Cloud (
                                    <a href="https://aws.amazon.com/fr/gamelift/" target="_blank">AWS GameLift</a>, Ubisoft
                                    <a href="https://www.i3d.net/" target="_blank">i3D.net</a>,
                                    <a href="https://agones.dev/site/" target="_blank">Google Agones</a>) pour des équipes de production (jeux) d'Ubisoft.

                                </p>
                                <p>
                                    Ce n'est pas une abstraction des fournisseurs - nous ajoutons de la valeur:
                                    <ul>
                                        <li>
                                            Nous créons et améliorons des fonctionnalités:
                                            <ul>
                                                <li>
                                                    Des stratégies d'allocation de sessions de jeux sur les serveurs
                                                </li>
                                                <li>
                                                    Un "autoscaler" qui met à l'échelle les flottes de serveurs selon des règles et des stratégies
                                                </li>
                                                <li>
                                                    Un agent inclus avec le SDK pour les serveurs
                                                </li>
                                                <li>etc.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Nous fournissons des outils:
                                            <ul>
                                                <li>
                                                    Un kit de développement logiciel (SDK) en C++ et C# pour les serveurs
                                                </li>
                                                <li>
                                                    Un logiciel "Client" en Golang
                                                </li>
                                                <li>
                                                    Un logiciel avec une interface homme-machine en ligne de commande (CLI)
                                                </li>
                                                <li>
                                                    Une application web avec une interface utilisateur (UI)
                                                </li>
                                                <li>
                                                    Des métriques
                                                </li>
                                                <li>etc.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Nous rendons le tous fonctionnel avec l'environnement Ubisoft.
                                        </li>
                                    </ul>
                                </p>

                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                              <h4 class="resume-timeline-item-desc-heading font-weight-bold">
                                  Mon travail
                              </h4>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                            <p>
                                J'ai principalement travaillé sur le design, le développement et l'amélioration des
                                <a href="https://microservices.io/" target="_blank">microservices</a> de Vanguard, l'Autoscaler, l'outil CLI, l'outil UI (Console),
                                la version locale "light" et des stratégies d'allocations.
                            </p>
                            <p>
                                J'ai touché à l'ensemble du processus: analyser les requis, planifier/concevoir/organiser, développer (full stack - Frontend
                                et Backend), tester (manuel, unités, fonctions, e2e, load), révision de design
                                et de code (Code and design review), automatisation (scripts), déploiement,
                                surveillance (monitoring), documentation (documentation interne, guide d'intégration,
                                guide utilisateur, etc.), support des clients, rédaction des requis (récits
                                utilisateurs), présentations/démonstrations (français et anglais) et plus
                                (par exemple,
                                <a href="https://www.canada.ca/en/revenue-agency/services/scientific-research-experimental-development-tax-incentive-program.html"
                                    target="_blank">SRED - Article sur la recherche scientifique et le développement expérimental
                                    pour le gouvernement du Canada)</a>.
                            </p>
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>

                      <h4 class="resume-timeline-item-desc-heading font-weight-bold">Mots clés</h4>
                      <ul class="list-inline">
                          <li class="list-inline-item">
                              <a href="https://go.dev/" target="_blank">
                                  <span class="badge badge-primary badge-pill">
                                      Golang
                                  </span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://www.docker.com/" target="_blank">
                                  <span class="badge badge-primary badge-pill">
                                      Docker
                                  </span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://kubernetes.io/" target="_blank">
                                  <span class="badge badge-primary badge-pill">
                                      Kubernetes (K8s)
                                  </span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://cloud.google.com/gcp" target="_blank">
                                  <span class="badge badge-primary badge-pill">
                                      Google Cloud Platform (GCP)
                                  </span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://aws.amazon.com/fr/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Amazon Web Services (AWS)</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://aws.amazon.com/fr/gamelift/" target="_blank">
                                  <span class="badge badge-primary badge-pill">AWS GameLift</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://aws.amazon.com/fr/s3/" target="_blank">
                                  <span class="badge badge-primary badge-pill">AWS Simple Storage Service (S3)</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://agones.dev/site/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Google Agones</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://www.i3d.net/" target="_blank">
                                  <span class="badge badge-primary badge-pill">i3D.net</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://swagger.io/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Swagger (API)</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://vuejs.org/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Vue.js</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://vuex.vuejs.org/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Vuex</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://router.vuejs.org/" target="_blank">
                                  <span class="badge badge-primary badge-pill">vue-router</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://vuetifyjs.com/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Vuetify</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://leafletjs.com/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Leaflet</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://grafana.com/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Grafana</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://prometheus.io/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Prometheus</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://git-scm.com/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Git</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://gitlab.com/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Gitlab</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://www.atlassian.com/fr/software/jira" target="_blank">
                                  <span class="badge badge-primary badge-pill">Jira</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
                                  <span class="badge badge-primary badge-pill">HTML</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://en.wikipedia.org/wiki/css" target="_blank">
                                  <span class="badge badge-primary badge-pill">CSS</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://www.javascript.com/" target="_blank">
                                  <span class="badge badge-primary badge-pill">JavaScript</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://www.mongodb.com/fr" target="_blank">
                                  <span class="badge badge-primary badge-pill">MongoDB</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://www.mongodb.com/cloud/atlas" target="_blank">
                                  <span class="badge badge-primary badge-pill">Atlas</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="" target="_blank">
                                  <span class="badge badge-primary badge-pill">Unit tests</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="" target="_blank">
                                  <span class="badge badge-primary badge-pill">E2E</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://github.com/spf13/cobra" target="_blank">
                                  <span class="badge badge-primary badge-pill">Cobra</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://github.com/spf13/viper" target="_blank">
                                  <span class="badge badge-primary badge-pill">Viper</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://cloud.google.com/pubsub" target="_blank">
                                  <span class="badge badge-primary badge-pill">GCP Pub/Sub</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://fr.wikipedia.org/wiki/Management_agile" target="_blank">
                                  <span class="badge badge-primary badge-pill">Agile</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://www.scrum.org/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Scrum</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://en.wikipedia.org/wiki/CI/CD" target="_blank">
                                  <span class="badge badge-primary badge-pill">CI/CD</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://slack.com/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Slack</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://www.microsoft.com/fr-ca/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Microsoft Teams</span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://www.office.com/" target="_blank">
                                  <span class="badge badge-primary badge-pill">Microsoft Office</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </article>

          </div>
      </div>
  </section>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: 'ResumeWorkExp',

    data: () => ({}),

    computed: {
      ...mapGetters({
        'currentLanguage': 'currentLanguage',
        'dictionary': 'dictionary'
      }),
    },
  }
</script>