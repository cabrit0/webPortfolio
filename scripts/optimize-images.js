const sharp = require('sharp');
const { glob } = require('glob');
const path = require('path');
const fs = require('fs');

// Configurações de otimização
const config = {
  webp: { quality: 80, effort: 6 },
  avif: { quality: 70, effort: 9 },
  jpeg: { quality: 85, progressive: true },
  png: { compressionLevel: 9, progressive: true },
  sizes: [300, 600, 1200, 1920], // Responsive breakpoints
  skipExisting: true // Pular se já existir versão otimizada
};

// Função para verificar se arquivo já foi otimizado
const isOptimized = (imagePath) => {
  const dir = path.dirname(imagePath);
  const name = path.basename(imagePath, path.extname(imagePath));
  
  // Verificar se existe versão WebP
  const webpPath = path.join(dir, `${name}.webp`);
  return fs.existsSync(webpPath);
};

// Função para obter tamanho do arquivo
const getFileSize = (filePath) => {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024 / 1024).toFixed(2); // MB
};

// Função principal de otimização
const optimizeImage = async (imagePath) => {
  try {
    const dir = path.dirname(imagePath);
    const ext = path.extname(imagePath);
    const name = path.basename(imagePath, ext);
    
    console.log(`🔄 Processando: ${imagePath}`);
    
    const originalSize = getFileSize(imagePath);
    console.log(`   📏 Tamanho original: ${originalSize}MB`);
    
    // Obter metadados da imagem
    const metadata = await sharp(imagePath).metadata();
    console.log(`   📐 Dimensões: ${metadata.width}x${metadata.height}`);
    
    let totalSaved = 0;
    
    // 1. Gerar WebP
    const webpPath = path.join(dir, `${name}.webp`);
    if (!config.skipExisting || !fs.existsSync(webpPath)) {
      await sharp(imagePath)
        .webp(config.webp)
        .toFile(webpPath);
      
      const webpSize = getFileSize(webpPath);
      const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      console.log(`   ✅ WebP: ${webpSize}MB (${webpSavings}% menor)`);
      totalSaved += parseFloat(originalSize) - parseFloat(webpSize);
    }
    
    // 2. Gerar AVIF (formato mais moderno)
    const avifPath = path.join(dir, `${name}.avif`);
    if (!config.skipExisting || !fs.existsSync(avifPath)) {
      await sharp(imagePath)
        .avif(config.avif)
        .toFile(avifPath);
      
      const avifSize = getFileSize(avifPath);
      const avifSavings = ((originalSize - avifSize) / originalSize * 100).toFixed(1);
      console.log(`   ✅ AVIF: ${avifSize}MB (${avifSavings}% menor)`);
      totalSaved += parseFloat(originalSize) - parseFloat(avifSize);
    }
    
    // 3. Gerar versões responsivas em WebP
    for (const size of config.sizes) {
      if (metadata.width > size) { // Só redimensionar se for maior
        const responsivePath = path.join(dir, `${name}_${size}w.webp`);
        
        if (!config.skipExisting || !fs.existsSync(responsivePath)) {
          await sharp(imagePath)
            .resize(size, null, { 
              withoutEnlargement: true,
              fastShrinkOnLoad: false 
            })
            .webp(config.webp)
            .toFile(responsivePath);
          
          const responsiveSize = getFileSize(responsivePath);
          console.log(`   📱 ${size}w: ${responsiveSize}MB`);
        }
      }
    }
    
    // 4. Otimizar original se for JPEG/PNG
    if (['.jpg', '.jpeg', '.png'].includes(ext.toLowerCase())) {
      const optimizedPath = path.join(dir, `${name}_optimized${ext}`);
      
      if (!config.skipExisting || !fs.existsSync(optimizedPath)) {
        const sharpInstance = sharp(imagePath);
        
        if (ext.toLowerCase() === '.png') {
          await sharpInstance.png(config.png).toFile(optimizedPath);
        } else {
          await sharpInstance.jpeg(config.jpeg).toFile(optimizedPath);
        }
        
        const optimizedSize = getFileSize(optimizedPath);
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        console.log(`   🔧 Otimizado: ${optimizedSize}MB (${savings}% menor)`);
      }
    }
    
    console.log(`   💾 Total poupado: ${totalSaved.toFixed(2)}MB\n`);
    return totalSaved;
    
  } catch (error) {
    console.error(`❌ Erro ao processar ${imagePath}:`, error.message);
    return 0;
  }
};

// Função principal
const optimizeAllImages = async () => {
  console.log('🚀 Iniciando otimização de imagens...\n');
  
  try {
    // Encontrar todas as imagens
    const imagePatterns = [
      'public/images/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
      'src/assets/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}'
    ];
    
    let allImages = [];
    for (const pattern of imagePatterns) {
      const images = await glob(pattern);
      allImages = [...allImages, ...images];
    }
    
    // Filtrar imagens já otimizadas
    const imagesToProcess = allImages.filter(img => {
      // Pular se for uma versão já otimizada
      if (img.includes('_optimized') || img.includes('_300w') || 
          img.includes('_600w') || img.includes('_1200w') || 
          img.includes('_1920w')) {
        return false;
      }
      
      // Pular se já foi otimizada (opcional)
      if (config.skipExisting && isOptimized(img)) {
        console.log(`⏭️  Pulando (já otimizada): ${img}`);
        return false;
      }
      
      return true;
    });
    
    console.log(`📊 Encontradas ${allImages.length} imagens, processando ${imagesToProcess.length}\n`);
    
    if (imagesToProcess.length === 0) {
      console.log('✅ Todas as imagens já estão otimizadas!');
      return;
    }
    
    let totalSavings = 0;
    let processedCount = 0;
    
    // Processar cada imagem
    for (const imagePath of imagesToProcess) {
      const savings = await optimizeImage(imagePath);
      totalSavings += savings;
      processedCount++;
      
      // Mostrar progresso
      const progress = ((processedCount / imagesToProcess.length) * 100).toFixed(1);
      console.log(`📈 Progresso: ${processedCount}/${imagesToProcess.length} (${progress}%)\n`);
    }
    
    // Resumo final
    console.log('🎉 Otimização concluída!');
    console.log(`📊 Imagens processadas: ${processedCount}`);
    console.log(`💾 Total poupado: ${totalSavings.toFixed(2)}MB`);
    console.log(`📈 Redução média: ${((totalSavings / processedCount) || 0).toFixed(2)}MB por imagem`);
    
  } catch (error) {
    console.error('❌ Erro durante otimização:', error);
    process.exit(1);
  }
};

// Executar se chamado diretamente
if (require.main === module) {
  optimizeAllImages();
}

module.exports = { optimizeAllImages, optimizeImage };
