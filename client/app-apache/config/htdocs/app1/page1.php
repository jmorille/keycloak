<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Page 1</title>

	<link rel="stylesheet" media="screen" href="/css/style.css?v=8may2013">
	<link rel="alternate" type="application/rss+xml" title="RSS" href="http://www.csszengarden.com/zengarden.xml">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Dave Shea">
	<meta name="description" content="A demonstration of what can be accomplished visually through CSS-based design.">
	<meta name="robots" content="all">


	<!--[if lt IE 9]>
	<script src="script/html5shiv.js"></script>
	<![endif]-->
</head>


<body id="css-zen-garden">
<div class="page-wrapper">

	<section class="intro" id="zen-intro">
        <?php include 'frag/banner.php'; ?>
        <?php include 'frag/auth.php'; ?>
        <?php include 'frag/preamble.php'; ?>
	</section>

	<div class="main supporting" id="zen-supporting" role="main">
        <div class="explanation" id="zen-explanation" role="article">
            <h3>Rythme et harmonie</h3>
            <p>La préférence pour la rapidité dans la tactique n'est pas la vraie Voie.
                En toutes choses, tant que l'on n'est pas en harmonie avec les rythmes, on tergiverse sur rapidité ou lenteur.
                Lorsque l'on est devenu expert dans toutes les voies, on ne semble pas rapide aux regards des autres.
            </p>
            <p>
                Traité des cinq roues : Gorin-no-sho<br/><br/>
                <abbr title="Cascading Style Sheets"> Miyamoto Musashi</abbr>
            </p>
        </div>

        <div class="participation" id="zen-participation" role="article">
            <h3>Esprit</h3>
            <p>Il faut rendre notre esprit semblable à l'eau.
                L'eau prend la forme des récipients qui la contiennent, qu'ils soient carrés ou ronds.
                L'eau peut se réduire à une goutte ou atteindre la taille d'un océan.
            </p>
            <p>
                Traité des cinq roues : Gorin-no-sho<br/><br/>
                <abbr title="Cascading Style Sheets"> Miyamoto Musashi</abbr>
            </p>
        </div>

        <div class="benefits" id="zen-benefits" role="article">
            <h3>Attachement</h3>
            <p>Il ne faut s'attacher avec outrance ni à des armes ni à des outils.
                Excès, insuffisance sont pareils. Inutile d'imiter les autres.
                Possédez les armes et les outils qui sont à votre portée.
                Que l'on soit officier ou simple soldat il n'est pas bien d'aimer certaines choses et d'en haïr d'autres.
                Méditez bien sur ce sujet.
            </p>
            <p>
                Traité des cinq roues : Gorin-no-sho<br/><br/>
                <abbr title="Cascading Style Sheets"> Miyamoto Musashi</abbr>
            </p>
        </div>


        <?php include 'frag/footer.php'; ?>


	</div>


    <?php include 'frag/menu.php'; ?>



</div>

<!--

	These superfluous divs/spans were originally provided as catch-alls to add extra imagery.
	These days we have full ::before and ::after support, favour using those instead.
	These only remain for historical design compatibility. They might go away one day.
		
-->
<div class="extra1" role="presentation"></div><div class="extra2" role="presentation"></div><div class="extra3" role="presentation"></div>
<div class="extra4" role="presentation"></div><div class="extra5" role="presentation"></div><div class="extra6" role="presentation"></div>

</body>
</html>