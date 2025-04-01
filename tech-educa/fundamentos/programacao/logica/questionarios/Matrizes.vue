<script>

import {QuestionModel, QuestionType, ChoiceOption, LanguageModel, FlowForm} from '@ditdot-dev/vue-flow-form'

export default {
  name: 'Questionário sobre Matrizes',
  components: {
    FlowForm
  },
  data() {
    return {
      submitted: false,
      completed: false,
      score: 0,
      total: 8,
      time: 0,
      formattedTime: '',
      answers: {
        html_1: ['2', '3'],
        html_2: 'false',
        html_3: '2',
        html_4: ['3', '4'],
        ux_1: ['1', '2', '4'],
        ux_2: 'false',
        ux_3: '4',
        ux_4: 'true',
      },
      language: new LanguageModel({
        pressEnter: "Pressione Enter para continuar",
        percentCompleted: ':percent% completo'
      }),
      // Create question list with QuestionModel instances
      questions: [
        new QuestionModel({
          id: 'start',
          tagline: '8 questões',
          title: 'Vamos revisar sobre Matrizes!',
          content: 'As questões a seguir são baseadas no conteúdo da página, revise o conteúdo se precisar 😃',
          type: QuestionType.SectionBreak,
          required: true,
        }),
        new QuestionModel({
          id: 'html_1',
          title: 'Which of the following are valid input field types?',
          helpText: 'Choose all answers that apply.',
          type: QuestionType.MultipleChoice,
          required: true,
          multiple: true,
          options: [
            new ChoiceOption({
              label: 'check',
              value: '1'
            }),
            new ChoiceOption({
              label: 'date',
              value: '2'
            }),
            new ChoiceOption({
              label: 'image',
              value: '3'
            }),
            new ChoiceOption({
              label: 'telephone',
              value: '4'
            })
          ]
        }),
        new QuestionModel({
          id: 'html_2',
          title: '<label> is associated with <input> using the "name" attribute.',
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          required: true,
          multiple: false,
          options: [
            new ChoiceOption({
              label: 'True',
              value: 'true'
            }),
            new ChoiceOption({
              label: 'False',
              value: 'false'
            })
          ]
        }),
        new QuestionModel({
          id: 'html_3',
          title: 'Which HTML element is used to define a dropdown list?',
          helpText: "Which one sounds right? There's only one right answer.",
          type: QuestionType.MultipleChoice,
          required: true,
          multiple: false,
          options: [
            new ChoiceOption({
              label: '<form>',
              value: '1'
            }),
            new ChoiceOption({
              label: '<select>',
              value: '2'
            }),
            new ChoiceOption({
              label: '<fieldset>',
              value: '3'
            }),
            new ChoiceOption({
              label: '<legend>',
              value: '4'
            })
          ]
        }),
        new QuestionModel({
          id: 'html_4',
          title: 'To which elements can :invalid pseudo class be applied?',
          type: QuestionType.MultipleChoice,
          multiple: true,
          helpText: 'Select one or more correct answers.',
          required: true,
          options: [
            new ChoiceOption({
              label: '<legend>',
              value: '1'
            }),
            new ChoiceOption({
              label: '<fieldset>',
              value: '2'
            }),
            new ChoiceOption({
              label: '<form>',
              value: '3'
            }),
            new ChoiceOption({
              label: '<input>',
              value: '4'
            })
          ]
        }),
        new QuestionModel({
          title: 'Excellent! You are halfway through.',
          content: 'Form UX is important too. Test your form usability knowledge in the following section.',
          type: QuestionType.SectionBreak
        }),
        new QuestionModel({
          id: 'ux_1',
          title: 'How to reduce the perceived complexity of the long form?',
          type: QuestionType.MultipleChoice,
          multiple: true,
          helpText: 'Select all that apply.',
          required: true,
          options: [
            new ChoiceOption({
              label: 'Divide the form into multiple steps',
              value: '1'
            }),
            new ChoiceOption({
              label: 'Add progress tracking',
              value: '2'
            }),
            new ChoiceOption({
              label: 'Use as many emojis as possible',
              value: '3'
            }),
            new ChoiceOption({
              label: 'Group questions into sections',
              value: '4'
            })
          ]
        }),
        new QuestionModel({
          id: 'ux_2',
          title: 'Error messages are bad because they confuse users.',
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          multiple: false,
          required: true,
          options: [
            new ChoiceOption({
              label: 'True',
              value: 'true'
            }),
            new ChoiceOption({
              label: 'False',
              value: 'false'
            })
          ]
        }),
        new QuestionModel({
          id: 'ux_3',
          title: 'How to make the input format clear?',
          type: QuestionType.MultipleChoice,
          multiple: false,
          helpText: 'Select one correct answer.',
          required: true,
          options: [
            new ChoiceOption({
              label: 'Add progress bar to the form',
              value: '1'
            }),
            new ChoiceOption({
              label: 'Mark required vs. optional fields',
              value: '2'
            }),
            new ChoiceOption({
              label: 'Use bold color palette',
              value: '3'
            }),
            new ChoiceOption({
              label: 'Use placeholder and masked input',
              value: '4'
            })
          ]
        }),
        new QuestionModel({
          id: 'ux_4',
          title: 'Inline validation should have a real time feedback.',
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          multiple: false,
          required: true,
          options: [
            new ChoiceOption({
              label: 'True',
              value: 'true'
            }),
            new ChoiceOption({
              label: 'False',
              value: 'false'
            })
          ]
        })
      ]
    }
  },
  methods: {
    /* eslint-disable-next-line no-unused-vars */
    onComplete(completed, questionList) {
      // This method is called whenever the "completed" status is changed.
      this.completed = completed
    },

    arrayEquals(a, b) {
      return Array.isArray(a) && Array.isArray(b) && a.length === b.length &&
          a.every((val, index) => val === b[index])
    },

    calculateScore() {
      this.questions.forEach(question => {
        if (question.type !== QuestionType.SectionBreak) {
          let answer = question.answer
          if (typeof answer === 'object') {
            answer.sort((a, b) => a - b)

            if (this.arrayEquals(answer, this.answers[question.id])) {
              this.score++
            }
          }
          if (answer == this.answers[question.id]) {
            this.score++
          }
        }
      })
    },

    onQuizSubmit() {
      // Set `submitted` to true so the form knows not to allow back/forward
      // navigation anymore.
      this.$refs.flowform.submitted = true

      this.submitted = true
      this.calculateScore()
    },

    onTimer(time, formattedTime) {
      this.time = formattedTime
      this.formattedTime = formattedTime
    }
  },
}
</script>

<template>
  <div>
    <flow-form
        ref="flowform"
        v-on:complete="onComplete"
        v-on:submit="onQuizSubmit"
        v-on:timer="onTimer"
        v-bind:questions="questions"
        v-bind:language="language"
        v-bind:standalone="true"
        v-bind:timer="true"
        timer-start-step="html_1"
    >
      <!-- Custom content for the Complete/Submit screen slots in the FlowForm component -->
      <!-- We've overriden the default "complete" slot content -->
      <template v-slot:complete>
        <p>
          <span class="fh2">You did it!</span>
          <span v-if="!submitted" class="f-section-text">
            Review your answers or press Calculate score to see your result.
          </span>
        </p>
      </template>

      <!-- We've overriden the default "completeButton" slot content -->
      <template v-slot:completeButton>
        <div class="f-submit" v-if="!submitted">
          <button
              class="o-btn-action"
              ref="button"
              type="submit"
              href="#"
              v-on:click.prevent="onQuizSubmit()"
              aria-label="Press to submit">
            <span>Calculate score</span>
          </button>
          <a
              class="f-enter-desc"
              href="#"
              v-on:click.prevent="onQuizSubmit()"
              v-html="language.formatString(language.pressEnter)">
          </a>
        </div>
        <p class="text-success" v-if="submitted && time">Your time: {{ formattedTime }}</p>
        <p class="text-success" v-if="submitted && score < 4">"You scored {{ score }} out of {{ total }}. There's a lot of room for improvement."</p>
        <p class="text-success" v-else-if="submitted && score < 7">"You scored {{ score }} out of {{ total }}. Not bad at all!"</p>
        <p class="text-success" v-else-if="submitted && score <= total">"You scored {{ score }} out of {{ total }}. Wow, that's impressive!"</p>
      </template>
    </flow-form>
  </div>
</template>

<style lang="css">

.vff body {
  overflow: hidden;
}

.vff{-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-font-smoothing:antialiased;-o-font-smoothing:antialiased;font-weight:400;line-height:1.34;min-height:220px}@media screen and (max-width:1023px){.vff,.vff-footer{font-size:15px}}@media screen and (min-width:1366px){.vff,.vff-footer{font-size:18px}}@media screen and (min-width:1920px){.vff{font-size:22px}}@media screen and (min-width:2560px){.vff{font-size:25px}}.vff hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}.vff code,.vff kbd,.vff pre{font-family:monospace,monospace;font-size:1em}.vff small{font-size:80%}.vff sub,.vff sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.vff sub{bottom:-.25em}.vff sup{top:-.5em}.vff b,.vff strong{font-weight:bolder}.vff a{background-color:transparent;cursor:pointer}.vff a,.vff a:active,.vff a:focus,.vff a:hover{outline:0;text-decoration:none}.vff ol,.vff table,.vff ul{margin-bottom:22px;margin-top:0}.vff img{height:auto;margin-bottom:22px;max-width:100%}.vff .text-thin{font-weight:300}.vff .disabled,.vff [disabled]{cursor:not-allowed;opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vff .clearfix:after{clear:both;content:" ";display:block;font-size:0;height:0;visibility:hidden}.vff ol.reset-list,.vff ul.reset-list{list-style:none;margin:0;padding:0}.vff{-webkit-box-sizing:border-box;box-sizing:border-box;margin:18vh 0 60px;padding:0 10%;position:relative;text-align:left;width:100%}header.vff-header+.vff{margin-top:16vh}header.vff-header+.vff.vff-not-standalone{margin-top:0}.vff *,.vff :after,.vff :before{-webkit-box-sizing:inherit;box-sizing:inherit}.vff .q-is-active{opacity:1}.vff .q-form.q-is-inactive{display:none}.vff .f-full-width{display:block;width:100%}.vff .f-string-em{text-transform:uppercase}.vff .f-enter{margin-bottom:20px}.vff .f-container,header.vff-header .f-container{padding:0 8%;width:100%}.vff .f-container{margin-bottom:1em;margin-top:1em}header.vff-header{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1;padding:.9em 10% .8em;position:static;width:100%}.vff-header *,.vff-header :after,.vff-header :before{-webkit-box-sizing:inherit;box-sizing:inherit}header.vff-header .f-container{margin:0}header.vff-header img.f-logo,header.vff-header svg.f-logo{height:18px;max-width:240px;opacity:1}.vff button,.vff input,.vff optgroup,.vff select,.vff textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}.vff fieldset{padding:.35em .75em .625em}.vff legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}.vff [type=number]::-webkit-inner-spin-button,.vff [type=number]::-webkit-outer-spin-button{height:auto}.vff [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.vff [type=search]::-webkit-search-decoration{-webkit-appearance:none}.vff [type=file]{appearance:none;-moz-appearance:none;-webkit-appearance:none;border:0;border-radius:0;font-size:.5em;font-weight:900;line-height:normal;margin:0 .2em;outline:0;padding:.1em 0 .15em}.vff input[type=file]:focus{outline:1px dotted #000;outline-offset:4px}@media (prefers-color-scheme:dark){.vff input[type=file]:focus{outline-color:#fff}}.vff input[type=file]::-webkit-file-upload-button{display:inline-block;font:inherit;font-size:.86em;font-weight:400;margin-right:.6em;max-width:100%;min-height:44px;min-width:90px;white-space:pre-wrap}.vff input[type=file]::file-selector-button{display:inline-block;font:inherit;font-size:.86em;font-weight:400;margin-right:.6em;max-width:100%;min-height:44px;min-width:90px;white-space:pre-wrap}.vff [type=button],.vff [type=reset],.vff [type=submit],.vff button,.vff input{-webkit-appearance:none;overflow:visible}.vff button{border:none;cursor:pointer;display:inline-block;max-width:100%;min-height:44px;outline:0;padding:.6em 1.4em;text-align:center;white-space:pre-wrap}.vff .o-btn-action{font-weight:900;line-height:1.2;text-transform:lowercase;z-index:1}.vff .o-btn-action span{font-size:1em;text-decoration:none;-webkit-transition:all .4s ease 0s;transition:all .4s ease 0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vff .f-enter-desc{display:inline-block;font-size:.9em;margin-left:.6em;margin-top:.7em}.vff span.faux-form{border-bottom:1px solid;display:inline-block;margin-left:0;margin-right:.2em;position:relative;white-space:nowrap}.vff select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;border-radius:0;cursor:pointer;font-size:.5em;line-height:1.32;margin:0;opacity:0;outline:0;padding:.6em 8px;position:absolute;text-transform:none;width:100%;z-index:1}.vff input[type=date],.vff input[type=email],.vff input[type=number],.vff input[type=password],.vff input[type=tel],.vff input[type=text],.vff input[type=url],.vff textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:0;border-bottom:1px solid;border-radius:0;font-size:.72em;font-weight:900;line-height:1.48;margin:0 .6em 0 0;outline:0;padding:.16em .2em}.vff .f-other.f-selected .f-label{font-weight:900}.vff textarea{display:block;outline:none;overflow:auto;resize:vertical}.vff .f-full-width input[type=date],.vff .f-full-width input[type=email],.vff .f-full-width input[type=file],.vff .f-full-width input[type=number],.vff .f-full-width input[type=password],.vff .f-full-width input[type=tel],.vff .f-full-width input[type=text],.vff .f-full-width input[type=url],.vff .f-full-width span.faux-form,.vff .f-full-width textarea{padding-left:.16em;padding-right:.16em;width:100%}.vff .f-required{display:none}.vff .f-answer.f-full-width{margin-top:26px}.vff span.f-sub+.f-answer.f-full-width{margin-top:22px}.vff div.field-sectionbreak .f-answer{margin-top:18px}.vff span.f-empty{display:inline-block;font-weight:300;min-width:3em;padding-bottom:4px;padding-right:28px}.vff span.f-answered{font-weight:900}.vff .f-arrow-down{bottom:0;display:inline-block;height:100%;line-height:1.3;margin-left:.2em;pointer-events:none;position:absolute;right:0;width:18px}.vff .f-arrow-down svg{height:auto;width:100%}.vff.vff-is-ios .field-date:not(.f-has-value) .f-answer>span{left:0;position:relative;top:0}.vff.vff-is-ios .field-date:not(.f-has-value) .f-answer>span:before{content:attr(data-placeholder);display:block;padding:.12em .2em;pointer-events:none;position:absolute}.vff.vff-is-ios input[type=date]{display:block;height:32px}.vff .field-submit .f-section-wrap a,.vff a.f-link{border-bottom:1px dotted;color:inherit;word-break:break-word}.vff .field-submit .f-section-wrap a:active,.vff .field-submit .f-section-wrap a:hover,.vff a.f-link:active,.vff a.f-link:hover{border-bottom:none;color:inherit}.vff .f-section-text,.vff .fh2 span.f-label-scale,.vff li,.vff p,.vff span.f-sub,.vff span.f-tagline{font-size:1.1em;line-height:1.34}.vff .fh1,.vff h1{font-size:3em;font-weight:900;margin:.67em 0}.vff .fh2,.vff h2{font-size:2.4em;font-weight:900;line-height:1.34;margin-bottom:21px;padding-right:1.8em}.vff .fh3,.vff h3{font-size:1.5em;font-weight:300;margin-bottom:0;margin-top:0}.vff .fh1,.vff .fh2,.vff .fh3{display:block}.vff span.f-sub,.vff span.f-tagline{display:block;font-weight:400}.vff .fh2 span.f-label-scale,.vff .fh2 span.f-sub,.vff .fh2 span.f-tagline{font-size:.51em}.vff .fh2 span.f-label-scale{font-size:.42em}.vff span.f-sub,.vff span.f-tagline,.vff span.f-text{margin-bottom:8px}.vff span.f-sub{margin-top:5px}.vff span.f-sub span:not(.f-string-em){margin-right:.4em}.vff span.f-sub span.f-help{display:block}.vff span.f-sub span+span.f-help{margin-top:0}.vff span.f-text{margin-right:.6em}.vff p.f-description{margin-top:0;padding-right:4em}.vff p.f-description a.f-link,.vff p.f-description span{margin-right:8px}.vff ul.f-radios{list-style-type:none;margin:0;max-width:590px;min-width:160px;padding:0}.vff ul.f-radios li{-webkit-touch-callout:none;cursor:default;font-weight:300;line-height:1.24;margin:.5em 0 .6em;overflow:hidden;padding:.62em .68em;position:relative;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}.vff ul.f-radios li.f-other input[type=text]{border:0;font-size:inherit;line-height:inherit;margin:0;padding:0;width:100%}.vff ul.f-radios li.f-other.f-focus{padding:.48em .68em}.vff .f-radios-desc{display:block}.vff .f-radios-desc,.vff ul.f-radios li,.vff ul.f-radios li input[type=text]{font-size:.4em}.vff ul.f-radios li div.f-label-wrap{display:-ms-flexbox;display:-webkit-box;display:flex;width:100%}.vff ul.f-radios li span.f-label{margin-left:.4em}.vff ul.f-radios li span.f-key{text-align:center;width:16px}.vff .field-multiplepicturechoice ul.f-radios{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -8px 0 0;max-width:760px;min-width:auto}.vff .field-multiplepicturechoice ul.f-radios li{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-flex:0;align-items:center;cursor:pointer;display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex:0 0 calc(25% - 8px);flex:0 0 calc(25% - 8px);-ms-flex-direction:column;flex-direction:column;font-size:15px;line-height:1.38;margin-bottom:8px;margin-right:8px;padding:8px 8px 10px;position:relative}.vff .field-multiplepicturechoice ul.f-radios li span.f-image{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:flex;display:-ms-flexbox;height:140px;justify-content:center;margin-bottom:8px;overflow:hidden;width:100%}.vff .field-multiplepicturechoice ul.f-radios li span.f-image img{margin-bottom:0;max-height:100%;max-width:100%}.vff .field-opinionscale ul.f-radios{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -8px 0 0;max-width:760px;min-width:auto}.vff .field-opinionscale ul.f-radios,.vff .field-opinionscale ul.f-radios li{-webkit-box-orient:vertical;-webkit-box-direction:normal;display:-ms-flexbox;display:-webkit-box;display:flex}.vff .field-opinionscale ul.f-radios li{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-flex:1;align-items:center;cursor:pointer;-ms-flex:1 0 calc(10% - 8px);flex:1 0 calc(10% - 8px);font-size:15px;line-height:1.38;margin-bottom:8px;margin-right:8px;min-height:56px;padding:9px 8px 8px;position:relative}.vff .field-opinionscale ul.f-radios li .f-label-wrap{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.vff .field-opinionscale ul.f-radios li .f-label{margin:0}.vff .f-label-scale-wrap{-webkit-box-pack:justify;-ms-flex-pack:justify;display:-ms-flexbox;display:-webkit-box;display:flex;justify-content:space-between;margin:2px -8px .6em 0;max-width:760px;min-width:auto}.vff .f-label-scale{color:var(--vff-secondary-text-color);font-weight:400;margin-right:8px}.vff .f-label-scale-num{display:none}.vff .field-iconrate ul.f-radios{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:-webkit-box;display:flex;margin:0 -8px 0 0;max-width:760px;min-width:auto}.vff .field-iconrate ul.f-radios li{-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;border:none;cursor:pointer;-ms-flex:1 0 0%;flex:1 0 0%;height:100%;justify-content:center;margin-top:0;max-width:60px;outline:none;padding:0 10px 0 0;position:relative}.vff .field-iconrate ul.f-radios li,.vff .field-iconrate ul.f-radios li .f-icon-wrap{-webkit-box-flex:1;-webkit-box-align:center;align-items:center;display:-ms-flexbox;display:-webkit-box;display:flex}.vff .field-iconrate ul.f-radios li .f-icon-wrap{-ms-flex-align:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-direction:column;flex-direction:column}.vff .field-iconrate ul.f-radios li .f-icon{-ms-flex-item-align:stretch;align-self:stretch;margin-bottom:8px}.vff .field-iconrate ul.f-radios li .f-icon-wrap svg{fill:transparent;stroke:var(--vff-secondary-text-color);height:100%;max-height:60px;max-width:60px;width:100%}.vff .field-iconrate ul.f-radios li.f-selected,.vff .field-iconrate ul.f-radios li:active{background-color:unset;border-color:unset}.vff .field-iconrate ul.f-radios li.f-hovered .f-icon-wrap svg,.vff .field-iconrate ul.f-radios li:hover .f-icon-wrap svg{fill:var(--vff-tertiary-text-color)}.vff .field-iconrate ul.f-radios li.f-previous .f-icon-wrap svg,.vff .field-iconrate ul.f-radios li.f-selected .f-icon-wrap svg{fill:var(--vff-tertiary-text-color);stroke:var(--vff-main-text-color)}.vff .f-matrix-wrap{overflow-x:auto}.vff .f-matrix-table{font-size:.5em;font-weight:400;line-height:1.36;margin-bottom:0;width:100%}.vff .f-table-string{font-size:.84em}.vff .f-table-cell{min-width:8.6em;padding:.52em;text-align:left}.vff .f-table-cell.f-row-cell{min-width:9.2em}.vff .f-row-cell{padding-left:1em}.vff .f-column-cell{font-weight:900;text-align:center}.vff .f-matrix-cell{text-align:center}.vff .f-field-wrap,.vff .f-matrix-field{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center}.vff .f-field-mask{cursor:pointer;display:inline-block;height:1.4em;position:relative;width:1.4em}.vff .f-field-svg{fill:transparent;border:1px solid;color:#000;display:inline-block;height:100%;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:color .2s ease 0s;transition:color .2s ease 0s;width:100%}.vff .f-radio-svg{border-radius:100%}.vff .f-checkbox-svg rect,.vff .f-radio-svg circle{fill:inherit}.vff .f-field-control:checked~.f-field-mask .f-field-svg{color:inherit}.vff .f-field-control:checked~.f-field-mask .f-field-svg,.vff .f-field-control:hover~.f-field-mask .f-field-svg{fill:currentColor}.vff .f-field-control:focus{outline:none}.vff .f-field-control:focus-visible~.f-field-mask{outline:1px dotted}.vff .f-field-control:focus-visible~.f-checkbox-mask{outline-offset:2px}.vff-footer{bottom:0;font-weight:300;line-height:1.2;position:fixed;right:0;width:100%}.vff-footer .footer-inner-wrap{padding:11px 20px 12px;text-align:right}.vff-footer .f-nav,.vff-footer .f-progress,.vff-footer .f-timer{display:inline-block}.vff-footer .f-timer{font-family:monospace;font-size:17px;margin-left:.18em}.vff-footer .f-next,.vff-footer .f-prev,.vff-footer .f-progress{margin:0 .18em;padding:.2em}.vff-footer .f-progress{position:relative;top:-1px}.vff-footer a.f-disabled{cursor:default;opacity:.4;pointer-events:none}.vff-footer .f-next svg,.vff-footer .f-prev svg{display:inline-block;height:13px;-webkit-transition:fill .2s ease 0s;transition:fill .2s ease 0s;width:23px}.vff-footer .f-nav-text{display:none}.vff-footer .f-progress-bar{display:inline-block;height:1px;margin:0 6px 0 0;position:static;vertical-align:middle;width:64px}.vff-footer .f-progress-bar-inner{height:1px;-webkit-transition:width .3s ease;transition:width .3s ease}.vff .f-section-wrap{margin-bottom:30px}.vff .f-section-wrap>div,.vff .f-submit{margin-bottom:20px}.vff .field-sectionbreak,.vff .field-submit{max-width:920px}.vff.vff-not-standalone{height:100%;margin-bottom:0;margin-top:0;padding-bottom:100px;padding-top:50px}.vff.vff-not-standalone .f-container{margin:0}.vff.vff-not-standalone .vff-footer{bottom:0;position:absolute;width:100%}.vff-animate{-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.vff-animate *{-webkit-backface-visibility:hidden;backface-visibility:hidden}.vff .f-fade-in{-webkit-animation-name:ffadeIn;animation-name:ffadeIn}@-webkit-keyframes ffadeIn{0%{opacity:0}to{opacity:1}}@keyframes ffadeIn{0%{opacity:0}to{opacity:1}}.vff .f-fade-in-down{-webkit-animation-name:ffadeInDown;animation-name:ffadeInDown}@-webkit-keyframes ffadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-12px,0);transform:translate3d(0,-12px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes ffadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-12px,0);transform:translate3d(0,-12px,0)}to{opacity:1;-webkit-transform:none;transform:none}}.vff .f-fade-in-up{-webkit-animation-name:ffadeInUp;animation-name:ffadeInUp}@-webkit-keyframes ffadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,12px,0);transform:translate3d(0,12px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes ffadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,12px,0);transform:translate3d(0,12px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@media only screen and (min-width:1440px){.vff .field-sectionbreak,.vff .field-submit{max-width:960px}.vff .fh2,.vff h2{padding-right:2.2em}}@media only screen and (min-width:1920px){.vff .field-sectionbreak,.vff .field-submit{max-width:1160px}}@media screen and (max-width:1366px){.vff,header.vff-header{padding-left:5%;padding-right:5%}}@media only screen and (max-width:1023px){.vff,header.vff-header{padding-left:0;padding-right:0}}@media only screen and (max-width:767px){.vff .fh2,.vff h2{font-size:2.2em;padding-right:0}.vff input[type=date],.vff input[type=email],.vff input[type=file],.vff input[type=number],.vff input[type=password],.vff input[type=tel],.vff input[type=text],.vff input[type=url],.vff textarea{font-size:.78em}.vff input[type=file]{font-size:.4em}.vff .fh2 span.f-label-scale,.vff .fh2 span.f-sub,.vff .fh2 span.f-tagline{font-size:.58em}.vff .f-container,header.vff-header .f-container{padding:0 5.5%}.vff span.f-empty{min-width:2.2em;padding-right:20px}.vff p.f-description{padding-right:0}.vff .field-multiplepicturechoice ul.f-radios li{font-size:14px}.vff .field-multiplepicturechoice ul.f-radios li span.f-image{height:90px}}@media screen and (max-width:479px){.vff{margin-top:10vh;min-height:180px}header.vff-header+.vff{margin-top:8vh}header.vff-header+.vff.vff-not-standalone{margin-top:0}.vff input[type=date],.vff input[type=email],.vff input[type=file],.vff input[type=number],.vff input[type=password],.vff input[type=tel],.vff input[type=text],.vff input[type=url],.vff textarea{line-height:1.4;padding:.16em .2em}.vff input[type=file]{font-size:.6em}.vff select{font-size:.72em;padding-bottom:.2em;padding-top:.2em}.vff button{min-height:42px}.vff .f-arrow-down{width:12px}.vff .fh2 span.f-label-scale,.vff .fh2 span.f-sub,.vff .fh2 span.f-tagline{font-size:.64em}.vff .fh2 span.f-label-scale{margin-bottom:.3em}.vff span.f-tagline{line-height:1.5}.vff span.f-text{margin-right:0}.vff .fh2,.vff h2{font-size:1.56em}.vff ul.f-radios li,.vff ul.f-radios li input[type=text]{font-size:.62em}.vff .field-sectionbreak p{font-size:1em}.vff-footer .f-timer{font-size:16px}.vff .f-label-scale-wrap,.vff .field-multiplepicturechoice ul.f-radios,.vff .field-opinionscale ul.f-radios{max-width:330px}.vff .field-multiplepicturechoice ul.f-radios li{-webkit-box-flex:0;-ms-flex:0 0 calc(50% - 8px);flex:0 0 calc(50% - 8px)}.vff .field-opinionscale ul.f-radios li{-webkit-box-flex:0;-ms-flex:0 0 calc(20% - 8px);flex:0 0 calc(20% - 8px)}.vff .f-label-scale-wrap{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vff .f-label-scale-num{display:inline}}@media screen and (max-height:400px){.vff{margin-top:12vh;min-height:180px}header.vff-header{position:static}.vff-footer{font-size:15px}.vff-footer .footer-inner-wrap{padding-bottom:8px;padding-top:8px}.vff .f-radios-desc,.vff ul.f-radios li,.vff ul.f-radios li input[type=text]{font-size:14px}.vff .fh2,.vff h2{font-size:1.56em}.vff .fh2 span.f-label-scale,.vff .fh2 span.f-sub,.vff .fh2 span.f-tagline{font-size:.6em}.vff .field-multiplepicturechoice ul.f-radios li span.f-image{height:90px}}

:root{--vff-bg-color:#3eaf7c;--vff-main-text-color:#fff;--vff-secondary-text-color:#b5ebd3;--vff-tertiary-text-color:#52b789;--vff-main-accent-color:#111;--vff-secondary-accent-color:#ecf80d}.vff,.vff input,.vff kbd,.vff select,.vff select option,.vff textarea,.vff-footer,.vff-header{font-family:Poppins,sans-serif}body{background-color:var(--vff-bg-color);margin:0}.vff,.vff.vff-not-standalone{color:var(--vff-main-text-color)}.vff.vff-not-standalone{background-color:var(--vff-bg-color)}header.vff-header{background-color:transparent}header.vff-header svg.f-logo{fill:var(--vff-main-accent-color)}.vff-footer .footer-inner-wrap{background-color:rgba(62,175,124,.75)}.vff input,.vff select option,.vff textarea{color:var(--vff-main-accent-color)}.vff input[type=date],.vff input[type=email],.vff input[type=number],.vff input[type=password],.vff input[type=tel],.vff input[type=text],.vff input[type=url],.vff span.faux-form,.vff textarea{border-bottom-color:var(--vff-secondary-text-color)}.vff a,.vff a:active{color:var(--vff-main-text-color)}.vff ::-webkit-input-placeholder{color:var(--vff-secondary-text-color);font-weight:300;opacity:1}.vff ::-moz-placeholder{color:var(--vff-secondary-text-color);font-weight:300;opacity:1}.vff :-ms-input-placeholder{color:var(--vff-secondary-text-color)!important;font-weight:300!important;opacity:1!important}.vff :-moz-placeholder{color:#999;font-weight:300;opacity:1}.vff.vff-is-ios .field-date:not(.f-has-value) .f-answer>span:before{color:var(--vff-secondary-text-color);font-size:.72em;font-weight:300}.vff ul.f-radios li{border:1px solid var(--vff-secondary-text-color);color:var(--vff-secondary-text-color);font-weight:900}.vff ul.f-radios li.f-other.f-selected input{color:inherit}.vff ul.f-radios li.f-selected,.vff ul.f-radios li:active{background-color:var(--vff-tertiary-text-color);border-color:var(--vff-main-text-color);color:var(--vff-main-text-color)}.vff .f-key{color:var(--vff-secondary-accent-color);font-weight:300}.vff span.f-empty{color:var(--vff-secondary-text-color)}.vff span.f-answered{color:var(--vff-main-text-color)}.vff .f-arrow-down svg{fill:var(--vff-main-text-color)}.vff .f-matrix-table{border-collapse:separate;border-spacing:0 .6em}.vff .f-matrix-table thead th{padding-bottom:0}.vff .f-matrix-table td{border:1px solid var(--vff-secondary-text-color);border-left:hidden;border-right:hidden}.vff .f-matrix-table td:first-child{border-left:1px solid var(--vff-secondary-text-color)}.vff .f-matrix-table td:last-child{border-right:1px solid var(--vff-secondary-text-color)}.vff .f-matrix-table thead td:first-child{border:none}.vff .f-field-svg{border-width:2px;color:var(--vff-secondary-text-color)}.vff .f-field-control:checked~.f-field-mask .f-field-svg{color:var(--vff-main-text-color)}.vff .f-matrix-wrap::-webkit-scrollbar{height:10px}.vff .f-matrix-wrap::-webkit-scrollbar-track{background-color:var(--vff-tertiary-text-color)}.vff .f-matrix-wrap::-webkit-scrollbar-thumb{background-color:var(--vff-secondary-text-color)}.vff .o-btn-action{background-color:var(--vff-main-text-color);color:var(--vff-bg-color)}.vff .o-btn-action:focus,.vff .o-btn-action:hover{background-color:var(--vff-main-text-color);opacity:.9}.vff-footer .f-next svg,.vff-footer .f-prev svg{fill:var(--vff-main-text-color)}.vff-footer .f-progress{color:var(--vff-secondary-text-color)}.vff-footer .f-progress-bar{background-color:var(--vff-secondary-text-color)}.vff-footer .f-progress-bar-inner{background-color:var(--vff-main-text-color)}.vff-footer .f-next:hover,.vff-footer .f-prev:hover{background-color:rgba(0,0,0,.07)}.vff .text-muted,.vff p.f-description,.vff span.f-sub,.vff span.f-tagline{color:var(--vff-secondary-text-color)}.vff .f-invalid,.vff .text-alert{color:red}.vff p.text-success{color:#ecf80d}@media (max-height:420px),screen and (max-width:479px){.vff-footer .footer-inner-wrap{background-color:rgba(55,158,112,.7)}}@media (prefers-color-scheme:dark){:root{--vff-bg-color:#313640;--vff-main-text-color:#fff;--vff-secondary-text-color:#aeb6bf;--vff-tertiary-text-color:#41464f;--vff-main-accent-color:#41b883;--vff-secondary-accent-color:#a0dbc1}.vff input,.vff select option,.vff textarea{color:var(--vff-main-accent-color)}.vff ::-webkit-calendar-picker-indicator{-webkit-filter:invert(100%);filter:invert(100%)}.vff span.f-answered{color:var(--vff-main-accent-color)}.vff .f-arrow-down svg{fill:var(--vff-main-accent-color)}.vff .text-success{color:var(--vff-main-accent-color)}.vff-footer .footer-inner-wrap{background-color:var(--vff-bg-color)}.vff-footer .f-next svg,.vff-footer .f-prev svg{fill:var(--vff-main-accent-color)}.vff-footer .f-next.f-disabled svg,.vff-footer .f-prev.f-disabled svg{fill:var(--vff-main-text-color)}.vff-footer .footer-inner-wrap{background-color:rgba(49,54,64,.75)}.vff-footer .f-next:hover,.vff-footer .f-prev:hover{background-color:rgba(0,0,0,.2)}.vff-footer .f-progress-bar{background-color:var(--vff-secondary-text-color);-webkit-filter:brightness(1);filter:brightness(1)}.vff-footer .f-progress-bar-inner{background-color:var(--vff-main-accent-color)}.vff ul.f-radios li{color:var(--vff-secondary-text-color)}.vff .f-key{color:var(--vff-main-accent-color);font-weight:300}}

</style>