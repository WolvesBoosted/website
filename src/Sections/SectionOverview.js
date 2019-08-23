import React from 'react';
import './SectionOverview.scss';

class SectionOverview extends React.Component {
  render() {
    return (
      <section className="section is-large section-overview has-background-grey">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-4">
              <h1>Overview</h1>
              <h2>Loopring's Vision & Objectives</h2>
              <div className="content">
                The blockchain technology empowers definite ownership — the
                ownership of digital assets, and soon the ownership of physical
                assets as well. It is believed to be the disruptor to the
                traditional notions of currency and will establish the very
                foundation of the next generation of finance. It is, however,
                ironic that most crypto-holders are still trading their assets
                on Centralized Exchanges, or CEXes, by giving up their ownership
                temporarily. Over the years, more than two billion US dollars
                crypto-assets that belong to the users got hacked on those
                platforms.
              </div>
              <div className="content">
                We believe that crypto-trading shall be and can be made
                risk-free on Decentralized Exchanges, or DEXes, that are powered
                by blockchain and Smart Contract technology. We also envision
                that trading crypto-assets on DEXes will be less expensive
                compared to CEXes, and the liquidity will be aggregated at a
                much larger scale, if not globally.
              </div>
              <div className="content">
                Loopring's objective is to design and engineer the best-in-class
                order-based DEX protocol and make it available for the whole
                industry to improve crypto-holders' overall trading experience.
                We expect our effort will accelerate the adoption of the
                blockchain technology and crypto-currencies.
              </div>
            </div>
            <div className="column is-8">
              <figure className="image covered is-8by6">
                <img src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" />
              </figure>
            </div>
            <div className="column is-4">
              <figure className="image covered is-1by1">
                <img
                  className="is-rounded"
                  src="https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                />
              </figure>
            </div>
            <div className="column is-4">
              <h2>Loopring is Secure</h2>
              <div className="content">
                The security of user assets is and will remain to be Loopring's
                first priority. Here at Loopring, we believe it's absurd to talk
                about other aspects of a protocol without evaluating its
                security guarantees.
              </div>
              <div className="content">
                The first three versions of the Loopring protocol do not take
                any custody of user assets at all — traders are always in
                possession of their asset. The latest version, Loopring 3.0,
                relies on smart contract to hold assets to be traded. We
                designed the protocol in a way such that users can always claim
                their assets in all circumstances, even when DEX operators are
                anonymously evil.
              </div>
              <div className="content">
                We claim that Loopring offers users the same level of security
                as the underlying Ethereum blockchain — if a feature called
                On-Chain Data Availability, aka OCDA, is turned on. Trading on
                Loopring-based DEXes demands traders no trust in the DEX owners
                or operators, nor the Loopring team. In terms of crypto-trading,
                being trustless will become the new standard of trustworthiness.
              </div>
              <h2>Much Less Risks for Exchange Owners</h2>
              <div className="content">
                If you have ever run centralized exchanges, you know the stress
                and fear of being hacked. Loopring ensures that even all your
                servers were compromised, you will only lose a couple of Ether
                that you use as transaction fees (gas). You can always recover
                from such incidences and resume your business.
              </div>
            </div>
            <div className="column is-4">
              <h2>Loopring's Performance</h2>
              <div className="content">
                Most DEX protocols suffer terrible performance issues — the
                throughput is too low while the cost is too high. The
                performance issues prevent those protocol from being massively
                adopted as no professional market makers or traders will use
                these protocols as their primary methods of trading.
              </div>
              <div className="content">
                We believe the way most other trading protocols use the
                underlying blockchain is fundamentally wrong. Loopring take s a
                different approach known as{' '}
                <a
                  href="https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477"
                  target="_blank"
                >
                  ZK-Rollup (by Vitalik)
                </a>
                , by migrating most computations off the blockchain and only
                broadcast exchanges' new state roots and their corresponding
                proofs onto the blockchain. In other words, the Loopring
                protocol users the underlying Ethereum blockchain mainly as the
                data layer. As a result, Loopring's throughput is as high as 350
                trades per second when On-Chain Data-Availability is on, and
                6,900 trades per second when On-Chain Data-Availability is off.
                The cost per trade settlement is as small as one-third of a US
                cent, which can be further optimized.
              </div>
              <div className="content">
                We believe Loopring's performance is sufficient for professional
                traders and market makers to take advantage of bots for trading
                automation. Decentralized exchanges built on top of Loopring 3.0
                will soon beat many centralized exchanges.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionOverview;
