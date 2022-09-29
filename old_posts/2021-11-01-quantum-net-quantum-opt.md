---
title: "Links: Quantum Networks, Quantum Optimization"
layout: page
mathjax: true
---

Earlier in 2021, [Pompili et al](https://arxiv.org/abs/2102.04471) puplished a paper on a realization of a three-node[^1] quantum network. Seems to be a good milestone, but I can't really judge it (nothing new here). Also, this work seems to be the [first](https://qutech.nl/2021/04/15/dutch-researchers-establish-the-first-entanglement-based-quantum-network/?cn-reloaded=1) to implement a multi-node quantum network.

When you want to know more about a subject's important papers, you can usually find them cited in the introductions. In the very first sentence of 'Pompili et al', they reference two highly cited articles: ["The Quantum Internet"](https://arxiv.org/abs/0806.4195) by Kimble, from 2008 and ["Quantum internet: A vision for the road ahead"](https://www.researchgate.net/publication/328376157_Quantum_internet_A_vision_for_the_road_ahead) by Wehner, Elkouss and Hanson, from 2018. These seem to be the papers to read to understand better what's up with quantum networks. 


Honestly, I don't get how we can talk meaningfully about quantum software and networks if we haven't even been able to build a quantum computer with more than 100 qubits.  Maybe that's just my ignorance, but to me it does sound a bit like putting the cart before the horse.


If we look at the history of classical computing and assume quantum computing should follow a similar path (which is assuming a lot, I know), then we are far away. As Nielsen put it in [quantum country](https://quantum.country/qcvc): we are in the ENIAC times of quantum computing, something like the 1970s for classical computing. On the other hand, progress may not develop like it did with classical computing. For example, we already have a somewhat high level abstraction of quantum computing in the form of [programming languages](https://en.wikipedia.org/wiki/Q_Sharp) (admitttedly, they are domain-specific, tailored for particular applications). 



The second link is this nice [article](https://medium.com/qiskit/cutting-through-the-hype-of-quantum-optimization-6d4b5c95e377) by Robert Davis, on which he gives some perspective on why there's some hype around quantum algorithms for optimization. As to why some people think it's important to invest into this field, the article seems to argue:

- It creates a competitive environment where researchers try to find classical algorithms which perform better than claims of the so called quantum advantage;
- Any advance in an optimization problem, provided that the we have powerful hardware, should benefit business enough to justify its use.

On the last point, this depends a lot if we can perform computations _reliably_ and that those computations are done very fast (they cite nanoseconds for todays' computers). Needless to say that we are still far far away from that.

---

### Sidenote: Riesz Representation Theorem

Just as a sidenote, and as an excuse to talk about a theorem, I'd like to expand on two things from Robert Davis' article. The first one is this passage:
 
> Let’s say your optimization problem can be represented as a linear function f, meaning that the function describing it is just the inner product of two vectors.

I'm not sure what he meant, but I guess he's talking about what is called the _Riesz Representation Theorem_ [^2]. This is a nice theorem which plays a role in the mathematical formulation of quantum mechanics, spefically on what's known as the Dirac notation. 

Say we have a vector space (think of it as a space formed by usual vectors). Let's call this vector space $V$. In finite dimensions we can build another space  $W$ which is isomorphic [^3] to $V$. In this new space $W$, vectors are linear functions and those functions take as input vectors belonging to $V$ and return numbers (this type of function is called a _linear functional_). This set of vectors (functionals) is called the _dual space_. What the Riesz Theorem states is that for some vector spaces satisfying some conditions, every linear (and continous) functional in the dual space can be put in the form of an inner product, which for the usual euclidean 3D space is just the familiar dot product. 

The second passage is

> If $f (x_{1}, x_{2} \cdots, x_{n}) = (a_{1} * x_{1}) + (a_{2} * x_{2}) + \cdots + (a_{n} * x_{n})$, then the gradient you’re looking for at the given point x is just the unknown vector $\mathbb{a}$. Your job is to solve for $\mathbb{a}$.

Say we have a $n$-dimensional input vector $\vec{v} = (v_{1}, \cdots, v_{n})$ and we want to find $\vec{a} = (a_{1}, \cdots, a_{n})$. By the Riesz Theorem we know that every linear functional on the space of functions $f(\vec{v})$ is of the form of an inner product. Let our optimization problem be represented by the following linear function:

$$
f(\vec{v}) = f(v_{1}, \cdots, v_{n}) = \vec{v} \cdot \vec{a} = v_{1} a_{1} + \cdots + v_{n}a_{n}.
$$

Now, let the gradient be the gradient with respect to $\vec{v}$, i.e., 

$$
\nabla f \equiv \nabla_{\vec{v}} f = \frac{\partial}{\partial v_{i}} f(\vec{v}) \vec{e}_{i}.
$$

Then,

$$
\begin{aligned}
\nabla f(\vec{v}) &=  \frac{\partial}{\partial v_{1}} v_{1} a_{1} \vec{e_{i}} + \cdots \frac{\partial}{\partial v_{n}} v_{n} a_{n} \vec{e}_{n} = \\
&= a_{1} \vec{e}_{1} + \cdots + a_{n} \vec{e}_{n},
\end{aligned}
$$

where $\vec{e}_{i}$ are orthogonal unit vectors. 

So, the input vector is sufficient to start solving for $\vec{a}$. Moreover, if the set $\{\vec{e}_{i}\}$ forms a basis, then the gradient is the vector $\vec{a}$ in this basis:

$$
\nabla f(\vec{v}) = \sum_{i=1}^{N} a_{i} \vec{e}_{i} = [a]_{\{ \vec{e}_{i}\}}.
$$

I guess that's what he meant with "the gradient you’re looking for at the given point x is just the unknown vector $\mathbb{a}$". 

---

[^1]: A node locally stores, generates and process quantum information.
[^2]: I don't think wikipedia is very useful to learn more about this theorem. For those who already studied linear algebra, on page 188 of [Axler's Linear Algebra Done Right](https://www.amazon.com/Linear-Algebra-Right-Undergraduate-Mathematics/dp/3319110799/ref=sr_1_2?crid=19HCZIYE129HK&dchild=1&keywords=axler+linear&qid=1635796013&sprefix=axler+linear%2Caps%2C336&sr=8-2), 3rd ed., you can find the theorem for finite-dimensional vector spaces and a short proof.
[^3]: More formally, a linear isomorphism: every element in a space is associated with one and only one element of the other space and we can go back and forth between them.