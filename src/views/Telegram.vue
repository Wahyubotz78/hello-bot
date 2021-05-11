<template>
    <div class="container-fluid inner__">
        <hr>
        <div class="inner__homes">
            <h5>Simple Telegram Bot Builder</h5>
            <p>simple telegram bot builder node.js</p>
        </div>
        <hr>
        <div>
            <br>
            <h6>1. Token</h6>
            <div class="element__editor">
                <div class="form__element">
                    <b-form-input v-model="bot_token" placeholder="Enter your telegram token"></b-form-input>
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
                                        <b-form-group label="Enable Markup / Inline Keyboard" v-slot="{ commandSlot }">
                                            <b-form-radio v-model="element.stats_markup" :value="false" :aria-describedby="commandSlot" name="some-radios">False</b-form-radio>
                                            <b-form-radio v-model="element.stats_markup" :value="true" :aria-describedby="commandSlot" name="some-radios">True</b-form-radio>
                                        </b-form-group>
                                    </div>
                                    <div v-if="element.stats_markup == true">
                                        <div class="form__element">
                                            <label>Markup Name</label>
                                            <b-form-input v-model="element.markup_name" placeholder="Enter Markup Name"></b-form-input>
                                        </div>

                                        <div class="form__element">
                                            <label>Markup Callback Name</label>
                                            <b-form-input v-model="element.callback" placeholder="Enter Markup Reply"></b-form-input>
                                        </div>

                                        <div class="form__element">
                                            <b-form-group label="Markup Type" v-slot="{ markupSlot }">
                                                <b-form-radio v-model="element.type" value="text" :aria-describedby="markupSlot" name="some-radios">Text</b-form-radio>
                                                <b-form-radio v-model="element.type" value="link" :aria-describedby="markupSlot" name="some-radios">Link</b-form-radio>
                                                <b-form-radio v-model="element.type" value="custom" :aria-describedby="markupSlot" name="some-radios">Custom</b-form-radio>
                                            </b-form-group>
                                        </div>

                                        <div class="form__element">
                                            <label>Markup Reply</label>
                                            <b-form-input v-model="element.markup_reply" placeholder="Enter Markup Reply"></b-form-input>
                                        </div>
                                    </div>
                                    <div class="form__element">
                                        <button class="button__delete" @click="deleteFeature(element)">Delete</button>
                                    </div>
                                </div>
                            </transition>
                        </div>

                        <!-- COMMAND + TEXT -->
                        <div v-if="element.id == 2">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="element"><i class='bx bxs-message-add build__element'></i></div>
                                <div class="element__title">#command + text</div>
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
                                        <b-form-group label="Enable Markup / Inline Keyboard" v-slot="{ commandSlot }">
                                            <b-form-radio v-model="element.stats_markup" :value="false" :aria-describedby="commandSlot" name="some-radios">False</b-form-radio>
                                            <b-form-radio v-model="element.stats_markup" :value="true" :aria-describedby="commandSlot" name="some-radios">True</b-form-radio>
                                        </b-form-group>
                                    </div>
                                    <div v-if="element.stats_markup == true">
                                        <div class="form__element">
                                            <label>Markup Name</label>
                                            <b-form-input v-model="element.markup_name" placeholder="Enter Markup Name"></b-form-input>
                                        </div>

                                        <div class="form__element">
                                            <label>Markup Callback Name</label>
                                            <b-form-input v-model="element.callback" placeholder="Enter Markup Reply"></b-form-input>
                                        </div>

                                        <div class="form__element">
                                            <b-form-group label="Markup Type" v-slot="{ markupSlot }">
                                                <b-form-radio v-model="element.type" value="text" :aria-describedby="markupSlot" name="some-radios">Text</b-form-radio>
                                                <b-form-radio v-model="element.type" value="link" :aria-describedby="markupSlot" name="some-radios">Link</b-form-radio>
                                                <b-form-radio v-model="element.type" value="custom" :aria-describedby="markupSlot" name="some-radios">Custom</b-form-radio>
                                            </b-form-group>
                                        </div>

                                        <div class="form__element">
                                            <label>Markup Reply</label>
                                            <b-form-input v-model="element.markup_reply" placeholder="Enter Markup Reply"></b-form-input>
                                        </div>
                                    </div>
                                    <div class="form__element">
                                        <button class="button__delete" @click="deleteFeature(element)">Delete</button>
                                    </div>
                                </div>
                            </transition>
                        </div>

                        <!-- TEXT -->
                        <div v-if="element.id == 3">
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

                        <!-- IMAGES -->
                        <div v-if="element.id == 4">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="element"><i class='bx bxs-image-add build__element'></i></div>
                                <div class="element__title">sticker</div>
                                <div class="element">
                                    <button v-if="element.stats == false" @click="element.stats = true" class="element__button"><i class='bx bx-slider-alt build__element'></i></button>
                                    <button v-if="element.stats == true" @click="element.stats = false" class="element__button"><i class='bx bx-slider-alt build__element'></i></button>
                                </div>
                            </div>
                            <transition name="fade">
                                <div class="element__editor" v-show="element.stats">
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
                            <b-col class="d-flex justify-content-center command__text">
                                <button @click="commandTextPush" class="d-flex justify-content-center feature__button">
                                    <b-card class="feature__card m-2">
                                        <div class="d-flex justify-content-center mb-1">
                                            <i class='bx bxs-message-add feature__icons'></i>
                                        </div>
                                        <h6>#command + text</h6>
                                    </b-card>
                                </button>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col class="d-flex justify-content-center images__">
                                <button @click="stickerPush" class="d-flex justify-content-center feature__button">
                                    <b-card class="feature__card m-2">
                                        <div class="d-flex justify-content-center mb-1">
                                            <i class='bx bxs-image-add feature__icons'></i>
                                        </div>
                                        <h6>sticker</h6>
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
                        5. When done, type "npm i -s telegraf"
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
                    stats: false,
                    stats_markup : false,
                    markup_name : '',
                    callback : '',
                    type : '',
                    markup_reply : ''
                }
            )
        },
        commandTextPush: function() {
            this.feature_add.push(
                {
                    id : 2,
                    name : '#commandtext',
                    text : '',
                    reply : '',
                    stats: false,
                    stats_markup : false,
                    markup_name : '',
                    callback : '',
                    type : '',
                    markup_reply : ''
                }
            )
        },
        textPush: function() {
            this.feature_add.push(
                {
                    id : 3,
                    name : 'text',
                    text : '',
                    reply : '',
                    stats: false,
                    stats_markup : false,
                    markup_name : '',
                    callback : '',
                    type : '',
                    markup_reply : ''
                }
            )
        },
        stickerPush: function() {
            this.feature_add.push(
                {
                    id : 4,
                    name : 'sticker',
                    text : '',
                    reply : '',
                    stats: false,
                    stats_markup : false,
                    markup_name : '',
                    callback : '',
                    type : '',
                    markup_reply : ''
                }
            )
        },
        deleteFeature: function(element) {
            this.feature_add.splice(this.feature_add.indexOf(element), 1)
        },
        showResult: function() {
            var code = ``
            const fc = this.feature_add
            const fct = this.feature_add
            const ft = this.feature_add
            const fs = this.feature_add

            code += `
            const { Telegraf, Markup } = require('telegraf')
            `
            // token
            if(this.bot_token != '') {
                code += `
            // token is auto replaced with form
            const token = "${this.bot_token}"
                `
            } else  {
                code += `
            // token is auto replaced with form
            const token = "YOUR TOKEN"`
            }
            // end token

            code += `
            const telegram = new Telegraf(token)
            
            `

            // command
            for(var a = 0; a < fc.length; a++) {
                var fitur = fc[a]
                if (fitur.id == 1) {
                    if(fitur.text == '' || fitur.reply == '') {
                        code += `
            // ERROR 400 : please add text and reply in command no.${a+1}
                        `
                    } else {
                        if(fitur.stats_markup == true) {
                            if(fitur.markup_name == '' || fitur.markup_reply == '' || fitur.callback == '') {
                                code += `
            // markup is true in feature command no.${a+1}, please add name, reply, type, callback`
                            } else {
                                code += `
            // START COMMAND NO.${a+1}, /${fitur.text}
            const markup${fitur.callback} = Markup.inlineKeyboard([
                Markup.button.callback('${fitur.markup_name}', '${fitur.callback}'),
                // add multiple markup here 
            ])
                
            telegram.command('${fitur.text}', (ctx) => ctx.telegram.sendMessage(
                    ctx.from.id,
                    '${fitur.reply}',
                    markup${fitur.callback}
                )
            )
            
            // callback markup command no.${a+1}
            telegram.action('${fitur.callback}', (ctx) => ctx.reply('${fitur.markup_reply}'))
            // END COMMAND NO.${a+1}, /${fitur.text}
            `
                            }
                        } else {
                            code += `
            // START COMMAND NO.${a+1}, /${fitur.text}
            telegram.command('${fitur.text}', (ctx) => ctx.reply('${fitur.reply}'))
            // END COMMAND NO.${a+1}, /${fitur.text}
                            `
                        }
                    }
                }
            }
            // end command

            // command+text
            for(var b = 0; b < fct.length; b++) {
                var fitur = fct[b]
                if(fitur.id == 2) {
                    if(fitur.text == '' || fitur.reply == '') {
                        code += `
            // ERROR 400 : please add text and reply in command+text no.${b+1}
                        `
                    } else {
                        if(fitur.stats_markup == true) {
                            if(fitur.markup_name == '' || fitur.markup_reply == '' || fitur.callback == '') {
                                code += `
            // markup is true in feature command+text no.${a+1}, please add name, reply, type, callback`
                            } else {
                                code += `
            // START COMMAND+TEXT NO.${a+1}, /${fitur.text}
            const markup${fitur.callback} = Markup.inlineKeyboard([
                Markup.button.callback('${fitur.markup_name}', '${fitur.callback}'),
                // add multiple markup here 
            ])
                
            telegram.hears(/${fitur.text} (.*)/, (ctx) =>
                // use ctx.match[1] to get text adding after command
                ctx.telegram.sendMessage(
                    ctx.from.id,
                    '${fitur.reply}',
                    markup${fitur.callback}
                )
            )
            
            // callback markup command no.${a+1}
            telegram.action('${fitur.callback}', (ctx) => ctx.reply('${fitur.markup_reply}'))
            // END COMMAND+TEXT NO.${a+1}, /${fitur.text}
            `
                            }
                        } else {
                            code += `
            // START COMMAND+TEXT NO.${a+1}, /${fitur.text}
            telegram.hears(/${fitur.text} (.*)/, (ctx) =>
                // use ctx.match[1] to get text adding after command
                ctx.reply('${fitur.reply}')
            )
            // END COMMAND+TEXT NO.${a+1}, /${fitur.text}
                            `
                        }
                    }
                }
            }
            //end command+text

            // text
            const textFeatured = []
            for(var c = 0; c < ft.length; c++) {
                var fitur = ft[c];
                if(fitur.id == 3) {
                    textFeatured.push(fitur)
                }
            }
            if(textFeatured[0] != undefined) {
                code += `
            // TEXT
            telegram.on('text', (ctx) => {
                switch(ctx.message.text) {`
                for(var c = 0; c < textFeatured.length; c++) {
                    var fitur = textFeatured[c]
                    if(fitur.text == '' || fitur.reply == '') {
                        code += `
                    case '...':
                        // please add text and reply in text featured
                        ctx.reply('');
                        break;
                        `
                    } else {
                        code += `
                    case '${fitur.text}':
                        ctx.reply('${fitur.reply}');
                        break;
                        `
                    }
                }
                code += `
                }
            })
            //END TEXT
                `
            }
            // end text

            // sticker
            const stickerfeatured = []
            for(var d = 0; d<fs.length; d++) {
                var fitur = fs[d]
                if(fitur.id == 4) {
                    stickerfeatured.push(fitur)
                }
            }
            if(stickerfeatured[0] != undefined) {
                if(stickerfeatured[0].reply == '') {
                    code += `
            // please add your sticker reply
            `
                } else {
                    code += `
            // STICKER FEATURED
            bot.on('sticker', (ctx) => ctx.reply('${stickerfeatured[0].reply}'))
            // END STICKER
                `
                }
            }

            code += `
            // launch bot
            telegram.launch()
            `
            this.resultCode = code
        }
    }
}
</script>