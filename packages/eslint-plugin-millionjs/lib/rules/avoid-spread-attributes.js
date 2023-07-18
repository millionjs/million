/**
 * @fileoverview This Avoids the use of Spread attributes in a component that is wrapped with a block function, as they can introduce non-deterministic returns.
 * @author Drex
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "You can't use spread attributes inside of a component that is wrapped with a block function, as they can introduce non-deterministic returns.",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
  },

  create(context) {
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const checkAvoidSpreadAttributes = (node) => {
      // console.log(node, "check avoid");
      let currentNode = node;
      // console.log(currentNode)
      while (currentNode.parent) {
        console.log(currentNode.parent.type, currentNode);
        if (
          currentNode.parent.type === "CallExpression" &&
          currentNode.parent.callee.name === "block"
        ) {
          context.report({
            node,
            message:
              "You can't use spread attributes inside of a component that is wrapped with a block function, as they can introduce non-deterministic returns.",
          });
        }
        currentNode = currentNode.parent;
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      JSXSpreadAttribute: checkAvoidSpreadAttributes,
    };
  },
};
