<template>
    <div class="container-fluid inner__">
        <hr>
        <div class="inner__homes">
            <h5>Simple Discord Bot Builder</h5>
            <p>simple Discord bot builder node.js</p>
        </div>
        <hr>
        <div>
            <br>
            <h6>1. Token</h6>
            <div class="element__editor">
                <div class="form__element">
                    <b-form-input v-model="bot_token" placeholder="Enter your login token"></b-form-input>
                </div>
            </div>
            <br>
            <h6>2. Feature</h6>
            <br>
            <b-list-group>
                <draggable :list="feature_add" @start="dragging = true" @end="dragging = false">
                    <b-list-group-item v-for="element in feature_add" :key="element.name">
                        <!-- COMMAND -->
                        <div v-if="element.id == 1">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="element"><i class='bx bxs-message-detail build__element'></i></div>
                                <div class="element__title">#command</div>
                                <div class="element">
                                    <button v-if="element.stats == false" @click="element.stats = true" class="element__button"><i class='bx bx-slider-alt build__element'></i></button>
                                    <button v-if="element.stats == true" @click="element.stats = false" class="element__button"><i class='bx bx-slider-alt build__element'></i></button>
                                </div>
                            </div>
                            <transition name="fade">
                                <!--
                                    {
                                        id : 1,
                                        name : '#command',
                                        text : '',
                                        reply : '',
                                        stats: false,
                                        stats_markup : false,
                                        markup_name : '',
                                        callback : '',
                                        type : '',
                                        markup_reply : ''
                                    }
                                -->
                                <div class="element__editor" v-show="element.stats">
                                    <div class="form__element">
                                        <label>Text</label>
                                        <b-form-input v-model="element.text" placeholder="Enter Command"></b-form-input>
                                    </div>
                                    <div class="form__element">
                                        <label>Reply</label>
                                        <b-form-input v-model="element.reply" placeholder="Enter Bot Reply"></b-form-input>
                                    </div>
                                    <div class="form__element">
                                        <button class="button__delete" @click="deleteFeature(element)">Delete</button>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        
                        <!-- TEXT -->
                        <div v-if="element.id == 2">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="element"><i class='bx bxs-comment-edit build__element'></i></div>
                                <div class="element__title">text</div>
                                <div class="element">
                                    <button v-if="element.stats == false" @click="element.stats = true" class="element__button"><i class='bx bx-slider-alt build__element'></i></button>
                                    <button v-if="element.stats == true" @click="element.stats = false" class="element__button"><i class='bx bx-slider-alt build__element'></i></button>
                                </div>
                            </div>
                            <transition name="fade">
                                <div class="element__editor" v-show="element.stats">
                                    <div class="form__element">
                                        <label>Text</label>
                                        <b-form-input v-model="element.text" placeholder="Enter Command"></b-form-input>
                                    </div>
                                    <div class="form__element">
                                        <label>Reply</label>
                                        <b-form-input v-model="element.reply" placeholder="Enter Bot Reply"></b-form-input>
                                    </div>
                                    <div class="form__element">
                                        <button class="button__delete" @click="deleteFeature(element)">Delete</button>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </b-list-group-item>
                </draggable>
            </b-list-group>
            <button class="d-flex justify-content-center mt-2 add__border" @click="$bvModal.show('feature-modal')">
                <div class="d-flex justify-content-center p-3">
                    <i class='bx bx-plus add__icons'></i>
                </div>
            </button>
            <b-modal id="feature-modal" hide-footer>
                <template #modal-title>
                    Feature
                </template>
                <div class="d-block text-center">
                    <b-container>
                        <b-row>
                            <b-col class="d-flex justify-content-center command__">
                                <button @click="commandPush" class="d-flex justify-content-center feature__button">
                                    <b-card class="feature__card m-2">
                                        <div class="d-flex justify-content-center mb-1">
                                            <i class='bx bxs-message-detail feature__icons'></i>
                                        </div>
                                        <h6>#command</h6>
                                    </b-card>
                                </button>
                            </b-col>
                            <b-col class="d-flex justify-content-center text__">
                                <button @click="textPush" class="d-flex justify-content-center feature__button">
                                    <b-card class="feature__card m-2">
                                        <div class="d-flex justify-content-center mb-1">
                                            <i class='bx bxs-comment-edit feature__icons'></i>
                                        </div>
                                        <h6>text</h6>
                                    </b-card>
                                </button>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
                <div class="mt-2">
                    <p>This feature is useful for users submitting to bot</p>
                </div>
            </b-modal>
            <br>
            <h6>3. Build</h6>
            <br>
            <div v-show="result" class="d-flex justify-content-center">
                <button @click="showResult()" class="build__button">Build Now</button>
            </div>
            <div id="result">
                <p>index.js code</p>
                <pre v-highlightjs = resultCode>
                    <code class="javascript">
                    </code>
                </pre>
            </div>
            <div id="result">
                <p>Install Tutorial</p>
                <pre v-highlightjs>
                    <code class="javascript">
                        /*
                        # please install node.js

                        1. Create new Directory for project
                        2. Open Teminal
                        3. Navigate to the directory that has been created in terminal
                        4. Type "npm init"
                        5. When done, type "npm i -s discord.js"
                        6. Create file index.js and add the code below
                        7. Run bot with command "npm run start" or "node index.js"

                        */
                    </code>
                </pre>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    components: {
        draggable
    },
    data() {
        return {
            result: true,
            resultCode: '',
            code: '',
            bot_token: '',
            feature_add : []
        }
    },
    methods: {
        commandPush: function() {
            this.feature_add.push(
                {
                    id : 1,
                    name : '#command',
                    text : '',
                    reply : '',
                    stats: false
                }
            )
        },
        textPush: function() {
            this.feature_add.push(
                {
                    id : 2,
                    name : 'text',
                    text : '',
                    reply : '',
                    stats: false
                }
            )
        },
        deleteFeature: function(element) {
            this.feature_add.splice(this.feature_add.indexOf(element), 1)
        },
        showResult: function() {
            var code = ``
            var fd = this.feature_add
            
            code += `
            const { Client, Intents } = require('discord.js')
            const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
            `

            if(this.bot_token != '') {
                code += `
            const token = '${this.bot_token}'
                `
            } else {
                code += `
            const token = 'YOUR LOGIN TOKEN'
                `
            }

            if(fd[0] != undefined) {
                code += `
            client.on('message', msg => {
                var textMsg = msg.content
                
                // featured here
                switch(textMsg) {
                    `
                for(var a = 0; a < fd.length; a++) {
                    var inner = fd[a]
                    if(inner.text != '' || inner.reply != '') {
                        code += `
                    case '${inner.text}':
                        msg.channel.send('${inner.reply}');
                        break;
                        `
                    } else {
                        code += `
                    case 'please add text in your addons featured no.${0+1}':
                        msg.channel.send('your reply here');
                        break;
                        `
                    }
                }


                code += `
                }
            });
                    `
            }

            code += `
            client.login(token)
            `

            this.resultCode = code
        }
    }
}
</script>