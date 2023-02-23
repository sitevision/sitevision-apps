import type { Property } from "../../Property";

import type { Node } from "../../Node";
import type { Object } from "../../../../java/lang/Object";
import type { ItemVisitor } from "../../ItemVisitor";

/**
 * An implementation of <code>ItemVisitor</code>.
 *  <p>
 *  <code>TraversingItemVisitor</code> is an abstract utility class which allows
 *  to easily traverse an <code>Item</code> hierarchy.
 *  </p>
 *  <p><code>TraversingItemVisitor</code> makes use of the Visitor Pattern as
 *  described in the book 'Design Patterns' by the Gang Of Four (Gamma et al.).
 *  </p>
 *  <p>Tree traversal is done observing the left-to-right order of child
 *  <code>Item</code>s if such an order is supported and exists.
 *  </p>
  
    */
export type TraversingItemVisitor = Object &
  ItemVisitor & {
    /**
     * Implement this method to add behavior performed before a
     *  <code>Property</code> is visited.
     * @param property the <code>Property</code> that is accepting this&#xA; visitor.
     * @param level hierarchy level of this property (the root node starts at&#xA; level 0).
     * @throws RepositoryException if an error occurs.
     */
    entering(property: Property, level: number): void;

    /**
     * Implement this method to add behavior performed before a
     *  <code>Node</code> is visited.
     * @param node the <code>Node</code> that is accepting this visitor.
     * @param level hierarchy level of this node (the root node starts at level&#xA; 0).
     * @throws RepositoryException if an error occurs.
     */
    entering(node: Node, level: number): void;

    /**
     * Implement this method to add behavior performed after a
     *  <code>Property</code> is visited.
     * @param property the <code>Property</code> that is accepting this&#xA; visitor.
     * @param level hierarchy level of this property (the root node starts at&#xA; level 0).
     * @throws RepositoryException if an error occurs.
     */
    leaving(property: Property, level: number): void;

    /**
     * Implement this method to add behavior performed after a <code>Node</code>
     *  is visited.
     * @param node the <code>Node</code> that is accepting this visitor.
     * @param level hierarchy level of this node (the root node starts at level&#xA; 0).
     * @throws RepositoryException if an error occurs.
     */
    leaving(node: Node, level: number): void;

    /**
     * Called when the <code>Visitor</code> is passed to a
     *  <code>Property</code>.
     *  <p>
     *  It calls <code>TraversingItemVisitor.entering(Property, int)</code>
     *  followed by <code>TraversingItemVisitor.leaving(Property, int)</code>.
     *  Implement these abstract methods to specify behavior on 'arrival at' and
     *  'after leaving' the <code>Property</code>.
     *  <p>
     *  If this method throws, the visiting process is aborted.
     * @param property the <code>Property</code> that is accepting this&#xA; visitor.
     * @throws RepositoryException if an error occurs.
     */
    visit(property: Property): void;

    /**
     * Called when the <code>Visitor</code> is passed to a <code>Node</code>.
     *  <p>
     *  It calls <code>TraversingItemVisitor.entering(Node, int)</code> followed
     *  by <code>TraversingItemVisitor.leaving(Node, int)</code>. Implement these
     *  abstract methods to specify behavior on 'arrival at' and 'after leaving'
     *  the <code>Node</code>.
     *  <p>
     *  If this method throws, the visiting process is aborted.
     * @param node the <code>Node</code> that is accepting this visitor.
     * @throws RepositoryException if an error occurs.
     */
    visit(node: Node): void;
  };
