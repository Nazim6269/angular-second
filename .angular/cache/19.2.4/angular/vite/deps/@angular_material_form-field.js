import {
  MAT_ERROR,
  MAT_FORM_FIELD,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MAT_PREFIX,
  MAT_SUFFIX,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  getMatFormFieldDuplicatedHintError,
  getMatFormFieldMissingControlError,
  getMatFormFieldPlaceholderConflictError
} from "./chunk-3WIKH4MA.js";
import "./chunk-ADAPV2WD.js";
import "./chunk-V4URM32O.js";
import "./chunk-NHB7U2IX.js";
import "./chunk-B3XRE2WU.js";
import "./chunk-Q7XJO3DJ.js";
import "./chunk-R7HHAWHE.js";

// node_modules/@angular/material/fesm2022/form-field.mjs
var matFormFieldAnimations = {
  // Represents:
  // trigger('transitionMessages', [
  //   // TODO(mmalerba): Use angular animations for label animation as well.
  //   state('enter', style({opacity: 1, transform: 'translateY(0%)'})),
  //   transition('void => enter', [
  //     style({opacity: 0, transform: 'translateY(-5px)'}),
  //     animate('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
  //   ]),
  // ])
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: {
    type: 7,
    name: "transitionMessages",
    definitions: [{
      type: 0,
      name: "enter",
      styles: {
        type: 6,
        styles: {
          opacity: 1,
          transform: "translateY(0%)"
        },
        offset: null
      }
    }, {
      type: 1,
      expr: "void => enter",
      animation: [{
        type: 6,
        styles: {
          opacity: 0,
          transform: "translateY(-5px)"
        },
        offset: null
      }, {
        type: 4,
        styles: null,
        timings: "300ms cubic-bezier(0.55, 0, 0.55, 0.2)"
      }],
      options: null
    }],
    options: {}
  }
};
export {
  MAT_ERROR,
  MAT_FORM_FIELD,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MAT_PREFIX,
  MAT_SUFFIX,
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix,
  getMatFormFieldDuplicatedHintError,
  getMatFormFieldMissingControlError,
  getMatFormFieldPlaceholderConflictError,
  matFormFieldAnimations
};
//# sourceMappingURL=@angular_material_form-field.js.map
